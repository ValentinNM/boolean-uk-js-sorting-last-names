const lastName = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];
console.log("Initial lastName array: " + lastName);

// const myName = window.prompt("Please insert your Last Name below:");
// window.alert("Thank you!" + myName);

const myName = "Mocanu";
lastName.push(myName);
console.log("last name after push : " + lastName);

const sortedLastName = lastName.sort();
console.log("This is the sorted array: " + sortedLastName);

let lastNameUC = lastName.map((lastName) => {
  // for loop to be used // to push
  return lastName.toUpperCase();
});
console.log("This is the Uppercassed array: " + lastNameUC);
//  let positionofmy last name

for (let i = 0; i < lastName.length; i++) {
  const myLastNamePosition = lastName[i];
  if (myLastNamePosition = 4) {
    const positionOfMyName = myLastNamePosition;
  }

  console.log(`This is the position of may last name: ${myLastNamePosition}`);
}