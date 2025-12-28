const exampleConfig = [
    {
        id: "example-for-loop-classic",
        steps: [
            { lines: "1", range: { text: "let i = 0" }, variables: { i: "undefined" }, description: "Loop initialization: let i = 0" },
            { lines: "1", range: { text: "i < 5" }, variables: { i: 0 }, description: "Condition check: 0 < 5 is true." },
            { lines: "2", variables: { i: 0 }, description: "Loop body executes." },
            { lines: "1", range: { text: "i++" }, variables: { i: 0 }, description: "Increment: i becomes 1." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 1 }, description: "Condition check: 1 < 5 is true." },
            { lines: "2", variables: { i: 1 }, description: "Loop body executes." },
            { lines: "1", range: { text: "i++" }, variables: { i: 1 }, description: "Increment: i becomes 2." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 2 }, description: "Condition check: 2 < 5 is true." },
            { lines: "2", variables: { i: 2 }, description: "Loop body executes." },
            { lines: "1", range: { text: "i++" }, variables: { i: 2 }, description: "Increment: i becomes 3." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 3 }, description: "Condition check: 3 < 5 is true." },
            { lines: "2", variables: { i: 3 }, description: "Loop body executes." },
            { lines: "1", range: { text: "i++" }, variables: { i: 3 }, description: "Increment: i becomes 4." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 4 }, description: "Condition check: 4 < 5 is true." },
            { lines: "2", variables: { i: 4 }, description: "Loop body executes." },
            { lines: "1", range: { text: "i++" }, variables: { i: 4 }, description: "Increment: i becomes 5." },

            { lines: "1", range: { text: "i < 5" }, variables: { i: 5 }, description: "Condition check: 5 < 5 is FALSE. Loop ends." },
            { lines: "3", description: "Browser steps out of the loop." }
        ]
    },
    {
        id: "example-array-map",
        steps: [
            { lines: "1", variables: {}, description: "1. Define source array." },
            { lines: "2", variables: { strings: '["apple", "banana", "cherry"]' }, description: "2. Call <code>map()</code>. map() creates a NEW array and will fill it with values returned from the callback function." },
            { lines: "2", range: { text: "str" }, variables: { str: '"apple"' }, description: "3. First iteration. <code>str</code> is 'apple'." },
            { lines: "3", variables: { str: '"apple"' }, description: "4. Return length (5). 5 is pushed to the new array." },
            { lines: "2", range: { text: "str" }, variables: { str: '"banana"' }, description: "5. Second iteration. <code>str</code> is 'banana'." },
            { lines: "3", variables: { str: '"banana"' }, description: "6. Return length (6). 6 is pushed to the new array." },
            { lines: "2", range: { text: "str" }, variables: { str: '"cherry"' }, description: "7. Third iteration. <code>str</code> is 'cherry'." },
            { lines: "3", variables: { str: '"cherry"' }, description: "8. Return length (6). 6 is pushed to the new array." },
            { lines: "2", variables: { lengths: '[5, 6, 6]' }, description: "9. Map finishes and returns new array. We save it in variable <code>lengths</code>." }
        ]
    },
    {
        id: "example-array-map-squares",
        steps: [
            { "lines": "1", "variables": {}, "description": "1. Define source array." },
            {
                "lines": "2",
                "variables": { "numbers": "[2, 3, 4]" },
                "description": "2. Call map(). map() creates a NEW array and will fill it with returned values from the callback function."
            },
            {
                "lines": "2",
                "range": { "text": "num" },
                "variables": { "num": "2" },
                "description": "3. First iteration: callback runs with <code>num</code> = 2."
            },
            {
                "lines": "3",
                "range": { "text": "return num * num" },
                "variables": { "num": "2" },
                "description": "4. Return 4 (2 * 2). 4 is pushed to the new array."
            },
            {
                "lines": "2",
                "range": { "text": "num" },
                "variables": { "num": "3" },
                "description": "5. Second iteration: callback runs with <code>num</code> = 3."
            },
            {
                "lines": "3",
                "range": { "text": "return num * num" },
                "variables": { "num": "3" },
                "description": "6. Return 9 (3 * 3). 9 is pushed to the new array."
            },
            {
                "lines": "2",
                "range": { "text": "num" },
                "variables": { "num": "4" },
                "description": "7. Third iteration: callback runs with <code>num</code> = 4."
            },
            {
                "lines": "3",
                "range": { "text": "return num * num" },
                "variables": { "num": "4" },
                "description": "8. Return 16 (4 * 4). 16 is pushed to the new array."
            },
            {
                "lines": "2",
                "variables": { "squares": "[4, 9, 16]" },
                "description": "9. map() finishes and returns the new array. We store it in variable <code>squares</code>."
            }
        ]
    },
    {
        id: "example-reduce",
        steps: [
            { "lines": "1", "variables": { "words": "[\"I\", \"love\", \"JS\"]" }, "description": "1. Declare variable words." },
            {
                "lines": "2",
                "variables": { "words": "[\"I\", \"love\", \"JS\"]" },
                "description": "2. Call <code>reduce()</code> with NO initial value. <code>accumulator</code> will start with the first element of the array (\"I\")."
            },
            {
                "lines": "2",
                "range": { "text": "accumulator, word" },
                "variables": { "accumulator": "\"I\"", "word": "\"love\"" },
                "description": "3. First iteration: <code>accumulator</code> = \"I\", <code>word</code> = \"love\" (the second element)."
            },
            {
                "lines": "3",
                "variables": { "accumulator": "\"I\"", "word": "\"love\"" },
                "description": "4. Return \"I love\". (New accumulator becomes \"I love\")"
            },
            {
                "lines": "2",
                "range": { "text": "accumulator, word" },
                "variables": { "accumulator": "\"I love\"", "word": "\"JS\"" },
                "description": "5. Second iteration: <code>accumulator</code> = \"I love\", <code>word</code> = \"JS\"."
            },
            {
                "lines": "3",
                "variables": { "accumulator": "\"I love\"", "word": "\"JS\"" },
                "description": "6. Return \"I love JS\". (New accumulator becomes \"I love JS\")"
            },
            {
                "lines": "2",
                "variables": { "sentence": "\"I love JS\"" },
                "description": "7. <code>reduce()</code> finishes and returns the final accumulator value. We store it in variable <code>sentence</code>."
            }
        ]
    }
];
