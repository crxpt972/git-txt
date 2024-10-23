// Reverse string
/*
function reverseString(str) {
    return str.split('').reverse().join('');
}
let phrase = reverseString('! ruojnoB');
console.log (phrase);
*/

// Count Characters
/*function countCharacters(str) {
    return str.length;
}
let mots= countCharacters("GoMyCode");
console.log (mots);
*/

// Capitalize Words
/*function UpCase(str){
    let words = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(' ');
}

console.log(UpCase('je vais a gomycode'));
*/

function UpCase(str) {
    const exceptions = ['à', 'de', 'le', 'la', 'les', 'et', 'ou']; // Ajouter d'autres exceptions si nécessaire
    let words = str.split(' ').map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word.toLowerCase(); // Garder les mots d'exception en minuscule
    });
    return words.join(' ');
}

console.log(UpCase('je vais à Gomycode'));