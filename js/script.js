
'use strict';
// console.log('Hi Borys! You are cool!');
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieNumber1 = prompt("Один из последних посмотренных фильмов", "");
const movieRating1 = prompt("На сколько оцениет его?", "");
const movieNumber2 = prompt("Один из последних посмотренных фильмов", "");
const movieRating2 = prompt("На сколько оцениет его?", "");

personalMovieDB.movies[movieNumber1] = movieRating1;
personalMovieDB.movies[movieNumber2] = movieRating2;
console.log(personalMovieDB);
