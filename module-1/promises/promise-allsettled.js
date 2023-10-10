// Simulating API calls
function checkInventory(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Checking inventory for order ${orderId}`);
            Math.random() > 0.2 ? resolve(`Inventory checked for ${orderId}`) : reject(`Inventory check failed for ${orderId}`);
        }, 1000);
    });
}

function processPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing payment for order ${orderId}`);
            Math.random() > 0.2 ? resolve(`Payment processed for ${orderId}`) : reject(`Payment failed for ${orderId}`);
        }, 2000);
    });
}

function sendConfirmationEmail(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Sending confirmation email for order ${orderId}`);
            Math.random() > 0.2 ? resolve(`Email sent for ${orderId}`) : reject(`Email send failed for ${orderId}`);
        }, 1500);
    });
}

// Processing an order
function processOrder(orderId) {
    return Promise.allSettled([
        checkInventory(orderId),
        processPayment(orderId),
        sendConfirmationEmail(orderId)
    ]);
}

// Example usage
const orderId = 12345;
processOrder(orderId).then((results) => {
    console.log(`\nProcessing results for order ${orderId}:`);
    results.forEach((result, index) => {
        const operationName = ['Inventory check', 'Payment processing', 'Sending confirmation email'][index];
        console.log(`${operationName}: ${result.status}`);
        if(result.status === 'rejected') {
            console.error(`   Reason: ${result.reason}`);
        }
    });
});
