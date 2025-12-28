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
    }
];
