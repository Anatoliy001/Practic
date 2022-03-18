const number0fFilms = +prompt('Скільки фільмів ви вже переглянули?', ''); 

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 


const a = prompt('Один із остайніх переглянутих фільмів?', ''),
      b = prompt('На скільки оцінете його?', ''),
      c = prompt('Один із остайніх переглянутих фільмів?', ''),
      d = prompt('На скільки оцінете його?', '');

 personalMovieDB.movies[a] = b;  
 personalMovieDB.movies[c] = d;   

 console.log(personalMovieDB);