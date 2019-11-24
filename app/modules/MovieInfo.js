export const movieInfo = (film) => {

    //--------------- DOM elements----------------------------------

    const title = document.getElementsByTagName('h2')[0]
    const photo = document.querySelectorAll('img')[0]
    const plot = document.getElementsByClassName('plot')[0]
    const year = document.querySelector('.year')
    const rungen = document.querySelector('.rungen')
    const imdb = document.querySelector('.imdb')


    title.innerText = film.Title
    photo.src = film.Poster
    plot.innerText = film.Plot
    year.innerText = film.Year
    rungen.innerText = `(${film.Runtime}) ${film.Genre}`
    imdb.innerText = film.imdbRating


}