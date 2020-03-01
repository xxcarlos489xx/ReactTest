import React, { useState } from 'react'

const TodoList = () =>{
    const [item, setItem] = useState("item");
    const [list, setList] = useState("");

    const agregarItem = (event) =>{
        //setList([...list, item])
        setList([...list, event.target.value])
    }
    return (
        <div>
            <h1>TODO LIST APP</h1>
            <br/>
            <input value="" placeholder="ingrese un elemento" onChange={agregarItem}/>
            <h2>
                {list}
            </h2>
        </div>
    )
}

export default TodoList