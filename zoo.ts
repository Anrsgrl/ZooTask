// The zoo consists of enclosures/aviaries based on different biomes.
// In addition to the biome, the enclosure/aviary is described by the area (in square meters) and the presence of a reservoir.

// The list of an animal type's characteristics:
// - name (giraffe, bear, etc.)
// - required biome
// - the need for a reservoir
// - required area per individual
// - what does it eat
// - predator or herbivore

// The list of an animal's characteristics:
// - name
// - age
// - the amount of food per day

// Settlement rules:
// An animal can only be settled in an enclosure/aviary that matches: 
// - its biome, 
// - the presence of a reservoir, 
// - there is enough space for this animal.
// Predators can only live with members of the same species.
// Herbivores can live with any herbivore.

// WHAT YOU HAVE TO DO =)
// 1. create all the needed interfaces (for animals and for aviaries), think about base interfaces and so on
// 2. create a function that will take an enclosure/aviary and an animal as parameters. this function should determine if the selected animal can be settled into the selected enclosure.
// if it is possible, the animal must be added to some array within the aviary object. if it's not possible, this function must send some message to the console

// // Animal's interface

interface IAnimalType{
    id: number;
    name: string;
    biome: string;
    needReservoir: boolean;
    area: number;
    food: string;
    type: "predator" | "herbivore";
}

interface IAnimal extends IAnimalType{
    foodPerDay: number;
}

// // Cage's interface

interface ISettlement{
    id: number;
    biome: string;
    presenceReservoir: boolean;
    space: number;
    animals:IAnimal[];
    typeOfAnimal: "predator" | "herbivore";
}

// // Animals

let Lion: IAnimal = {
    id: 1,
    name: "Lion",
    biome: "forest",
    needReservoir: true,
    area: 30,
    food: "meat",
    type: "predator",
    foodPerDay: 4
}

let Elephant: IAnimal = {
    id: 2,
    name: 'Elephant',
    biome: 'savanna',
    needReservoir: true,
    area: 60,
    food: "plants",
    type: "herbivore",
    foodPerDay: 12
}

let Monkey: IAnimal = {
    id: 3,
    name: 'Monkey',
    biome: 'forest',
    needReservoir: true,
    area: 6,
    food: "plants",
    type: "herbivore",
    foodPerDay: 12
}

let Lemur: IAnimal = {
    id: 4,
    name: 'Lemur',
    biome: 'forest',
    needReservoir: true,
    area: 6,
    food: "plants",
    type: "herbivore",
    foodPerDay: 12
}

// // Cages

let cage1: ISettlement = {
    id: 1,
    biome: "savanna",
    space: 20,
    presenceReservoir: true,
    animals: [],
    typeOfAnimal: "herbivore"
}

let cage2: ISettlement = {
    id: 2,
    biome: "forest",
    space: 70,
    presenceReservoir: true,
    animals: [],
    typeOfAnimal: "herbivore"
}

let cage3: ISettlement = {
    id: 3,
    biome: "forest",
    space: 40,
    presenceReservoir: true,
    animals: [],
    typeOfAnimal: "predator"
}

// // Functions

function PlacingAnimals(animal: IAnimal, cage: ISettlement){
    if(animal.type === cage.typeOfAnimal && animal.biome === cage.biome && animal.needReservoir === cage.presenceReservoir && animal.area <= cage.space){
        console.log(`${animal.name}'s placing is completed.`);
        cage.animals.push(animal);
        console.log(cage.animals);
    } else {
        console.log(`${animal.name} cant placing. Because requirements not met`);
    }
}

// // Attempts

PlacingAnimals(Lion, cage3);
PlacingAnimals(Lion, cage2);
PlacingAnimals(Elephant, cage2);
PlacingAnimals(Monkey, cage2);
PlacingAnimals(Lemur, cage2);

