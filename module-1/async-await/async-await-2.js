async function displayUser(userId) {
    try {
        const user = await getUser(userId);
        console.log('User fetched:', user);
    } catch (err) {
        console.error('Error fetching user:', err);
    }
}

async function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                {id: 1, name: 'Alice'},
                {id: 2, name: 'Bob'}
            ];
            const user = users.find(u => u.id === userId);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

displayUser(4);
