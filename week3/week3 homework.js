//Array pf pizzaTopping

const pizzaToppings = ["pepperoni", "mushrooms", "onions", "extra cheese"];

// Create greetCustomer function
function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings are:");
  
  // Loop through pizzaToppings to display each one
  for (let i = 0; i < pizzaToppings.length; i++) {
    console.log(pizzaToppings[i] +",");
  }
}greetCustomer()

//create  getPizzaOrder function
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
function listToppings(toppings) {
  const count = toppings.length;

  if (count === 0) {
    return "";
  } else if (count === 1) {
    return toppings[0];
  } else if (count === 2) {
    return toppings[0] + " and " + toppings[1];
  } else {
    const last1 = toppings.slice(0, -1).join(", ");
    const last = toppings[toppings.length - 1];
    return `${last1}, and ${last}`;
  }
   
}console.log("Our toppings are: " + listToppings(pizzaToppings) + ".");











 

    