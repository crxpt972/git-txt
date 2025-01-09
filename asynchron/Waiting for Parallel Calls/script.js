async function parallelCalls(urls) {
    const fetchData = (url) => {
        return new Promise((resolve) =>
            setTimeout(() => resolve(`Data from ${url}`), 1000) // Simulates fetching data
        );
    };

    console.log('Fetching data from URLs in parallel...');
    const responses = await Promise.all(urls.map((url) => fetchData(url)));
    console.log('All data fetched:', responses);
    return responses;
}

// Example usage:
parallelCalls(['https://api1.com', 'https://api2.com', 'https://api3.com']);
