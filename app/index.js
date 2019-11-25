import "@babel/polyfill";
import './styles/index.scss';
import { getActors } from './modules/Actors';
import { getDirectors } from './modules/Directors';
import { movieInfo } from './modules/MovieInfo'


//------------"Search Movie" button-------------------------

const button = document.querySelector('button')
const input = document.querySelector('input')

// ---------getting Movie Title from user's input------------

const titleToSearch = () => {
    return input.value
}


//------------fetch movie by title from user's input--------

const getFilm = (movie) => {
    return fetch(`http://www.omdbapi.com/?apikey=265f0738&t=${movie}`)
        .then(response => response.json())
}

//------------appending movie details to body----------------

const insertMovieData = (film) => {
    getActors(film)
    getDirectors(film)
    movieInfo(film)
}

//fuction for eventListener on button 'click' using above functions

const retrieveData = async () => {
    const movie = await titleToSearch()
    const film = await getFilm(movie)
    insertMovieData(film)
    input.value = ''
    rateStar.style.display = 'visible'


}

button.addEventListener('click', retrieveData)

