async function concurrentRequests() {
    const apiCall1 = () => {
        return new Promise((resolve) =>
            setTimeout(() => resolve('Result from API 1'), 1000) // Simulates 1-second API call
        );
    };

    const apiCall2 = () => {
        return new Promise((resolve) =>
            setTimeout(() => resolve('Result from API 2'), 1500) // Simulates 1.5-second API call
        );
    };

    console.log('Making concurrent API calls...');
    const [result1, result2] = await Promise.all([apiCall1(), apiCall2()]);
    console.log('Results:', result1, result2);
}

// Example usage:
concurrentRequests();
