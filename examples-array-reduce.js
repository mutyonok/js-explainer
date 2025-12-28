const exampleConfig = [
    {
        id: "example-reduce",
        steps: [
            { "lines": "1", "variables": { "words": "[\"I\", \"love\", \"JS\"]" }, "description": "1. Declare variable words." },
            {
                "lines": "2-5",
                "variables": { "words": "[\"I\", \"love\", \"JS\"]" },
                "description": "2. Call <code>reduce()</code> with NO initial value. <code>accumulator</code> will start with the first element of the array (\"I\")."
            },
            {
                "lines": "3",
                "range": { "text": "accumulator, word" },
                "variables": { "accumulator": "\"I\"", "word": "\"love\"" },
                "description": "3. First iteration: <code>accumulator</code> = \"I\", <code>word</code> = \"love\" (the second element)."
            },
            {
                "lines": "4",
                "variables": { "accumulator": "\"I\"", "word": "\"love\"" },
                "description": "4. Return \"I love\". (New accumulator becomes \"I love\")"
            },
            {
                "lines": "3",
                "range": { "text": "accumulator, word" },
                "variables": { "accumulator": "\"I love\"", "word": "\"JS\"" },
                "description": "5. Second iteration: <code>accumulator</code> = \"I love\", <code>word</code> = \"JS\"."
            },
            {
                "lines": "4",
                "variables": { "accumulator": "\"I love\"", "word": "\"JS\"" },
                "description": "6. Return \"I love JS\". (New accumulator becomes \"I love JS\")"
            },
            {
                "lines": "2",
                "variables": { "sentence": "\"I love JS\"" },
                "description": "7. <code>reduce()</code> finishes and returns the final accumulator value. We store it in variable <code>sentence</code>."
            }
        ]
    },
    {
        id: "example-reduce-even-count",
        steps: [
            { lines: "1", variables: { numbers: "[2, 5, 10, 7, 2]" }, description: "1. Define source array <code>numbers</code>." },
            { lines: "2-11", variables: { numbers: "[2, 5, 10, 7, 2]", count: 0 }, description: "2. Call <code>reduce()</code> with initial value <code>0</code>. <code>count</code> starts at 0." },

            // Iteration 1: num = 2
            { lines: "3", range: { text: "count, num" }, variables: { count: 0, num: 2 }, description: "3. First iteration: <code>count</code> (accumulator) is 0, <code>num</code> is 2." },
            { lines: "4", range: { text: "num % 2 === 0" }, variables: { count: 0, num: 2 }, description: "4. Check condition: <code>2 % 2 === 0</code> is <b>true</b>." },
            { lines: "5", range: { text: "return count + 1" }, variables: { count: 0, num: 2 }, description: "5. Return <code>count + 1</code>. We have an even number so we want accumulator to count it. New accumulator value is 1 (0 + 1)." },

            // Iteration 2: num = 5
            { lines: "3", range: { text: "count, num" }, variables: { count: 1, num: 5 }, description: "6. Second iteration: <code>count</code> is now 1, <code>num</code> is 5." },
            { lines: "4", range: { text: "num % 2 === 0" }, variables: { count: 1, num: 5 }, description: "7. Check condition: <code>5 % 2 === 0</code> is <b>false</b>." },
            { lines: "7", range: { text: "return count" }, variables: { count: 1, num: 5 }, description: "8. Return current <code>count</code> (1). We do not have an even number so we return the current accumulator value." },

            // Iteration 3: num = 10
            { lines: "3", range: { text: "count, num" }, variables: { count: 1, num: 10 }, description: "9. Third iteration: <code>count</code> is 1, <code>num</code> is 10." },
            { lines: "4", range: { text: "num % 2 === 0" }, variables: { count: 1, num: 10 }, description: "10. Check condition: <code>10 % 2 === 0</code> is <b>true</b>." },
            { lines: "5", range: { text: "return count + 1" }, variables: { count: 1, num: 10 }, description: "11. Return <code>count + 1</code> (2). We have an even number so we want accumulator to count it. New accumulator value is 2 (1 + 1)." },

            // Iteration 4: num = 7
            { lines: "3", range: { text: "count, num" }, variables: { count: 2, num: 7 }, description: "12. Fourth iteration: <code>count</code> is 2, <code>num</code> is 7." },
            { lines: "4", range: { text: "num % 2 === 0" }, variables: { count: 2, num: 7 }, description: "13. Check condition: <code>7 % 2 === 0</code> is <b>false</b>." },
            { lines: "7", range: { text: "return count" }, variables: { count: 2, num: 7 }, description: "14. Return current <code>count</code> (2). We do not have an even number so we return the current accumulator value." },

            // Iteration 5: num = 2
            { lines: "3", range: { text: "count, num" }, variables: { count: 2, num: 2 }, description: "15. Fifth iteration: <code>count</code> is 2, <code>num</code> is 2." },
            { lines: "4", range: { text: "num % 2 === 0" }, variables: { count: 2, num: 2 }, description: "16. Check condition: <code>2 % 2 === 0</code> is <b>true</b>." },
            { lines: "5", range: { text: "return count + 1" }, variables: { count: 2, num: 2 }, description: "17. Return <code>count + 1</code> (3). We have an even number so we want accumulator to count it. New accumulator value is 3 (2 + 1)." },

            { lines: "2", variables: { evenCount: 3 }, description: "18. <code>reduce()</code> finishes. Final accumulator value is 3 and we store it in variable <code>evenCount</code>." }
        ]
    }
];
