var movies = require('./movie') ;
var movie2 = require('./movie2') ;
var emilyMovies = movie2() ;
movies.favMovie = "The Notebook" ;
console.log("Emily's favourite movie is : " + movies.favMovie) ;
