const candidates = `["Le Filip", "Ruby On the Nail", "Leona Winter", "Lula Strega", "Misty Phoenix", "Perseo", "Norma Bell", "Edeha Noire", "Magnetica", "Afrodite Amour"]`;
const myArr = JSON.parse(candidates);
console.log(myArr[0]);
console.log(myArr[7]);

 myArr.forEach(candidate => {
    console.log(candidate);
});

const displayAllCandidates = myArr.map(candidate => `<li>${candidate}</li>`).join("");
document.getElementById("my-array").innerHTML = `<ul>${displayAllCandidates}</ul>`;