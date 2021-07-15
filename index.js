// So we start with an array of last names, and from there you're going
// to perform a bunch of operations in it!

// Instructions
// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
// - Have a prompt that adds your last name to the array
// - Have an output that sorts the names alphabetically
// - Have an output that tells you what is the position
//  of your name in the sorted array
// - Have an output that Uppercase's all names

// Tips
// - Try to keep track of your data, and when it is being changed
// - Remember to google docs if you don't know or remember certain details

//  Challenge
//  Let's take it a step further and group each sorted name with its
// upper-cased one in a sub-array, which in its turn will go inside another array
// to group it all together.
//  Output the result into the console.

//====================

const lastName = [ 'Mason', 'Marcora', 'Rico', 'Neves', 'Ivanov'];
console.log("Initial lastName array: " + lastName);

// const myName = window.prompt("Please insert your Last Name below:");
// window.alert("Thank you!" + myName);

const myName = "Mocanu";
lastName.push(myName);
console.log("last name after push : " + lastName);

const sortedLastName = lastName.sort();
console.log("This is the sorted array: " + lastName);

let lastNameUC = lastName.map((lastName) => {
  // for loop to be used // to push
  return lastName.toUpperCase();
});
console.log("This is the Uppercassed array: " + lastNameUC);
//  let positionofmy last name

// This is the sorted array: lastName =[Marcora , Mason , Mocanu]

for (let i = 0; i < lastName.length; i++) {
  const myLastNamePosition = lastName[i];
  //   console.log("line 45 -> myLastNamePosition is:" + myLastNamePosition)
  if (myLastNamePosition === "Mocanu") {
    const positionOfMyName = i + 1;
    console.log(`This is the position of my last name: ${positionOfMyName}`);
  }
}

//  Solution for grouping arrrays // 

const groupedLastName = lastName.concat(lastNameUC);
console.log("This is the grouped list of names: " + groupedLastName);

groupedLastName.sort();
console.log("this is the grouped one sortded: " + groupedLastName);

newFunction();

function newFunction() {
  const result = [];
  for (let i = 0, n = lastName.length; i + 1 < n; i += 2) {
    result.push([lastName[i], lastName[i + 1]]);
    console.log("This is the result: " + result);
  }
}

//   End of solution // 