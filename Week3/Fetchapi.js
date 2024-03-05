//FETCH STARTS THE PROCESS OF FETCHING A RESPONSE FROM THE SERVER 
//FTCH RETURNS A PROMISE THAT RESOLVES TO A RESPONSE OBJECT 
function getA(){
    fetch("url").then(function(response){
        response.json().then(function(finaldata){
            console.log(finaldata);
        })
    })
}
//Async await function for the fetch data not rendering it just fetching this data from the api or url source 
async function getA(){
    const response=await fetch("url");
    const finaldata=response.json();
    console.log(finaldata);
}