document.getElementById("sentenceForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the sentence input value
    const sentence = document.getElementById("sentence").value;

    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Loop through the sentence character by character
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        sentenceLength += 1;  // Count every character

        // Count words (space or period indicates a word end)
        if (char === ' ' || char === '.') {
            wordCount += 1;
        }

        // Count vowels (both uppercase and lowercase)
        if ('aeiouAEIOU'.includes(char)) {
            vowelCount += 1;
        }
    }

    // Output the results
    document.getElementById("lengthResult").textContent = `Sentence length (number of characters): ${sentenceLength}`;
    document.getElementById("wordResult").textContent = `Number of words: ${wordCount}`;
    document.getElementById("vowelResult").textContent = `Number of vowels: ${vowelCount}`;
});
