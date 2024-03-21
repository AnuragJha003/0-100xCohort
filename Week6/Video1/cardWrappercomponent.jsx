function App() {

    return (
      <div style={{display: "flex"}}>
        <Card>
          hi there
        </Card>
        <Card>
          <div>
            hello from the 2nd card
          </div>
        </Card>
      </div>
    )
  }
  
  function Card({children}) { //wrapper component which is taking in other children components 
//style fo the card div 
//and then rendering the child div in here 
    return <div style={{
      border: "1px solid black",
      padding: 10,
      margin: 10
    }}>
      {children}
    </div>
  }
  
  export default App