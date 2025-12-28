const exampleConfig = [
    {
        id: "example-for-loop",
        steps: [
            { lines: "1", range: { text: "let i = 0" }, variables: { i: "undefined" }, description: "Loop initialization: let i = 0" },
            { lines: "1", range: { text: "i < 10" }, variables: { i: 0 }, description: "Condition check: 0 < 10 is true." },
            { lines: "2", variables: { i: 0 }, description: "Loop body executes." },
            { lines: "1", range: { text: "i++" }, variables: { i: 0 }, description: "Increment: i becomes 1." },
            { lines: "1", range: { text: "i < 10" }, variables: { i: 1 }, description: "Condition check: 1 < 10 is true." },
            { lines: "2", variables: { i: 1 }, description: "Loop body executes." },
            // ... truncated for brevity in demo, user can extend
            { lines: "1", range: { text: "i++" }, variables: { i: 1 }, description: "Increment: i becomes 2." }
        ]
    },
    {
        id: "example-array-map",
        steps: [
            { lines: "1", variables: {}, description: "1. Define source array." },
            { lines: "2", variables: { strings: '["apple", "banana", "cherry"]' }, description: "2. Call map(). Map creates a NEW array." },
            { lines: "2", range: { text: "str" }, variables: { str: '"apple"' }, description: "3. First iteration. str is 'apple'." },
            { lines: "3", variables: { str: '"apple"' }, description: "4. Return length (5)." },
            { lines: "2", range: { text: "str" }, variables: { str: '"banana"' }, description: "5. Second iteration. str is 'banana'." },
            { lines: "3", variables: { str: '"banana"' }, description: "6. Return length (6)." },
            { lines: "2", range: { text: "str" }, variables: { str: '"cherry"' }, description: "7. Third iteration. str is 'cherry'." },
            { lines: "3", variables: { str: '"cherry"' }, description: "8. Return length (6)." },
            { lines: "2", variables: { lengths: '[5, 6, 6]' }, description: "9. Map finishes. Returns new array." }
        ]
    },
    {
        id: "example-array-map-squares",
        steps: [
            { "lines": "1", "variables": {}, "description": "1. Define source array." },
            {
                "lines": "2",
                "variables": { "numbers": "[2, 3, 4]" },
                "description": "2. Call map(). map() creates a NEW array and will fill it with returned values."
            },
            {
                "lines": "2",
                "range": { "text": "num" },
                "variables": { "num": "2" },
                "description": "3. First iteration: callback runs with num = 2."
            },
            {
                "lines": "3",
                "range": { "text": "return num * num" },
                "variables": { "num": "2" },
                "description": "4. Return 4 (2 * 2)."
            },
            {
                "lines": "2",
                "range": { "text": "num" },
                "variables": { "num": "3" },
                "description": "5. Second iteration: callback runs with num = 3."
            },
            {
                "lines": "3",
                "range": { "text": "return num * num" },
                "variables": { "num": "3" },
                "description": "6. Return 9 (3 * 3)."
            },
            {
                "lines": "2",
                "range": { "text": "num" },
                "variables": { "num": "4" },
                "description": "7. Third iteration: callback runs with num = 4."
            },
            {
                "lines": "3",
                "range": { "text": "return num * num" },
                "variables": { "num": "4" },
                "description": "8. Return 16 (4 * 4)."
            },
            {
                "lines": "2",
                "variables": { "squares": "[4, 9, 16]" },
                "description": "9. map() finishes and returns the new array."
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
                "description": "2. Call reduce() with initial value \"\" (empty string). This will be the value of accumulator."
            },
            {
                "lines": "2",
                "range": { "text": "accumulator, word" },
                "variables": { "accumulator": "\"\"", "word": "\"I\"" },
                "description": "3. First iteration: accumulator = \"\" (initial value), word = \"I\"."
            },
            {
                "lines": "3",
                "variables": { "accumulator": "\"\"", "word": "\"I\"" },
                "description": "4. Return \"I \". (New accumulator becomes \"I \")"
            },
            {
                "lines": "2",
                "range": { "text": "accumulator, word" },
                "variables": { "accumulator": "\"I \"", "word": "\"love\"" },
                "description": "5. Second iteration: accumulator = \"I \", word = \"love\"."
            },
            {
                "lines": "3",
                "variables": { "accumulator": "\"I \"", "word": "\"love\"" },
                "description": "6. Return \"I love \". (New accumulator becomes \"I love \")"
            },
            {
                "lines": "2",
                "range": { "text": "accumulator" },
                "variables": { "accumulator": "\"I love \"", "word": "\"JS\"" },
                "description": "7. Third iteration: accumulator = \"I love \", word = \"JS\"."
            },
            {
                "lines": "3",
                "variables": { "accumulator": "\"I love \"", "word": "\"JS\"" },
                "description": "8. Return \"I love JS \". (New accumulator becomes \"I love JS \")"
            },
            {
                "lines": "2",
                "variables": { "sentence": "\"I love JS \"" },
                "description": "9. reduce() finishes and returns the final accumulator value."
            }
        ]
    }
];
