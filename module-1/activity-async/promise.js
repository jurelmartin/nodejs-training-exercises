function fetchData(errorRate) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(Math.random());
      if (Math.random() < errorRate) {
        reject('Error: Failed to fetch data.');
      } else {
        resolve('Fetched data');
      }
    }, 1000);
  });
}

fetchData(0.5).then(console.log).catch(console.error);
