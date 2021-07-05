// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(movies) {
//    return movies.filter((movie) => movie.director === "director");
// }

function getAllDirectors(allDirectors) {
  const director = allDirectors.map((directed) => directed.director);
  return director;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const result= movies.filter(
    (movie) =>
    movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")
  );
  return result.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
if (scores.length === 0) {
  return 0;
}
let avg = scores.reduce(function (accumulateur, valeurcourante) {
  if (valeurCourante.score) {
    return accumulateur + valeurCourante.score;
}

return accumulateur;
}, 0);

return Number ((avg / scores.length).tiFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaAvgscore) {
  const drama = dramaAvgscore.filter((movie) => movie.genre.includes("Drama"));
  return  ratesAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  function compare (a, b){
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    }
    return 0;
  }
  let compareArray = movies.sort(compare);
  return compareArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(firstOrder) {
  const clone = [...firstOrder]
  clone.sort((a,b) => (a.title < b.title ? -1 : 1));
  const top20 = [];
  let limit = 20;
  if (clone.length < 20) {
    limite = clone.length
  }
  for (let i=0; i<limite; i++) {
    top20.push(clone[i].title);
  }
  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
