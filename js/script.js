'use strict';

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
    
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Error');
}



for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних посмотренных фильмов", ""),
          b = prompt("На сколько оцениет его?", "");

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        console.log('done');
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}
console.log(personalMovieDB);


