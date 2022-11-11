const zooObject = {
    zoo_name: "Aleezus Zoo",
    zoo_description: "We do amazing things here!",
    arr_animals: [
        {animal_emoji: "🦁", animal_name: "Lion"},
        {animal_emoji: "🐍", animal_name: "Snake"},
        {animal_emoji: "🐟", animal_name: "Fish"},
    ],
    displayZooName: function(){
        console.log(this.zoo_name);
    },
    displayZooDescription: function(){
        console.log(this.zoo_description);
    },
    enumerateAnimals: function(){
        for (animal of this.arr_animals){
            console.log('Please welcome ' + animal.animal_name + ", a " + animal.animal_emoji + "!")
        }
    }
    }


zooObject.displayZooName();
zooObject.displayZooDescription();
zooObject.enumerateAnimals();