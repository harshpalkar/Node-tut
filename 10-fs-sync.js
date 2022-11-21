const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);
writeFileSync("./content/result.txt", "This is the modified text file");

const result = readFileSync("./content/result.txt", "utf-8");
console.log(result, first, second);
console.log("Done with the task");
console.log("Starting with the new task");