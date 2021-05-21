// create a function : DONE
function pizzaOven(name, type, cheese, topping) {
  return {
    name,
    type,
    cheese,
    topping,
  };
}
// 1st part of the assignment : DONE
console.log(
  pizzaOven(
    "deep dish",
    "traditional",
    ["mozzarella"],
    ["pepperoni", "sausage"]
  )
);
// 2nd instruction of the assignment : DONE
console.log(
  pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"]
  )
);
// 3rd part of the assignment : DONE
console.log(
  pizzaOven(
    "chicago pastrami",
    "thin crusted",
    ["mozzarella", "feta", "cheddar"],
    ["mushrooms", "olives", "onions", "pastrami meat", "chicken"]
  )
);
console.log(
  pizzaOven(
    "local pizza",
    "wood fire",
    ["feta", "cheddar"],
    ["pine-apple", "onions", "pastrami meat", "chicken"]
  )
);

//BONUS CHALLENGE: create randomPizza function : DONE
function randomizer(property) {
  return Math.floor(Math.random() * property.length);
}
function nonRepeatingIngredients(count, arrayOfIngredients) {
  var returnArray = [];
  for (var i = 0; i < count; i++) {
    if (returnArray.includes(arrayOfIngredients[i])) {
      count++;
    }
    returnArray.push(arrayOfIngredients[i]);
  }
  return returnArray;
}
function randomPizza() {
  var names = ["Sicilian", "Greek", "Detroit", "New York-Style"];
  var types = ["sweet", "spicy", "windy-city", "i d k"];
  var cheeses = [
    "shredded cheddar",
    "paneer",
    "mixed cheese",
    "american",
    "feta",
  ];
  var toppings = [
    "mushrooms",
    "bell peppers",
    "spinach",
    "chillies",
    "olives",
    "chicken",
    "pork",
    "beef",
    "saucage",
    "bacon",
  ];
  // there can only be one name and type
  var name = names[randomizer(names)] + " pizza";
  var type = types[randomizer(types)];

  // there can be random amounts of cheese and toppings but not zero ok
  var numberofcheese = randomizer(cheeses) + 1;
  var numberoftoppings = randomizer(toppings) + 1;
  var topping = nonRepeatingIngredients(numberoftoppings, toppings);
  var cheese = nonRepeatingIngredients(numberofcheese, cheeses);
  return pizzaOven(name, type, cheese, topping);
}
console.log(randomPizza());
