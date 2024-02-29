function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}//sync function 

function findSumTill100(){
    return findSum(100);
}//synchronous 

/*setTimeout(findSumTill100,1000);
//will call it after 1s but dosnt wait continues 
console.log("Hellow");*/

//converting async to sync using busy waiting 
//1>
function syncSleep(){
    let a=1;
    for(let i=0;i<100000000;i++){
        a++;
    }
}//keeping it busy
//async fnc for reading file 
//async function to read the file 

const fs=require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})//asynchronous function 
//Promises wrapper for a new async func on ourself

function krf(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
}
//Promises are syntactical sugar which makes code readable 

//callback function ot execute 
function onDone(data){
    console.log(data);
}//call back function to call 

krf(onDone);

//now promises used 
//no callback new async function 
function krf(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

//callback fnc to wahin ondone upar m 
//function krf is an instance of the promise 
//and .then is the function calling the resolve fnc on the data


krf().then(onDone); //calling the async function with the promise and the callback function in here 
//initialising a promise 

var d=new Promise(function(onDone){

}); //gg yahin h initialisation 

//dummy async  that almost immediately resolves 
function krf(){
    let p=new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}
//actually logging the data with what the function above resolved with 
const val=krf();
val.then(function(data){
    console.log(data);
})

//Async await 
function krfasync(){
    //do some async logic here 
    let p=new Promise(function(resolve){
        resolve("hi there");
    }); //if we use a settimeout then in the await line it will wait for some seconds as mentioned 
    return p;
}
//Asynchronous function 
//Async await functions 
async function main(){
    //no callbacks no. then syntax 
    let value=await krfasync();
    //thread is waiting here in the await function
    //but in case of .then it comes in immediately 
    console.log(value);
}

main();
//All the 3 perform the same activity 
//Callback , promise(then) syntax , Async await syntax 
