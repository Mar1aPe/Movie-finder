import './styles/index.scss';
import { getActors } from './modules/Actors';
import { getDirectors } from './modules/Directors';
import { movieInfo } from './modules/MovieInfo'


const input = document.querySelector('input')
console.log(input)


const movie = 'dracula'

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
        movieInfo(film)



    })

