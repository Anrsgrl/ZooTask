// The zoo consists of enclosures/aviaries based on different biomes.
// In addition to the biome, the enclosure/aviary is described by the area (in square meters) and the presence of a reservoir.
// // Animals
var Lion = {
    id: 1,
    name: "Lion",
    biome: "forest",
    needReservoir: true,
    area: 30,
    food: "meat",
    type: "predator",
    foodPerDay: 4
};
var Elephant = {
    id: 2,
    name: 'Elephant',
    biome: 'savanna',
    needReservoir: true,
    area: 60,
    food: "plants",
    type: "herbivore",
    foodPerDay: 12
};
var Monkey = {
    id: 3,
    name: 'Monkey',
    biome: 'forest',
    needReservoir: true,
    area: 6,
    food: "plants",
    type: "herbivore",
    foodPerDay: 12
};
var Lemur = {
    id: 4,
    name: 'Lemur',
    biome: 'forest',
    needReservoir: true,
    area: 6,
    food: "plants",
    type: "herbivore",
    foodPerDay: 12
};
// // Cages
var cage1 = {
    id: 1,
    biome: "savanna",
    space: 20,
    presenceReservoir: true,
    animals: [],
    typeOfAnimal: "herbivore"
};
var cage2 = {
    id: 2,
    biome: "forest",
    space: 70,
    presenceReservoir: true,
    animals: [],
    typeOfAnimal: "herbivore"
};
var cage3 = {
    id: 3,
    biome: "forest",
    space: 40,
    presenceReservoir: true,
    animals: [],
    typeOfAnimal: "predator"
};
// // Functions
function PlacingAnimals(animal, cage) {
    if (animal.type === cage.typeOfAnimal && animal.biome === cage.biome && animal.needReservoir === cage.presenceReservoir && animal.area <= cage.space) {
        console.log("".concat(animal.name, "'s placing is completed."));
        cage.animals.push(animal);
        console.log(cage.animals);
    }
    else {
        console.log("".concat(animal.name, " cant placing. Because requirements not met"));
    }
}
// // Attempts
PlacingAnimals(Lion, cage3);
PlacingAnimals(Lion, cage2);
PlacingAnimals(Elephant, cage2);
PlacingAnimals(Monkey, cage2);
PlacingAnimals(Lemur, cage2);
