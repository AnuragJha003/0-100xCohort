import axios from "axios";
import { useState,useEffect } from "react";

function App(){
    const [selectedId,setSelectedId]=useState(1);

    return <div>
        <button onClick={function() {
            setSelectedId(1);
        }}>1</button>
                <button onClick={function() {
            setSelectedId(2);
        }}>2</button>
                <button onClick={function() {
            setSelectedId(3);
        }}>3</button>
                <button onClick={function() {
            setSelectedId(4);
        }}>4</button>

        <Todo id={selectedId} />
    </div>
}

function Todo({id}){
    const [todo,setTodo]=useState({});

    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(response => {
            setTodo(response.data.todo);
        })
    }, [id])
    //if u want the fetching to be done on the basis of the id dependency the we pass the [id] in here in this way
    return <div>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
    </div>
}

export default App;