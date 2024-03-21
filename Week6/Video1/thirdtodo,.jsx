import { useState } from "react";

function App(){
    const [todos,setTodos]=useState([{
        title:"Go to gym",
        description:"Need to hit her on the bottom"
    },{
        title:"Go to gym",
        description:"Need to hit her on the bottom"
    },{
        title:"Go to gym",
        description:"Need to hit her on the bottom"
    }])
    return(
        <div>
            {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
        </div>
    )
}
function Todo ({title,description}){
    return <div>
        <h1>{title}</h1>
        <h4>{description}</h4>    
        </div>
}

export default App;