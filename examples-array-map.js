const exampleConfig = [
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
