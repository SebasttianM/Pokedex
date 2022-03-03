const pokemonContainer= document.querySelector('.pokemon-container')
const form = document.getElementById('form')
const search = document.getElementById('search')


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then ((res) => res.json())
    .then ( (data) => {createPokemon(data)
        console.log(data) 
    });
}

const SEARCH_URL= ('https://pokeapi.co/api/v2/pokemon/${name.toLocaleLowerCase}/')


function fetchPokemons(number){
    for (let i = 1; i <= number; i++) {

        fetchPokemon(i)
        
    }
}
fetchPokemons(50)

const createPokemon= (pokemon)=>{
    
    const pokeDiv = document.createElement('div')
    pokeDiv.classList.add('pokemon-container')

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    
    const id = document.createElement('p')
    id.textContent= pokemon.id

    const name = document.createElement('h2')
    name.textContent= pokemon.name

    const type= document.createElement('span')
    type.textContent= pokemon.types[0].type.name
    
    pokeDiv.appendChild(type)
    pokeDiv.appendChild(sprite)
    pokeDiv.appendChild(name)
    pokeDiv.appendChild(id)
    pokemonContainer.appendChild(pokeDiv)
}

form.addEventListener('submit', e =>{
    e.preventDefault()

    const searchTerm = search.value.toLocaleLowerCase()
    if (searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL+ searchTerm)
        search.value=''
    }else{
        swal.fire({
            title: 'Error!',
            text: 'Please write a word of term for your search',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
})