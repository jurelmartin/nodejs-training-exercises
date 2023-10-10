//1. Callbacks: Fetching User Data
const getUserData = (userId, callback) => {
    setTimeout(() => {
        callback(null, {
            userId: userId,
            username: 'JohnDoe'
        });
    }, 1000);
};

//2. Promises: Fetching User Posts
const getUserPosts = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { postId: 'p1', content: 'Post 1' },
                { postId: 'p2', content: 'Post 2' }
            ]);
        }, 1500);
    });
};

//3. Async/Await: Fetching User Friends
const getUserFriends = async (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { friendId: 'f1', name: 'Friend 1' },
                { friendId: 'f2', name: 'Friend 2' }
            ]);
        }, 1200);
    });
};

//Utilizing All Three Approaches Together

const userId = 'u1';

// Using Callback
getUserData(userId, (error, userData) => {
    if (error) {
        console.error('Error fetching user data: ', error);
    } else {
        console.log('User Data: ', userData);

        // Using Promise
        getUserPosts(userId)
            .then((userPosts) => {
                console.log('User Posts: ', userPosts);

                // Using Async/Await
                (async () => {
                    try {
                        const userFriends = await getUserFriends(userId);
                        console.log('User Friends: ', userFriends);
                    } catch (error) {
                        console.error('Error fetching user friends: ', error);
                    }
                })();
            })
            .catch((error) => {
                console.error('Error fetching user posts: ', error);
            });
    }
});


