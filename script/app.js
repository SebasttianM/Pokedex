const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
// const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
// const pokeArray= Object.entries(fetchPokemon(9))
// console.log(pokeArray)
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.querySelector('#main')

// function fetchPokemon(id) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then ((res) => res.json())
//     .then ((data) => {createPokemon(data)
        
// });
// }
const getPokemon = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        if (data.results.length === 0) {
            swal.fire({
                title: 'Error!',
                text: 'Sorry, there are no related pokemons',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            createPokemon(data.moves)
        }
    } catch (error) {
        swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}
// function fetchPokemons(number){
//     for (let i = 1; i <= number; i++) {

//         fetchPokemon(i)
        
//     }
// }



const createPokemon = (pokemons) =>{
    main.innerHTML=''
    pokemons.forEach(pokemon =>{
        const { move}= pokemon
        const pokeDiv = document.createElement('div')
        pokeDiv.classList.add('movie')
        pokeDiv.innerHTML=`
        <img src="" alt="">
        <div class= "movie-info">
            <h3>${move[0].name}</h3>
            <span class ="green"></span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
            <h3></h3>
        </div>
        `

        main.appendChild(pokeDiv)
    })
    
}


// form.addEventListener('submit', e =>{
//     e.preventDefault()

//     const searchTerm = search.value.toLocaleLowerCase()
//     if (searchTerm && searchTerm !== ''){
//         getMovies(SEARCH_URL+ searchTerm)
//         search.value=''
//     }else{
//         swal.fire({
//             title: 'Error!',
//             text: 'Please write a word of term for your search',
//             icon: 'error',
//             confirmButtonText: 'Cool'
//         })
//     }
// }