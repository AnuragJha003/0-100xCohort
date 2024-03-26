import { func } from "prop-types";
import { useState,useEffect } from "react";

function App(){
    return <div>
        <Todo id={1} />
    </div>
}

//if u want to create a custom hook 
/* 
function useTodos(){
     const [todo,setTodo]=useState({});

    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todo?id="+id)
        .then(async function(res){
            const json=await res.json();
            setTodo(json.todo);
        })
    }, [])
}
and then const todo=useTodos()
*/
function Todo({id}){
    const [todo,setTodo]=useState({});

    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todo?id="+id)
        .then(async function(res){
            const json=await res.json();
            setTodo(json.todo);
        })
    }, [])
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