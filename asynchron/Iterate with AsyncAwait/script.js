async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4]); // Logs 1, 2, 3, 4 with a 1-second delay
