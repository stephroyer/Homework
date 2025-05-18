//Array pf pizzaTopping
let pizzaToppings =["cheese", "pinapple","pepperoni","onions","chicken"];

//create a greetcustomer function 
function greetcustomer(){
    console.log("Welcome to Pizza Housse, our Toppings are:");
    for (let topping of pizzaToppings){
        console.log(topping +",");
    }
}  greetcustomer()

//create a getPizzaOrder function
let order = getPizzaOrder('large','Thick','pepperoni','omions')
function getPizzaOrder(size, crust, ...toppings){
  console.log(`one ${size} ${crust} crust pizza with ${toppings} coming up!`);
  return[size, crust, ...toppings];  

}
  
//create a pizzaprepare function
let pizza=['medium', 'thick',['olives', 'grenn peppers', 'onions']];
 let cookedpizza=preparePizza(pizza);
function preparePizza([size, crust, toppings]){
    console.log( 'Coming up!!! ....your pizza is cooking ....');

    const Object ={
        size: size,
        crust: crust,
        toppings: toppings
    };
    return Object;
}


//create a servePizza function

function servePizza(size, crust, ...toppings){
    console.log(`order oup! here's your ${size} ${crust} crust pizza with ${toppings}. Enjoy!`);

}

 const mypizza  ={
        size: 'large',
        crust: 'thick',
        toppings: ['pepperoni', 'onions', 'olives']
    };




console.log(order);

servePizza("lagre", "thick", "pepperoni, onions")




//bonus challenge





 

    