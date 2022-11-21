const path = require("path"); //Common JS module technique
// import { sep, join, basename, resolve } from "path"; //ES JS module technique

console.log(path.sep); //The separator symbol used in your machine
const filePath = path.join("/content", "subfolder", "text.txt"); //To join something to your path
console.log(path.basename.filePath);
console.log(path.resolve(__dirname, "content", "subfolder", "test.txt")); //Find the absolute path of your system and this project