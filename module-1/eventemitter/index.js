const Logger = require('./logger');

const logger = new Logger();

// Error event
logger.on('error', (message) => {
   console.error(`ERROR: ${message}`);
});

// Success event
logger.on('success', (message) => {
   console.log(`SUCCESS: ${message}`);
});

// Log event
logger.on('log', (message) => {
   console.log(`LOG: ${message}`);
});

logger.logIt('log',"This is Message 1")
logger.logIt('success',"This is success!")
logger.logIt('error',"This is error!")