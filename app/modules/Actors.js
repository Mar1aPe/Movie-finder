export const getActors = (film) => {

    // <div> with actors in it in 'Starring' section
    const cast = document.querySelector('.cast')

    // clear cast from prevoius search
    cast.innerHTML = ''

    //array of actors from API
    const actors = film.Actors.split(',')

    //appending actors to 'Starring' section
    actors.forEach(actor => {

        // <p> with actor's name
        const star = document.createElement('p')
        star.innerText = actor
        cast.appendChild(star)
        return cast
    })
}