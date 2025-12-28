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
        id: "example-array-map",
        steps: [
            { lines: "1", variables: {}, description: "1. Define source array." },
            { lines: "2", variables: { strings: '["apple", "banana", "cherry"]' }, description: "2. Call <code>map()</code>. <code>map</code> creates a NEW array and will fill it with values returned from the callback function." },
            { lines: "2", range: { text: "str" }, variables: { str: '"apple"' }, description: "3. First iteration. <code>str</code> is 'apple'." },
            { lines: "3", variables: { str: '"apple"' }, description: "4. Return length (5). 5 is pushed to the new array." },
            { lines: "2", range: { text: "str" }, variables: { str: '"banana"' }, description: "5. Second iteration. <code>str</code> is 'banana'." },
            { lines: "3", variables: { str: '"banana"' }, description: "6. Return length (6). 6 is pushed to the new array." },
            { lines: "2", range: { text: "str" }, variables: { str: '"cherry"' }, description: "7. Third iteration. <code>str</code> is 'cherry'." },
            { lines: "3", variables: { str: '"cherry"' }, description: "8. Return length (6). 6 is pushed to the new array." },
            { lines: "2", variables: { lengths: '[5, 6, 6]' }, description: "9. <code>map</code> finishes and returns new array. We save it in variable <code>lengths</code>." }
        ]
    },
    {
        id: "example-array-map-squares",
        steps: [
            { "lines": "1", "variables": {}, "description": "1. Define source array." },
            {
                "lines": "2",
                "variables": { "numbers": "[2, 3, 4]" },
                "description": "2. Call <code>map()</code>. <code>map</code> creates a NEW array and will fill it with returned values from the callback function."
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
        id: "example-array-map-students",
        steps: [
            { lines: "1-4", variables: {}, description: "1. Define source array of student objects." },
            {
                lines: "5",
                variables: { students: '[{"name":"Alice","age":20},{"name":"Bob","age":22}]' },
                description: "2. Call <code>map()</code> with an arrow function. We use <b>implicit return</b> here."
            },
            {
                lines: "5",
                range: { text: "student" },
                variables: { student: '{"name":"Alice","age":20}' },
                description: "3. First iteration. <code>student</code> is the first object. Note that <b>implicit return</b> means we don't use <code>return</code> keyword and curly braces. The expression after <code>=></code> is automatically returned."
            },
            {
                lines: "5",
                range: { text: "student" },
                variables: { student: '{"name":"Bob","age":22}' },
                description: "4. Second iteration. <code>student</code> is the second object. Implicit return is used when the function body is a single expression."
            },
            {
                lines: "5",
                variables: { greetings: '["hello, Alice!", "hello, Bob!"]' },
                description: "5. <code>map</code> finishes. <b>Implicit return</b> is cleaner but only works for single-line expressions. If you need multiple statements, you must use curly braces and an explicit <code>return</code>."
            }
        ]
    },
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
    },
    {
        id: "example-array-map-songs",
        steps: [
            { lines: "1", variables: {}, description: "1. Define source array of song strings." },
            {
                lines: "2",
                variables: { songs: '["Daft Punk - One More Time", "Justice - Genesis"]' },
                description: "2. Call <code>map()</code>. We will iterate through each song string."
            },
            {
                lines: "2",
                range: { text: "song" },
                variables: { song: '"Daft Punk - One More Time"' },
                description: "3. First iteration. <code>song</code> is the first string."
            },
            {
                lines: "3",
                variables: { song: '"Daft Punk - One More Time"', artistAndTitle: '["Daft Punk", "One More Time"]' },
                description: "4. Split the string by ' - '. <code>artistAndTitle</code> is now an array with two elements: 'Daft Punk' and 'One More Time'."
            },
            {
                lines: "4",
                variables: { song: '"Daft Punk - One More Time"', artistAndTitle: '["Daft Punk", "One More Time"]' },
                description: "5. Return the second element (index 1), which is the title. 'One More Time' is pushed to the new array."
            },
            {
                lines: "2",
                range: { text: "song" },
                variables: { song: '"Justice - Genesis"' },
                description: "6. Second iteration. <code>song</code> is the second string."
            },
            {
                lines: "3",
                variables: { song: '"Justice - Genesis"', artistAndTitle: '["Justice", "Genesis"]' },
                description: "7. Split the string by ' - '. <code>artistAndTitle</code> is now ['Justice', 'Genesis']."
            },
            {
                lines: "4",
                variables: { song: '"Justice - Genesis"', artistAndTitle: '["Justice", "Genesis"]' },
                description: "8. Return the title 'Genesis'. It is pushed to the new array."
            },
            {
                lines: "2",
                variables: { titles: '["One More Time", "Genesis"]' },
                description: "9. <code>map</code> finishes and returns the new array of titles."
            }
        ]
    }
];
