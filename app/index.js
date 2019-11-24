import './styles/index.scss';


const getFilm = (movie) => {
    return fetch(`http://www.omdbapi.com/?apikey=265f0738&t=${movie}`)
        .then(response => response.json())
}

//--------------- DOM elements----------------------------------

const h2 = document.getElementsByTagName('h2')[0]
const photo = document.querySelectorAll('img')[0]
const plot = document.getElementsByClassName('plot')[0]
const cast = document.querySelector('.cast')


getFilm('titanic')
    .then(film => {
        console.log(film)

        h2.innerText = film.Title
        photo.src = film.Poster
        plot.innerText = film.Plot
        const actors = film.Actors.split(',') //array of actors



        actors.forEach(actor => {
            const star = document.createElement('p')
            star.innerText = actor
            cast.appendChild(star)
            return cast
        })

    })
