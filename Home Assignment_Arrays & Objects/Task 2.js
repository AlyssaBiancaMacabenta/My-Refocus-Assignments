
const dishMenu = {
    "restaurantName": "Aleezus Restaurant",
    "dishes": [
            {
                dishID: "first",
                dishName: "Adobo",
                dishPrice: "₱500",
                ingredients: ["pork", " soy sauce", " vinegar"],
            },
            {
                dishID: "second",
                dishName: "Sinigang",
                dishPrice: "₱500",
                ingredients: ["pork", " tomato", " onion"],
            },
            {
                dishID: "third",
                dishName: "Tinola",
                dishPrice: "₱500",
                ingredients: ["chicken", " bottle gourd", " ginger"],
            }
        ],

    "displayRestaurantName": function () {
        console.log(this.restaurantName);
    }, 

    "displayMenu": function () {
        for (menu of this.dishes){
        console.log(`\n ${menu.dishName}, ${menu.dishPrice} \n Contains ${menu.ingredients}.`);
        }
    },
}

dishMenu.displayRestaurantName();
dishMenu.displayMenu();
