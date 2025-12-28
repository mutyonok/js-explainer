const exampleConfig = [
    {
        id: "example-for-loop-classic",
        steps: [
            { lines: "1", range: { text: "let i = 0" }, variables: { i: "undefined" }, description: "Loop initialization: let i = 0" },
            { lines: "1", range: { text: "i < 5" }, variables: { i: 0 }, description: "Condition check: 0 < 5 is true." },
            { lines: "2", variables: { i: 0 }, description: "Loop body executes. Print 0 to console." },
            { lines: "1", range: { text: "i++" }, variables: { i: 0 }, description: "Increment: i becomes 1." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 1 }, description: "Condition check: 1 < 5 is true." },
            { lines: "2", variables: { i: 1 }, description: "Loop body executes. Print 1 to console." },
            { lines: "1", range: { text: "i++" }, variables: { i: 1 }, description: "Increment: i becomes 2." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 2 }, description: "Condition check: 2 < 5 is true." },
            { lines: "2", variables: { i: 2 }, description: "Loop body executes. Print 2 to console." },
            { lines: "1", range: { text: "i++" }, variables: { i: 2 }, description: "Increment: i becomes 3." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 3 }, description: "Condition check: 3 < 5 is true." },
            { lines: "2", variables: { i: 3 }, description: "Loop body executes. Print 3 to console." },
            { lines: "1", range: { text: "i++" }, variables: { i: 3 }, description: "Increment: i becomes 4." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 4 }, description: "Condition check: 4 < 5 is true." },
            { lines: "2", variables: { i: 4 }, description: "Loop body executes. Print 4 to console." },
            { lines: "1", range: { text: "i++" }, variables: { i: 4 }, description: "Increment: i becomes 5." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 5 }, description: "Condition check: 5 < 5 is FALSE. Loop ends." },
            { lines: "3", description: "Browser steps out of the loop." }
        ]
    },
    {
        id: "example-for-loop-array",
        steps: [
            { lines: "1", description: "Declare variable <code>names</code> and initialize it with an array of 4 strings", variables: { names: '["Alice", "Bob", "Charlie", "David"]' } },

            // i = 0
            { lines: "3", range: { text: "let i = 0" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: "undefined" }, description: "Loop initialization: let i = 0" },
            { lines: "3", range: { text: "i < names.length" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 0 }, description: "Condition check: 0 < 4 is true." },
            { lines: "4", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 0, name: '"Alice"' }, description: "Get array element at index 0 and store it in name variable" },
            { lines: "5", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 0, name: '"Alice"', greetings: '"Hello, Alice"' }, description: "Create greeting string using template literal." },
            { lines: "6", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 0, name: '"Alice"', greetings: '"Hello, Alice"' }, description: "Log 'Hello, Alice' to console." },
            { lines: "3", range: { text: "i++" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 0 }, description: "Increment: i becomes 1." },

            // i = 1
            { lines: "3", range: { text: "i < names.length" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 1 }, description: "Condition check: 1 < 4 is true." },
            { lines: "4", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 1, name: '"Bob"' }, description: "Get array element at index 1 and store it in name variable" },
            { lines: "5", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 1, name: '"Bob"', greetings: '"Hello, Bob"' }, description: "Create greeting string using template literal." },
            { lines: "6", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 1, name: '"Bob"', greetings: '"Hello, Bob"' }, description: "Log 'Hello, Bob' to console." },
            { lines: "3", range: { text: "i++" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 1 }, description: "Increment: i becomes 2." },

            // i = 2
            { lines: "3", range: { text: "i < names.length" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 2 }, description: "Condition check: 2 < 4 is true." },
            { lines: "4", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 2, name: '"Charlie"' }, description: "Get array element at index 2 and store it in name variable" },
            { lines: "5", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 2, name: '"Charlie"', greetings: '"Hello, Charlie"' }, description: "Create greeting string using template literal." },
            { lines: "6", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 2, name: '"Charlie"', greetings: '"Hello, Charlie"' }, description: "Log 'Hello, Charlie' to console." },
            { lines: "3", range: { text: "i++" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 2 }, description: "Increment: i becomes 3." },

            // i = 3
            { lines: "3", range: { text: "i < names.length" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 3 }, description: "Condition check: 3 < 4 is true." },
            { lines: "4", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 3, name: '"David"' }, description: "Get array element at index 3 and store it in name variable" },
            { lines: "5", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 3, name: '"David"', greetings: '"Hello, David"' }, description: "Create greeting string using template literal." },
            { lines: "6", variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 3, name: '"David"', greetings: '"Hello, David"' }, description: "Log 'Hello, David' to console." },
            { lines: "3", range: { text: "i++" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 3 }, description: "Increment: i becomes 4." },

            // end
            { lines: "3", range: { text: "i < names.length" }, variables: { names: '["Alice", "Bob", "Charlie", "David"]', i: 4 }, description: "Condition check: 4 < 4 is FALSE. Loop ends." },
            { lines: "7", description: "Browser steps out of the loop." }
        ]
    },
    {
        id: "example-for-of-loop",
        steps: [
            { lines: "1-5", description: "Initialize <code>results</code> array with three test result objects.", variables: { results: '[{name: "Alice", score: 85}, {name: "Bob", score: 70}, {name: "Charlie", score: 92}]' } },
            { lines: "6", description: "Initialize an empty array <code>passed</code> to store names of students who passed.", variables: { results: '[{name: "Alice", score: 85}, {name: "Bob", score: 70}, {name: "Charlie", score: 92}]', passed: "[]" } },

            // Iteration 1: Alice
            { lines: "8", range: { text: "const result of results" }, description: "Loop begins. <code>result</code> is assigned the first element: Alice's object.", variables: { results: '[...]', passed: "[]", result: '{name: "Alice", score: 85}' } },
            { lines: "9", range: { text: "result.score > 80" }, description: "Check condition: 85 > 80 is true.", variables: { results: '[...]', passed: "[]", result: '{name: "Alice", score: 85}' } },
            { lines: "10", range: { text: "const studentName = result.name" }, description: "Get value of <code>name</code> property from <code>result</code> object and store it in <code>studentName</code> variable.", variables: { results: '[...]', passed: "[]", result: '{name: "Alice", score: 85}', studentName: '"Alice"' } },
            { lines: "11", range: { text: "passed.push(studentName)" }, description: "Push <code>studentName</code> to the <code>passed</code> array.", variables: { results: '[...]', passed: '["Alice"]', result: '{name: "Alice", score: 85}', studentName: '"Alice"' } },

            // Iteration 2: Bob
            { lines: "8", range: { text: "const result of results" }, description: "Next iteration. <code>result</code> is assigned the second element: Bob's object.", variables: { results: '[...]', passed: '["Alice"]', result: '{name: "Bob", score: 70}' } },
            { lines: "9", range: { text: "result.score > 80" }, description: "Check condition: 70 > 80 is false.", variables: { results: '[...]', passed: '["Alice"]', result: '{name: "Bob", score: 70}' } },

            // Iteration 3: Charlie
            { lines: "8", range: { text: "const result of results" }, description: "Next iteration. <code>result</code> is assigned the third element: Charlie's object.", variables: { results: '[...]', passed: '["Alice"]', result: '{name: "Charlie", score: 92}' } },
            { lines: "9", range: { text: "result.score > 80" }, description: "Check condition: 92 > 80 is true.", variables: { results: '[...]', passed: '["Alice"]', result: '{name: "Charlie", score: 92}' } },
            { lines: "10", range: { text: "const studentName = result.name" }, description: "Get value of <code>name</code> property from <code>result</code> object and store it in <code>studentName</code> variable.", variables: { results: '[...]', passed: '["Alice"]', result: '{name: "Charlie", score: 92}', studentName: '"Charlie"' } },
            { lines: "11", range: { text: "passed.push(studentName)" }, description: "Push <code>studentName</code> to the <code>passed</code> array.", variables: { results: '[...]', passed: '["Alice", "Charlie"]', result: '{name: "Charlie", score: 92}', studentName: '"Charlie"' } },

            // End
            { lines: "8", range: { text: "const result of results" }, description: "No more elements in <code>results</code>. The loop finishes.", variables: { results: '[...]', passed: '["Alice", "Charlie"]' } },
            { lines: "14", description: "Execution continues after the loop." }
        ]
    }
];

