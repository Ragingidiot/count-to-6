let inputs = process.argv.slice(2);
let results = inputs.map(word => word[0]);
let combined = results.reduce((string, char) => string + char);

console.log(`[${inputs}] becomes "${combined}"`);
