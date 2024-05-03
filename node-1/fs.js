const fs = require("fs");

try {
  
const data = fs.readFileSync("./data.txt", { encoding: "utf-8", flag: "r" });
const dataArr = Array.from(data);
const dataString = dataArr.join("");
const filteredArray = dataString.split(" ");

let evenNumbers = 0;
let notEven = 0;
const verifyEven = (array) => {
  array.forEach((num) => {
    num % 2 === 0 ? evenNumbers++ : notEven;
  });
};

verifyEven(filteredArray);
const result = `The amount of even numbers in your .txt is: ${evenNumbers}.`;

fs.writeFileSync("evens.txt", result)
console.log("File written succesfully.")
  
} catch (error) {
  console.error("File was not found.")
}