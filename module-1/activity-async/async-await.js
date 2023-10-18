async function fetchData(errorRate) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < errorRate) {
        reject('Error: Failed to fetch data.');
      } else {
        resolve('Fetched data');
      }
    }, 1000);
  });
}

async function callFetchData(errorRate) {
  try {
    const result = await fetchData(errorRate);
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

callFetchData(0.5);
