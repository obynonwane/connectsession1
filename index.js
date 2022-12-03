class newSession {
  listOfPlates = ["white", "black", "yellow", "red"];
  constructor() {}

  person = {
    first_name: "John",
    last_name: "Doe",
    complexion: "black",
    age: 23,
    height: "5.7ft",
    takeItTomommy: () => {
      console.log("Bring it to my room");
    },
  };

  displayInfo() {
    for (let i = 0; i < this.listOfPlates.length; i++) {
      // defining  conditionals
      if (this.listOfPlates[i] == "yellow") {
        console.log(`Mommy I found ${this.listOfPlates[i]} plate`);
        console.log(this.person.takeItTomommy());
        return;
      } else {
        console.log(`Mommy I found ${this.listOfPlates[i]} plate`);
      }
    }
    console.log("Welcome People");
  }
}

const newClass = new newSession();

console.log(newClass.displayInfo());
// //Defined an array

// //JSON Object
// const person = {
//   first_name: "John",
//   last_name: "Doe",
//   complexion: "black",
//   age: 23,
//   height: "5.7ft",
//   takeItTomommy: () => {
//     console.log("Bring it to my room");
//   },
// };

// //defined a loop
// for (let i = 0; i < listOfPlates.length; i++) {
//   //defining  conditionals
//   if (listOfPlates[i] == "yellow") {
//     console.log(`Mommy I found ${listOfPlates[i]} plate`);
//     console.log(person.takeItTomommy());
//     return;
//   } else {
//     console.log(`Mommy I found ${listOfPlates[i]} plate`);
//   }
// }
