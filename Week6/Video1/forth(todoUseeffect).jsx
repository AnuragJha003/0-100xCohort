import { useState,useEffect } from "react";

function App(){
    const [todos,setTodos]=useState([]);

    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async(res) => {
            const json=await res.json();
            setTodos(json.todos);
        })
    },[]);

    return (
        <div>
            {todos.map(({title,description}) => <Todo title={title} description={description} />)}
        </div>
    )
}
function Todo({title,description}){
    return <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
    </div>
}
export default App;