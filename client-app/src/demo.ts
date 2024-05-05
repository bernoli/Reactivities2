// demo of typescript
let data: number | string = 42;

data = "12";

console.log(data);

export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: "Aflac",
  numLegs: 2,
  makeSound: (sound: string) => {
    console.log(sound);
  },
};

const duck2: Duck = {
  name: "Duey",
  numLegs: 2,
  makeSound: (sound: string) => {
    console.log(sound);
  },
};

duck1.makeSound("Quack! Quack!");
duck2.makeSound("Quack!");

export const ducks = [duck1, duck2];
