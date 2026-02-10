const fs = require('fs').promises;

// async/await method
async function readFileExample() {
    try {
        const data = await fs.readFile('myfile.txt', 'utf-8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
readFileExample();


// second method (promisify)
const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify() {
    try {
        const data = await readFileAsync('myfile.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
readWithPromisify();