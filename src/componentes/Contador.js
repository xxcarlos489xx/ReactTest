import React, {useState} from 'react' 

const Contador = (props) => {

    const [name, setName] = useState('carlos')

    const {nameA, lastNameA} = props
    const [contador,setContador] = useState(0)

    const sumar = () => {
        setContador(contador+1)
    }
    const restar = () =>{
        setContador(contador-1)
    }
    return(
        <div className="App">
            <header className="App-header">
                {lastNameA}, {nameA}
                <p>
                    <div>{name}</div> <code>{contador}</code>
                </p>

                <button onClick={sumar}>
                    SUMAR
                </button>

                <button onClick={restar}>
                    RESTAR
                </button>

            </header>
        </div>
    )
}

export default Contador