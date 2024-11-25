function calculateTime(n) {
    const startTime = new Date(); // Record the start time

    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const endTime = new Date(); // Record the end time
    const timeTaken = (endTime - startTime) / 1000; // Time difference in seconds

    console.log(`Time taken to calculate sum from 1 to ${n}: ${timeTaken} seconds`);
    return timeTaken;
}

// Testing the function
calculateTime(100);        // Sum from 1 to 100
calculateTime(100000);     // Sum from 1 to 100,000
calculateTime(1000000000); // Sum from 1 to 1,000,000,000
