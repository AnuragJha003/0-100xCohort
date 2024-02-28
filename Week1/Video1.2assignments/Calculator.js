class Calculator{
    constructor(){
        this.result=0;
    }
    add(num){
        this.result+=num;
    }
    sub(num){
        this.result-=num;
    }
    mul(num){
        this.result*=num;
    }
    div(num){
        if(num===0){
            throw new Error("Cannot divide by Zero");
        }
        this.result/=num;
    }
    clear(){
        this.result=0;
    }
    getResult(){
        return this.result;
    }
    calculate(expression){
        expression=expression.replace(/\s+/g,' ').trim();//regex for removing multiple spaces and trim the expression 
    if(!/^[d\s+\-*/().]+$/.test(expression)){
        throw new Error("Invalid expression");
    }//validate expression for non numeric characters 
    try {
        this.result=eval(expression);
    } catch (error) {
        throw new Error("gg");
    }

    }
}