// Write a program that uses the forEach loop to iterate over an array of names and checks if a particular name is present in the array. Display a message indicating whether the name was found or not.

const names = ["John", "Jane", "Alex", "Sarah", "Michael"];
const nameToFind = "Sarah";
let found = false;

names.forEach((name) => {
  if (name === nameToFind) {
    found = true;
  }
});

if (found) {
  console.log(`${nameToFind} was found in the array.`);
} else {
  console.log(`${nameToFind} was not found in the array.`);
}
