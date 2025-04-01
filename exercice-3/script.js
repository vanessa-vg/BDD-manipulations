// const fs = require('fs');
// const filepath = 'data.json';

// const content = fs.readFileSync(filepath, {encoding: 'utf-8', flag: 'r'});
// const data = JSON.parse(content);
// console.log(typeof data);

const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'data.json');
console.log(__dirname);

try {
    const content = fs.readFileSync(filepath, { encoding: 'utf-8', flag: 'r' });
    const data = JSON.parse(content);
    console.log(data[0]);
    console.log(data.length);
    console.log(data[4]);
    const average = parseFloat((data.reduce((sum, candidate) => sum + candidate.age, 0)) / data.length);
    console.log(average);
    console.log("Fichier trouvé et lu !");
    console.log("Type de data :", typeof data);
} catch (error) {
    console.error("Erreur lors de la lecture du fichier JSON :", error.message);
}




