let currentStep = 1; // To keep track of the question step

function startSection14Questions() {
    currentStep = 1;
    askNextQuestion(); // Start the process by asking the first question
}

function askNextQuestion() {
    switch (currentStep) {
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
    switch (currentStep) {
        case 1:
            if (answer === 'yes') {
                currentStep = 2;
            } else {
                displayNoPenalty();
            }
            break;
        case 2:
            if (answer === 'yes') {
                currentStep = 3;
            } else {
                displayNoPenalty();
            }
            break;
        case 3:
            if (answer === 'yes') {
                currentStep = 4;
            } else {
                currentStep = 5;
            }
            break;
        case 4:
            if (answer === 'yes') {
                displayPenalty("An administrative offense. Fine: ₱1,000 to ₱30,000.");
            } else {
                currentStep = 6;
            }
            break;
        case 5:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                currentStep = 7;
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

    // Move to the next question if applicable
    askNextQuestion();
}

function displayPenalty(penaltyText) {
    alert(penaltyText);
    goBack(); // Optionally return to the scenarios
}

function displayNoPenalty() {
    alert("No penalty.");
    goBack(); // Optionally return to the scenarios
}
