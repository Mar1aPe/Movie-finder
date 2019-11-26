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

 const movieInfo = (film) => {
    title.innerText = film.Title
    photo.src = film.Poster
    plot.innerText = film.Plot
    year.innerText = film.Year
    rungen.innerText = `(${film.Runtime}) ${film.Genre}`
    imdb.innerText = film.imdbRating
    rateStar.style.visibility = 'visible'
}

const getDirectors = (film) => {
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

const getActors = (film) => {
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



 const movieNotFound = (film) => {
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


 const app = () => {
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
}
