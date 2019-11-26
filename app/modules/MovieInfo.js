//--------------- DOM elements----------------------------------
const title = document.getElementsByTagName('h2')[0]
const photo = document.querySelectorAll('img')[0]
const plot = document.getElementsByClassName('plot')[0]
const year = document.querySelector('.year')
const rungen = document.querySelector('.rungen')
const imdb = document.querySelector('.imdb')
const rateStar = document.querySelector('.fas')
const director = document.querySelector('.director')
const cast = document.querySelector('.cast')


// -------------inserting movie data to DOM elements------------

export const movieInfo = (film) => {
    title.innerText = film.Title
    photo.src = film.Poster
    plot.innerText = film.Plot
    year.innerText = film.Year
    rungen.innerText = `(${film.Runtime}) ${film.Genre}`
    imdb.innerText = film.imdbRating
    rateStar.style.visibility = 'visible'
}

export const getDirectors = (film) => {
    director.innerHTML = '' // clear director from previous search
    const directors = film.Director.split(',')  //array of directors from API
    //appending diectors to 'Director' section
    directors.forEach(dir => {
        const movieMaker = document.createElement('p')
        movieMaker.innerText = dir
        director.appendChild(movieMaker)
        director.style.visibility = 'visible'
        return director
    })
}

export const getActors = (film) => {
    cast.innerHTML = '<ul></ul>' // clear cast from prevoius search
    const actors = film.Actors.split(',')   //array of actors from API
    //appending actors to 'Starring' section
    actors.forEach(actor => {
        const star = document.createElement('li')
        star.innerText = actor
        cast.appendChild(star)
        cast.style.visibility = 'visible'
        return cast
    })
}



export const movieNotFound = (film) => {
    title.innerText = 'Sorry, try another movie'
    photo.src = ''
    plot.innerText = ''
    year.innerText = ''
    rungen.innerText = ''
    imdb.innerText = ''
    rateStar.style.visibility = 'hidden'
    director.style.visibility = 'hidden'
    cast.style.visibility = 'hidden'
}