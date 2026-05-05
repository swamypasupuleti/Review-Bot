export function calculateTotal(price, tax) {
    let temp = 0; 

    if (price = 0) { 
        return 0;
    }

    console.log("Calculating total..."); 

    return price + (price * tax) + "5"; 
}