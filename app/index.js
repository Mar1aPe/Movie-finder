import './styles/index.scss';
import { getActors } from './modules/Actors';
import { getDirectors } from './modules/Directors';

//--------------- DOM elements----------------------------------

const h2 = document.getElementsByTagName('h2')[0]
const photo = document.querySelectorAll('img')[0]
const plot = document.getElementsByClassName('plot')[0]
//const director = document.querySelector('.director')

const movie = 'titanic'

// -------------Getting movie data from API --------------------

const getFilm = (movie) => {
    return fetch(`http://www.omdbapi.com/?apikey=265f0738&t=${movie}`)
        .then(response => response.json())
}



getFilm(movie)
    .then(film => {
        console.log(film)
        getActors(film)
        getDirectors(film)

        h2.innerText = film.Title
        photo.src = film.Poster
        plot.innerText = film.Plot

    })

