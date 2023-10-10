function getUserData(userId) {
    return new Promise((resolve, reject) => {
        // Assume a network request to get user data
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'JohnDoe'
            });
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        // Assume a network request to get user posts
        setTimeout(() => {
            resolve([
                { postId: 'p1', content: 'Post 1' },
                { postId: 'p2', content: 'Post 2' }
            ]);
            //reject('Failed to fetch user posts');
        }, 1500);
    });
}

function getUserFriends(userId) {
    return new Promise((resolve, reject) => {
        // Assume a network request to get user friends
        setTimeout(() => {
            resolve([
                { friendId: 'f1', name: 'Friend 1' },
                { friendId: 'f2', name: 'Friend 2' }
            ]);
        }, 1200);
    });
}

const userId = 'u1';

Promise.all([getUserData(userId), getUserPosts(userId), getUserFriends(userId)])
    .then(([userData, userPosts, userFriends]) => {
        console.log('User Data: ', userData);
        console.log('User Posts: ', userPosts);
        console.log('User Friends: ', userFriends);

        // Now you can render the data in the UI.
    })
    .catch((error) => {
        console.error('Error fetching data: ', error);

        // Handle the error, maybe show a user-friendly error message in the UI.
    });


/*
Using Promise.all(), we wait for all the network requests to complete. Once they’re all resolved, we log the data to the console. In a real application, you might update the UI with the fetched data. If any of the requests fail (i.e., the Promise rejects), the .catch() block will be executed to handle the error.
*/