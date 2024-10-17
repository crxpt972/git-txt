// Fonction Insertion Sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Comparer et déplacer les éléments plus grands que l'élément actuel
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Fonction pour gérer le tri lors du clic sur le bouton
document.getElementById('sort-button').addEventListener('click', function() {
    let input = document.getElementById('array-input').value;
    
    // Convertir l'entrée de l'utilisateur en tableau de nombres
    let array = input.split(',').map(Number);
    
    // Vérifier que l'entrée est valide
    if (array.some(isNaN)) {
        document.getElementById('sorted-output').innerHTML = "Veuillez entrer un tableau valide de nombres.";
    } else {
        // Effectuer le tri
        let sortedArray = insertionSort(array);
        document.getElementById('sorted-output').innerHTML = sortedArray.join(', ');
    }
});
