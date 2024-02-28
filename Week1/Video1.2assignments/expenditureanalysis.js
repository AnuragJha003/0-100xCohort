function calculateTotal(transactions){
    //transactions is the object 
    const categoryTotal={}; //use object to store total spent 

    //iterate for all transactions 
    transactions.forEach(transaction => {
        const {category,price}=transaction;

        if (categoryTotal[category])//exists
        {
            categoryTotal[category]+=price;
        } 
        else{
            categoryTotal[category]=price;
        }
    });
    //converting object into array of objects 
    const result=Object.keys(categoryTotal).map(category =>({
        category,
        totalSpent:categoryTotal[category]
    }));

    return result;
}