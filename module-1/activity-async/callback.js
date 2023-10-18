const fetchData = (callback, errorRate) => {
  setTimeout(() => {
    console.log(Math.random());
    if (Math.random() < errorRate) {
      callback('Error: Failed to fetch data.');
    } else {
      callback(null, 'Fetched data');
    }
  }, 1000);
};

fetchData((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
}, 0.5);
