
function startAnAquarium(numFish) {

    console.log(`There are ${numFish} fishes 🐟 in this aquarium.`);

    function addFish() {
        numFish = numFish + 1;
        console.log(`One 🐟 added! We now have ${numFish} in the aquarium`);

    }

    return addFish;

}


const aquarium_example = startAnAquarium(25);

aquarium_example()
aquarium_example()
aquarium_example()
aquarium_example()