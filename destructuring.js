let userArray = process.argv.slice(3);

let data = {};
[data.username, data.email] = userArray;

console.log(data);
