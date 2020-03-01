import React, { useState } from 'react'

const AgregarPokemon = () =>{
    const [value, setValue] = useState("charmander")
    const [pokemon, setPokemon] = useState("")
    const [pokemonImg, setPokemonImg] = useState("")

    const changeValue = (e) =>{
        setValue(e.target.value)
    }

    const addPokemon = (event) =>{
        event.preventDefault()
        setPokemon(value)
        console.log(value)
        const url =`https://pokeapi.co/api/v2/pokemon/${value}`

        fetch(url)
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setPokemonImg(data.sprites.front_default)
        })
        setValue('')
    }
    return (
        <div>
            <h1>POKEMON</h1>
            <br/>
            <form className="App" onSubmit={addPokemon}>
            <input value={value} placeholder="ingrese un elemento" onChange={changeValue}/>
            <button>Add</button>
            </form>
            
            <img src={pokemonImg} width={300}></img>
            <h1>{pokemon}</h1>
        </div>
    )
}

export default AgregarPokemon