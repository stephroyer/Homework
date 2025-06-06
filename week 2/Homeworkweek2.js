// Week 2 Homework
// 1. Create 2 variables
let pizzaPlace="Imo's Pizza";
let numberOfToppings=8;
//2. print the vaiables and their types
console.log(pizzaPlace,typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
// 3. print a template literal that uses both variable to construct a short sentence about your pizza place
console.log(`At ${pizzaPlace} ,  We have  ${numberOfToppings}  toppings.`);

// 4. construct an if statement
      if (numberOfToppings >= 10) {
        console.log("A whole lot of pizza");

    }else   {
      console.log("Quality, not Quantity");

    }
// 5. construct a for loop to print all of the even number from 1 to 10
    numberOfToppings=10;
    for (let i = 1; i <= numberOfToppings; i++) {
      if (i % 2 === 0) {
        console.log(i);
    }
  }






