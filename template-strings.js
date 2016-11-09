let name = process.argv[2];

//let output = "Hello, " + name + "!\nYour name lowercased is \"" + name.toLowerCase() + "\".";

let output = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`

console.log(output);
