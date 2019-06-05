var movies = [
    {
        title: "Baywatch",
        rating: 3.5,
        hasWatch: true
    },
    {
        title: "Endgame",
        rating: 4,
        hasWatch: false
    },
    {
        title: "The Lobster",
        rating: 5,
        hasWatch: true
    }
]

function stringBuilder(movie) {
    var intro;
    if(movie.hasWatch) {
        intro = 'You have watched "'

    } else {
        intro = 'You have not seen "'
    }
   return intro + movie.title + '" - ' + movie.rating + " stars";
}

movies.forEach(movie => {
    console.log(stringBuilder(movie))
});

console.log("USE YOUR OWN MOVIES!")

