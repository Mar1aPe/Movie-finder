export const getDirectors = (film) => {

    // <div> with directors in it in 'Director' section
    const director = document.querySelector('.director')

    // clear director from previous search
    director.innerHTML = ''

    //array of directors from API
    const directors = film.Director.split(',')

    //appending diectors to 'Director' section
    directors.forEach(dir => {

        // <p> with director's name
        const movieMaker = document.createElement('p')
        movieMaker.innerText = dir
        director.appendChild(movieMaker)
        return director
    })
}