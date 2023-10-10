### Instructions 

🎉 Welcome to the Asynchronous JavaScript Adventure! 🎉

In this hands-on session, you'll dive deep into the realms of Callbacks, Promises, and Async/Await in JavaScript. 

---

### ✨ Activity 1: Callbacks in Action

#### Objective:
Create a function called `fetchData` that simulates an API call using `setTimeout`. This function should take in a callback and an error rate (0-1). If a random number is less than the error rate, the callback should return an error. Otherwise, it should return data ("Fetched Data").

#### Task:
- Your function should use `setTimeout` to simulate an API call.
- Use a callback to handle the simulated API response.
- Implement error handling using the provided error rate.

#### Tips:
- The error rate is a number between 0.0 and 1.0; use it to randomly generate errors.
- Ensure your function handles both successful and erroneous outcomes.

#### Solution:
Refer to the provided solution if you get stuck or after you finish for comparison.

---

### ✨ Activity 2: Promising Promises

#### Objective:
Refactor your API call function from Activity 1 to return a Promise. 

#### Task:
- Your function should still use `setTimeout` to simulate an API call.
- Instead of using a callback, return a Promise that either resolves with data or rejects with an error based on the error rate.

#### Tips:
- Use `.then()` and `.catch()` to handle the resolved data or errors respectively.
- Test your function thoroughly to ensure it behaves as expected in both scenarios.


---

### ✨ Activity 3: Await the Async

#### Objective:
Create an `async` function that tries to fetch data using the Promise-based function from Activity 2, attempting up to three times if necessary.

#### Task:
- Your `async` function should call the function created in Activity 2.
- If the data fetching fails, it should retry up to three times before finally throwing an error.
- If any attempt is successful, return the fetched data immediately.

#### Tips:
- Use a loop to attempt fetching data multiple times.
- Utilize `try/catch` within your `async` function to handle potential errors during each fetch attempt.


---

