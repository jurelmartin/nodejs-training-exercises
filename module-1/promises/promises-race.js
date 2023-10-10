//In this example, fetchWithTimeout(url, 2000) tries to fetch data from url and will resolve with the fetched data if it's successful within the 2000ms timeout. 
//If the fetch takes longer than 2000ms, timeoutPromise rejects, causing Promise.race() to reject and triggering the .catch block, logging an error message to the console. 
//This pattern ensures that your application remains responsive and can handle situations where requests take longer than expected, providing a better user experience.

function fetchWithTimeout(url, timeout) {
    // Promise that may resolve or reject, simulating fetch success and failure
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching data from ${url}`);
            // Simulating a 50-50 chance of failure
            Math.random() > 0.5 ? 
                resolve({ title: 'Successful Fetch', body: 'This fetch succeeded.' }) : 
                reject(new Error('Fetch Failed'));
        }, 1000);
    });


    // Promise that rejects after a timeout
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request Timed Out')), timeout);
    });

    // Race the two promises
    return Promise.race([fetchData, timeoutPromise]);
}

// Example Usage
const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetchWithTimeout(url, 2000)
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error.message));
