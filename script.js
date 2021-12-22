let numberOfFilms = 0;
var reg = /^[а-яА-ЯёЁa-zA-Z. ]+$/;
var rez = false;
while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) == true){
        numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '1');
        rez = reg.test(numberOfFilms); 
    }
let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    numberFilms: function(DB){
        if(DB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }
        else if(DB.count > 10 && DB.count < 30){
            alert('ВЫ классический зритель')
        }
        else if(DB.count >= 30){
            alert('Вы киноман');
        }
        else{
            alert('Произошла ошибка!');
        }
    },
    writeYourFilms: function(DB){
        for(let i = 0; i < 2; i++){
            var reg = /^[а-яА-ЯёЁa-zA-Z. ]+$/;
            var rez = false;
            let lastFilm = '';
            let gradeOfFilm = '';
            while(lastFilm == null || lastFilm == '' || lastFilm.length > 50 || rez == false){
                lastFilm = prompt('Один из последних просмотренных фильмов?', 'Хищник');
                rez = reg.test(lastFilm); 
            }
            while(gradeOfFilm == null || gradeOfFilm == '' || isNaN(gradeOfFilm) == true){
                gradeOfFilm = prompt('На сколько оцените его?', '10');
            }
            DB.movies[lastFilm] = gradeOfFilm;
        }
    },
    showMyDB: function (DB){
        if(DB.privat == false){
            console.log(DB);
        } 
    },
    writeYourGenres: function (DB){
        for(let i = 0; i < 3; i++){
            let s;
            while(s == null || s == '' || s.length > 50 || rez == false){ 
                s = prompt(`Ваш любимый жанр под номером ${i + 1}`, 'Ужас');
                rez = reg.test(s); 
                if(i > 0){
                    if(DB.genres[0] == s){
                        rez = false;
                    }
                }
                if(i > 1){
                    if(DB.genres[0] == s || DB.genres[1] == s){
                        rez = false;
                    }
                }
            }
            DB.genres.push(s);
        }
    },
    toggleVisibleMyDB: function (DB){
        if(DB.privat == true){
            DB.privat = false;
        }
        else{
            DB.privat = true;
        }
    }
};
//personalMoviesDB.toggleVisibleMyDB(personalMoviesDB);
personalMoviesDB.numberFilms(personalMoviesDB);
personalMoviesDB.writeYourFilms(personalMoviesDB);
personalMoviesDB.showMyDB(personalMoviesDB);
personalMoviesDB.writeYourGenres(personalMoviesDB);
personalMoviesDB.genres.forEach((v,i,a)=>(console.log(`Любимый жанр номер ${i+1} это ${v} `)));
