//const React = require('react')
import React from 'react'
import logo from './logo.svg';
import './App.css';
import ContadorComponent from './componentes/Contador'
import ListaComponent from './componentes/TodoList'
import EscogePokemon from './componentes/PokemonList'

const App = () => {

    const name = 'carlos';
    const lastName = 'villanueva quito';
    

    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContadorComponent nameA={name} lastNameA={lastName}/>
        <ListaComponent></ListaComponent>
        <EscogePokemon></EscogePokemon>
        
      </header>
    </div>
    )
}

export default App