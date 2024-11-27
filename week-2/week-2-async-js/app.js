// wait1 function - resolves after t1 seconds
function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

// wait2 function - resolves after t2 seconds
function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

// wait3 function - resolves after t3 seconds
function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

// calculateTime function - waits for all three promises to resolve and calculates total time taken
function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

     return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((results) => {
        const endTime = Date.now();
        return endTime - startTime; // Return the time taken in milliseconds
    });
}



// Test cases to demonstrate the functionality of calculateTime
const testCases = [
    { t1: 1, t2: 2, t3: 3 },
    // { t1: 0.5, t2: 1, t3: 2 },
    // { t1: 0, t2: 0, t3: 0 },
    // { t1: 5, t2: 10, t3: 1 },
    // { t1: 3, t2: 2, t3: 4 },
    // { t1: 1.5, t2: 0.5, t3: 2.5 }
];

// Run all test cases
testCases.forEach(({ t1, t2, t3 }) => {
    const val=calculateTime(t1, t2, t3)
    
        
});
