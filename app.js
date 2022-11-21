//manual approach (create package.json file in the root folder, create properties, etc)
//npm init (step by step procedure, press enter to skip)
//npm init -y (no procedure, every property comes default)

const _ = require("lodash");

const items = [1, [2, [3, 4]]];
const newItems = _.flattenDeep(items);
console.log(newItems); // [1,2,3,4]