//This example showcases a real-world e-commerce scenario where multiple independent asynchronous operations are handled efficiently in parallel using Promise.allSettled(). This ensures that all operations are completed and appropriately logged, providing a robust mechanism for handling both successful and failed operations during order processing. This strategy ensures that the system can take appropriate action based on the results of all operations, such as notifying customer service of a failed email send or triggering additional workflows in the case of payment failure, without halting the entire order process if one operation fails.

//Simulating API Calls: checkInventory, processPayment, and sendConfirmationEmail functions simulate API calls for respective operations, each returning a promise that either resolves (80% chance) or rejects (20% chance).

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

// Order Processing: processOrder function uses Promise.allSettled to handle all the operations in parallel. It waits for all operations to be completed (regardless of success or failure) before proceeding.

// Processing an order
function processOrder(orderId) {
    return Promise.allSettled([
        checkInventory(orderId),
        processPayment(orderId),
        sendConfirmationEmail(orderId)
    ]);
}

// Handling Results: Once all promises have settled, it logs the status of each operation, providing detailed error messages for any operation that failed.

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
