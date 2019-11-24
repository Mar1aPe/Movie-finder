export const getActors = (film) => {

    // <p> with actor's name

    const cast = document.querySelector('.cast')

    //array of actors from API

    const actors = film.Actors.split(',')

    //appending actors to 'Starring' section

    actors.forEach(actor => {
        const star = document.createElement('p')
        star.innerText = actor
        cast.appendChild(star)
        return cast
    })
}