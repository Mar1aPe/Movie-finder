import "@babel/polyfill";
import './styles/index.scss';

import { movieInfo, movieNotFound, getDirectors, getActors } from './modules/MovieInfo'

// build your app here

const button = document.querySelector('button')
const input = document.querySelector('input')
const loader = document.querySelector('.loader')
const rateStar = document.querySelector('.fas')

// ---------getting Movie Title from user's input------------

const titleToSearch = () => {
    return input.value
}


//------------fetch movie by title from user's input--------

const getFilm = (movie) => {
    return fetch(`https://www.omdbapi.com/?apikey=265f0738&t=${movie}`)
        .then(response => response.json())
}

//------------appending movie details to body----------------

const insertMovieData = (film) => {
    loader.style.display = 'flex'
    setTimeout(function () {
        loader.style.display = 'none'
        if (film.Response !== 'False') {
            getActors(film)
            getDirectors(film)
            movieInfo(film)
            rateStar.style.display = 'visible'
        } else {
            movieNotFound()
        }
    }, 2000)

}

//fuction for eventListener on button 'click' using above functions

const retrieveData = async () => {
    const movie = titleToSearch()
    const film = await getFilm(movie)
    insertMovieData(film)
    input.value = ''

}

// serach movie on button click
button.addEventListener('click', retrieveData)

// serach movie on "enter" key
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        retrieveData()
    }
})


