async function awaitCall() {
    const fakeApiCall = () => {
        return new Promise((resolve) =>
            setTimeout(() => resolve({ data: 'API Response Data' }), 2000) // Simulates 2-second API call
        );
    };

    console.log('Fetching data...');
    const response = await fakeApiCall();
    console.log('Data received:', response);
    return response;
}

// Example usage:
awaitCall();
