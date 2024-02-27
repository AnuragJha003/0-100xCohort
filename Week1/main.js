/*function sum(num1,num2,fncCall){
    let result=num1+num2;
    //can call displayResult(sum) in here directly so yeh ek way h 
    fncCall(result);
}
function displayResult(data){
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is: "+ data);
}
//only call one function and display result of sum 
//but if not allowed to change anything then 
//use a callback pass a fnc as a parameter 

const ans=sum(1,2,displayResult); */
function cA(a,b,aF){
    const ans=aF(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value=cA(1,2,sum);//callbacks 

function greet(){
    console.log("Hello world");
}
setTimeout(greet,3*1000);//call this at intervals of time set to it 

//set interval is also there  get some html element and execute the fnc on it 
const element = document.getElementById("demo");
setInterval(function() {element.innerHTML += "Hello"}, 1000); //after evety interval the functin is getting executed in here 

