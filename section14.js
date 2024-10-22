let currentStep14 = 1; // To keep track of the question step

function startSection14Questions() {
    currentStep14 = 1;
    askNextQuestion14(); // Start the process by asking the first question
}

function askNextQuestion14() {
    switch (currentStep14) {
        case 1:
            showQuestion("Is the individual a candidate for election?");
            break;
        case 2:
            showQuestion("Is the individual running for a position in the barangay?");
            break;
        case 3:
            showQuestion("Has the candidate spent any money or resources for the election campaign?");
            break;
        case 4:
            showQuestion("Has the elected official entered public office without submitting SOCE after 30 days of the election?");
            break;
        case 5:
            showQuestion("Has the candidate submitted a nil SOCE after 30 days of the election?");
            break;
        case 6:
            showQuestion("Has the elected official submitted SOCE after 30 days of the election?");
            break;
        case 7:
            showQuestion("Has the candidate previously violated the regulations regarding SOCE submission?");
            break;
        default:
            goBack(); // Return to the main menu or handle end of questions
            break;
    }
}

function handleAnswer(answer) {
    // Process the answer for each step
    switch (currentStep14) {
        case 1:
            if (answer === 'yes') {
                currentStep14 = 2;
                askNextQuestion14();
            } else {
                displayNoPenalty();
            }
            break;
        case 2:
            if (answer === 'yes') {
                currentStep14 = 3;
                askNextQuestion14();
            } else {
                displayNoPenalty();
            }
            break;
        case 3:
            if (answer === 'yes') {
                currentStep14 = 4;
                askNextQuestion14();
            } else {
                currentStep14 = 5;
                askNextQuestion14();
            }
            break;
        case 4:
            if (answer === 'yes') {
                displayPenalty("An administrative offense. Fine: ₱1,000 to ₱30,000.");
            } else {
                currentStep14 = 6;
                askNextQuestion14();
            }
            break;
        case 5:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                currentStep14 = 7;
                askNextQuestion14();
            }
            break;
        case 6:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty("An administrative offense. Fine: ₱1,000 to ₱30,000.");
            }
            break;
        case 7:
            if (answer === 'yes') {
                displayPenalty("The fine shall be from ₱2,000 to ₱60,000.");
            } else {
                displayPenalty("An administrative offense. Fine: ₱1,000 to ₱30,000.");
            }
            break;
        default:
            goBack();
            return;
    }
}

function displayPenalty(penaltyText) {
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = `Penalty: ${penaltyText}`; // Display the penalty in the questionContainer
    showResultButtons(); // Show the new buttons
}

function displayNoPenalty() {
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = "No Violation."; // Display "No penalty" in the questionContainer
    showResultButtons(); // Show the new buttons
}

function resetQuiz() {
    currentStep = 1; // Reset to the first question
    
    // Hide the "Back to Home" and "Reset" buttons
    document.getElementById('backHomeButton').classList.add('d-none');
    document.getElementById('resetButton').classList.add('d-none');

    // Show the Yes/No buttons again
    document.getElementById('yesButton').classList.remove('d-none');
    document.getElementById('noButton').classList.remove('d-none');
    askNextQuestion14();
}


