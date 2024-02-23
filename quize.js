const readline = require('readline');

// Define an array of quiz questions with objects
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. Paris", "B. Rome", "C. Berlin", "D. London"],
        correctAnswer: "A"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
        correctAnswer: "B"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["A. H2O", "B. CO2", "C. O2", "D. NaCl"],
        correctAnswer: "A"
    }
];

// Function to display a random quiz question
function displayRandomQuizQuestion() {
    // Select a random question from the quizQuestions array
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const randomQuestion = quizQuestions[randomIndex];

    // Display the question
    console.log(randomQuestion.question);

    // Display the multiple-choice options
    randomQuestion.options.forEach(option => console.log(option));
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your answer (A, B, C, or D): ", (userAnswer) => {
        // Check user's answer
        if (userAnswer && userAnswer.toUpperCase() === randomQuestion.correctAnswer) {
            console.log("Correct!");
            rl.close();
        } else {
            console.log("Incorrect!");
            rl.close();
        }
    });
}

// Function to start the quiz
function startQuiz() {
    let totalQuestions = quizQuestions.length;

    // Loop through each question and display
    for (let i = 0; i < totalQuestions; i++) {
        displayRandomQuizQuestion();
    }
}

// Call the function to start the quiz
startQuiz();