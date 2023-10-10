function sendEmail(to, subject, body) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Email sent to ${to}`);
            resolve(`Subject: ${subject}\nBody: ${body}`);
        }, 1500);
    });
}

sendEmail(' [email protected]', 'Hello!', 'How are you?')
    .then(console.log)
    .catch(console.error);
