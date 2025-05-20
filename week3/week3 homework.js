//Array pf pizzaTopping

const pizzaToppings = ["pepperoni", "mushrooms", "onions", "extra cheese"];

// Create greetCustomer function
function greetCustomer() {
    let toppingsList = '';
  
  // Loop through pizzaToppings to display each one
  for (let i = 0; i < pizzaToppings.length; i++) {
    toppingsList += pizzaToppings[i];

    if(i<pizzaToppings.length -1){
        toppingsList+= ', ';
    }
  }
  console.log("Welcome to Pizza House, our toppings are:" + toppingsList);
  
}
greetCustomer()

//create  getPizzaOrder function
let list ='';
let order = getPizzaOrder('large','Thick','pepperoni','omions')
function getPizzaOrder(size, crust, ...toppings){
    for (let i =0;i<toppings.length; i++){
        list+= toppings[i];

        if(i<toppings.length -1){
            list+= ', ';
        }
    }

  console.log(`one ${size} ${crust} crust pizza with ${list} coming up!`);
  return[size, crust, ...toppings];  

}
  
//create a pizzaprepare function
let pizzalist=['medium', 'thick',['olives', 'grenn peppers', 'onions']];
 let cookedpizza=preparePizza(pizzalist);
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

function servePizza(pizza){

    let toppingsListserve= '';
    for (let i = 0; i < pizza.toppings.length; i++) {
    toppingsListserve += pizza.toppings[i];

    if(i < pizza.toppings.length -1){
        toppingsListserve += ', ';
    }
}
    
    console.log(`order oup! here's your ${pizza.size} ${pizza.crust} crust pizza with ${toppingsListserve}. Enjoy!`);

}

 const mypizza  ={
        size: 'large',
        crust: 'thick',
        toppings: ['pepperoni', 'onions', 'olives']
    };

        servePizza(mypizza);




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











 

    