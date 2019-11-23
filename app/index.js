import './styles/index.scss';


let dhfg = []

const getMovie = (movie) => {

    return fetch(`http://www.omdbapi.com/?apikey=265f0738&t=${movie}`)
        .then(response => response.json())
        .then(data => console.log(data.Title))
}



getMovie('home alone');