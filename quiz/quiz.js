const questions = [{
        // Q1
        question: 'Is JavaScript a case-sensitive language?',
        answers: [{
                text: 'true',
                correct: true
            },
            {
                text: 'false',
                correct: false
            },
        ]
    },

    {
        // Q2
        question: 'How can you get the type of arguments passed to a function?',
        answers: [{
                text: 'using typeof operator',
                correct: true
            },
            {
                text: 'using getType function',
                correct: false
            },
            {
                text: 'Both of the above.',
                correct: false
            },
            {
                text: 'None of the above.',
                correct: false
            }
        ]
    },
    {
        // Q3
        question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        answers: [{
                text: 'last()',
                correct: false
            },
            {
                text: 'put()',
                correct: false
            },
            {
                text: 'push()',
                correct: true
            },
            {
                text: 'None of the above.',
                correct: false
            }
        ]
    },
    {
        // Q4
        question: 'Which of the following code creates an object?',
        answers: [{
                text: 'var book = Object();',
                correct: false
            },
            {
                text: 'var book = new Object();',
                correct: true
            },
            {
                text: 'var book = new OBJECT();',
                correct: false
            },
            {
                text: 'var book = new Book();',
                correct: false
            }
        ]
    },
    {
        // Q5
        question: 'Which of the following function of String object combines the text of two strings and returns a new string?',
        answers: [{
                text: ' add()',
                correct: false
            },
            {
                text: 'merge()',
                correct: false
            },
            {
                text: 'concat()',
                correct: true
            },
            {
                text: 'append()',
                correct: false
            }
        ]
    },
    {
        // Q6
        question: 'Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?',
        answers: [{
                text: 'slice()',
                correct: false
            },
            {
                text: 'split()',
                correct: false
            },
            {
                text: 'substr()',
                correct: true
            },
            {
                text: 'search()',
                correct: false
            }
        ]
    },
    {
        // Q7
        question: 'Which of the following function of String object returns the calling string value converted to upper case?',
        answers: [{
                text: 'toLocaleUpperCase()',
                correct: false
            },
            {
                text: 'toUpperCase()',
                correct: true
            },
            {
                text: 'toString()',
                correct: false
            },
            {
                text: 'substring()',
                correct: false
            }
        ]
    },
    {
        // Q8
        question: `Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?`,
        answers: [{
                text: 'fixed()',
                correct: false
            },
            {
                text: 'fontcolor()',
                correct: false
            },
            {
                text: 'fontsize()',
                correct: true
            },
            {
                text: 'bold()',
                correct: false
            }
        ]
    },
    {
        // Q9
        question: 'Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?',
        answers: [{
                text: 'indexOf()',
                correct: false
            },
            {
                text: 'join()',
                correct: false
            },
            {
                text: 'lastIndexOf()',
                correct: true
            },
            {
                text: 'map()',
                correct: false
            }
        ]
    },
    {
        // Q10
        question: 'Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?',
        answers: [{
                text: 'pop()',
                correct: false
            },
            {
                text: 'push()',
                correct: false
            },
            {
                text: 'reduce()',
                correct: false
            },
            {
                text: 'reduceRight()',
                correct: true
            }
        ]
    },
    {
        // Q11
        question: 'Which of the following is an advantage of using JavaScript?',
        answers: [{
                text: 'Less server interaction',
                correct: false
            },
            {
                text: 'Immediate feedback to the visitors',
                correct: false
            },
            {
                text: 'Increased interactivity',
                correct: false
            },
            {
                text: 'All of the above.',
                correct: true
            }
        ]
    },
    {
        // Q12
        question: 'Which of the following is the correct syntax to create a cookie using JavaScript?',
        answers: [{
                text: `document.cookie = 'key1 = value1;key2 = value2;expires = date ';`,
                correct: true
            },
            {
                text: `browser.cookie = 'key1 = value1;key2 = value2;expires = date ';`,
                correct: false
            },
            {
                text: `window.cookie = 'key1 = value1;key2 = value2;expires = date ';`,
                correct: false
            },
            {
                text: `navigator.cookie = 'key1 = value1;key2 = value2;expires = date ';`,
                correct: false
            }
        ]
    },
    {
        // Q13
        question: 'Which built-in method returns the length of the string?',
        answers: [{
                text: 'length()',
                correct: true
            },
            {
                text: 'size()',
                correct: false
            },
            {
                text: 'index()',
                correct: false
            },
            {
                text: 'None of the above.',
                correct: false
            }
        ]
    },
    {
        // Q14
        question: 'Which of the following function of Number object forces a number to display in exponential notation?',
        answers: [{
                text: 'toExponential()',
                correct: true
            },
            {
                text: 'toFixed()',
                correct: false
            },
            {
                text: 'toPrecision()',
                correct: false
            },
            {
                text: 'toLocaleString()',
                correct: false
            }
        ]
    },
    {
        // Q15
        question: 'Which of the following function of Number object returns a string value version of the current number?',
        answers: [{
                text: 'toString()',
                correct: true
            },
            {
                text: 'toFixed()',
                correct: false
            },
            {
                text: 'toLocaleString()',
                correct: false
            },
            {
                text: 'toPrecision()',
                correct: false
            }
        ]
    },
    {
        // Q16
        question: 'Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?',
        answers: [{
                text: 'concat()',
                correct: false
            },
            {
                text: 'match()',
                correct: false
            },
            {
                text: 'replace()',
                correct: false
            },
            {
                text: 'search()',
                correct: true
            }
        ]
    },
    {
        // Q17
        question: 'Which of the following function of String object creates an HTML anchor that is used as a hypertext target?',
        answers: [{
                text: 'anchor()',
                correct: true
            },
            {
                text: 'link()',
                correct: false
            },
            {
                text: 'blink()',
                correct: false
            },
            {
                text: 'big()',
                correct: false
            }
        ]
    },
    {
        // Q18
        question: 'Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?',
        answers: [{
                text: 'link()',
                correct: false
            },
            {
                text: 'small()',
                correct: true
            },
            {
                text: 'sup()',
                correct: false
            },
            {
                text: 'sub()',
                correct: false
            }
        ]
    },
    {
        // Q19
        question: 'Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?',
        answers: [{
                text: 'pop()',
                correct: false
            },
            {
                text: 'push()',
                correct: false
            },
            {
                text: 'reduce()',
                correct: true
            },
            {
                text: 'reduceRight()',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following function of Array object removes the first element from an array and returns that element?',
        answers: [{
                text: 'reverse()',
                correct: false
            },
            {
                text: 'shift()',
                correct: true
            },
            {
                text: 'slice()',
                correct: false
            },
            {
                text: 'some()',
                correct: false
            }
        ]
    }
];