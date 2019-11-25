import "@babel/polyfill";
import './styles/index.scss';
import { getActors } from './modules/Actors';
import { getDirectors } from './modules/Directors';
import { movieInfo } from './modules/MovieInfo'


//------------"Search Movie" button-------------------------

const button = document.querySelector('button')
const input = document.querySelector('input')
const title = document.getElementsByTagName('h2')[0]
const loader = document.querySelector('.loader')
console.log(loader)
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

    loader.style.display = 'flex'

    setTimeout(function () {
        loader.style.display = 'none'
        if (film.Response !== 'False') {
            getActors(film)
            getDirectors(film)
            movieInfo(film)
            input.value = ''
            rateStar.style.display = 'visible'
        } else {
            title.innerText = 'Sorry, try another movie'
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
