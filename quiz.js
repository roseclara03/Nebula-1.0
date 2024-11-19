const quizData = [
    {
        question: "What is the process where water turns into vapor?",
        options: ["Evaporation", "Condensation", "Precipitation", "Transpiration"],
        answer: "Evaporation"
    },
    {
        question: "Where did Earth's water likely come from?",
        options: ["Comets and Asteroids", "The Sun", "Other Planets", "Underground Rivers"],
        answer: "Comets and Asteroids"
    },
    {
        question: "Which stage of the water cycle brings water back to the Earth's surface?",
        options: ["Precipitation", "Evaporation", "Condensation", "Transpiration"],
        answer: "Precipitation"
    },
    {
        question: "What is the process of water turning into a cloud?",
        options: ["Evaporation", "Precipitation", "Condensation", "Infiltration"],
        answer: "Condensation"
    },
    {
        question: "Which of these is a major source of fresh water?",
        options: ["Rivers", "Oceans", "Lakes", "Clouds"],
        answer: "Rivers"
    },
    {
        question: "What is water conservation?",
        options: ["Using less water", "Watering plants every day", "Flooding the fields", "Recycling water"],
        answer: "Using less water"
    },
    {
        question: "What is the largest use of water in agriculture?",
        options: ["Crops irrigation", "Watering animals", "Rainwater harvesting", "Farming machines"],
        answer: "Crops irrigation"
    },
    {
        question: "What can you do to conserve water while brushing your teeth?",
        options: ["Turn off the tap", "Use less toothpaste", "Brush faster", "Fill a bucket with water"],
        answer: "Turn off the tap"
    },
    {
        question: "What is the process called when plants release water vapor?",
        options: ["Evaporation", "Condensation", "Transpiration", "Precipitation"],
        answer: "Transpiration"
    },
    {
        question: "How much water on Earth is freshwater?",
        options: ["2.5%", "50%", "10%", "75%"],
        answer: "2.5%"
    },
    {
        question: "How does water benefit plants?",
        options: ["Helps photosynthesis", "Makes plants grow taller", "Reduces plant diseases", "Supports animal life"],
        answer: "Helps photosynthesis"
    },
    {
        question: "Which of these is an example of surface water?",
        options: ["Lake", "Aquifer", "Groundwater", "Well water"],
        answer: "Lake"
    },
    {
        question: "What happens when the water cycle is disrupted?",
        options: ["Climate change", "Rising sea levels", "Water shortages", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the main cause of water scarcity?",
        options: ["Pollution", "Climate change", "Overuse", "All of the above"],
        answer: "All of the above"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById("question-text").innerText = question.question;
    const options = document.getElementById("options");
    options.innerHTML = '';
    question.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option);
        options.appendChild(optionElement);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
        retryQuiz()
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("score").innerText = score;
}

function retryQuiz() {
    score = 0;
    currentQuestion = 0;
    loadQuestion();
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("question-container").style.display = "block";
}

loadQuestion();
