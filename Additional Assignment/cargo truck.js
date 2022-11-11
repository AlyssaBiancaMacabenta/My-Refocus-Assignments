const cargo_trucks = {
    cargo_name: "Land21 Cargo Truck",
    capacity: 14500,
    items: [
        {"item_name": "SUV", "item_weight": "3000"}, 
        {"item_name": "Audi A8", "item_weight": "2000"}, 
        {"item_name": "Nissan Navara", "item_weight": "2400"}, 
        {"item_name": "Ford Mustang", "item_weight": "1700"}
    ],
    isOverloaded: function (){
        let total_weight = 0; 
        for (car_obj of this.items){
            total_weight += car_obj[item_weight];
        }
    }
    }

console.log(cargo_trucks)