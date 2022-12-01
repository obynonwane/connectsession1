//Defined an array
const listOfPlates = ["white", "black", "yellow", "red"];

//JSON Object
const person = {
  first_name: "John",
  last_name: "Doe",
  complexion: "black",
  age: 23,
  height: "5.7ft",
  takeItTomommy: () => {
    console.log("Bring it to my room");
  },
};

//defined a loop
for (let i = 0; i < listOfPlates.length; i++) {
  //defining  conditionals
  if (listOfPlates[i] == "yellow") {
    console.log(`Mommy I found ${listOfPlates[i]} plate`);
    console.log(person.takeItTomommy());
    return;
  } else {
    console.log(`Mommy I found ${listOfPlates[i]} plate`);
  }
}
