async function fetchUserDataAndPosts(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await userResponse.json();
        
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const postsData = await postsResponse.json();

        console.log('User:', userData);
        console.log('Posts:', postsData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchUserDataAndPosts(1);
