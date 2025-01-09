async function awaitCallWithErrorHandling() {
    const fakeApiCall = () => {
        return new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error('API call failed')), 2000) // Simulates API failure
        );
    };

    try {
        console.log('Fetching data...');
        const response = await fakeApiCall();
        console.log('Data received:', response);
    } catch (error) {
        console.error('Error occurred:', error.message);
    }
}

// Example usage:
awaitCallWithErrorHandling();
