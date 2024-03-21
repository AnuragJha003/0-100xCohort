import { useState } from "react";

function App(){
    const [firstTitle,setFirstTitle]=useState("");

    function changeTitle(){
        setFirstTitle("My name is"+ Math.random());
    }

    return (
        <div>
            <button onClick={changeTitle}>Click to change title</button>
            <Header title={firstTitle} />
            <Header title="My name is Ramzdale" />
        </div>
    )
}
function Header({title}) {
    return <div>
        {title}
    </div>           
}

export default App;