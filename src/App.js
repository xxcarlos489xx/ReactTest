//const React = require('react')
import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {

    const [name, setName] = useState('carlos')

    const [contador,setContador] = useState(0);

    const sumar = () => {
        setContador(contador+1)
    }

    const restar = () =>{
        setContador(contador-1)
    }

    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <div>{name}</div> <code>{contador}</code>.
        </p>

        <button onClick={sumar}>
            SUMAR
        </button>

        <button onClick={restar}>
            RESTAR
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
}

export default App