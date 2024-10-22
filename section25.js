let currentStep25 = 1; // To keep track of the question step for Section 25

function startSection25Questions() {
    currentStep25 = 1;
    askNextQuestion25(); // Start the process by asking the first question
}

function askNextQuestion25() {
    switch (currentStep25) {
        case 1:
            showQuestion("Is the individual a member of Board of Election Inspectors (Chairman, Poll Clerk, Third Member)?");
            break;
        case 2:
            showQuestion("Is the member of BEI away from their positions and blocking watchers or public from viewing the ballots, election return, or tally board?");
            break;
        case 3:
            showQuestion("Is the table used for counting votes cluttered with unrelated materials?");
            break;
        case 4:
            showQuestion("Are the BEI members following the procedural requirements, like reading ballots aloud or recording votes in real-time?");
            break;
        case 5:
            showQuestion("Is any individual, other than official BEI members, allowed to get too close to the ballots or election documents?");
            break;
        case 6:
            showQuestion("Is the individual an Election Personnel (Watcher/Poll Worker)?");
            break;
        case 7:
            showQuestion("Is the watcher or poll worker attempting to touch tally board, ballots, or election return?");
            break;
        case 8:
            showQuestion("Is the individual a registered voter?");
            break;
        case 9:
            showQuestion("Is the registered voter trying to get closer and touch the tally board, ballots, or election return?");
            break;
        case 10:
            showQuestion("Is the unauthorized individual in the polling place trying to help during the election process?");
            break;
        default:
            goBack(); // Handle end of questions or reset
            break;
    }
}

function handleAnswer25(answer) {
    // Process the answer for each step in Section 25
    switch (currentStep25) {
        case 1:
            if (answer === 'yes') {
                currentStep25 = 2;
                askNextQuestion25();
            } else {
                currentStep25 = 3;
                askNextQuestion25();
            }
            break;
        case 2:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: one to six years. Disqualification from holding public office. Loss of voting rights.");
            } else {
                currentStep25 = 4;
                askNextQuestion25();
            }
            break;
        case 3:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: one to six years. Disqualification from holding public office. Loss of voting rights.");
            } else {
                currentStep25 = 4;
                askNextQuestion25();
            }
            break;
        case 4:
            if (answer === 'yes') {
                currentStep25 = 5;
                askNextQuestion25();
            } else {
                displayPenalty("Imprisonment: one to six years. Disqualification from holding public office. Loss of voting rights.");
            }
            break;
        case 5:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: one to six years. Disqualification from holding public office. Loss of voting rights.");
            } else {
                displayNoPenalty();
            }
            break;
        case 6:
            if (answer === 'yes') {
                currentStep25 = 7;
                askNextQuestion25();
            } else {
                currentStep25 = 8;
                askNextQuestion25();
            }
            break;
        case 7:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: one to six years. Disqualification from holding public office. Loss of voting rights.");
            } else {
                displayNoPenalty();
            }
            break;
        case 8:
            if (answer === 'yes') {
                currentStep25 = 9;
                askNextQuestion25();
            } else {
                currentStep25 = 10;
                askNextQuestion25();
            }
            break;
        case 9:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: one to six years. Disqualification from holding public office. Loss of voting rights.");
            } else {
                displayNoPenalty();
            }
            break;
        case 10:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: one to six years. Disqualification from holding public office. Loss of voting rights.");
            } else {
                displayNoPenalty();
            }
            break;
        default:
            goBack(); // Return to the main menu or handle end of questions
            return;
    }
}

function displayPenalty(penaltyText) {
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = `Penalty: ${penaltyText}`; // Display the penalty in the questionContainer
    showResultButtons();
}

function displayNoPenalty() {
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = "No Violation."; // Display "No penalty" in the questionContainer
    showResultButtons();
}

function resetQuiz() {
    currentStep = 1; // Reset to the first question
    
    // Hide the "Back to Home" and "Reset" buttons
    document.getElementById('backHomeButton').classList.add('d-none');
    document.getElementById('resetButton').classList.add('d-none');

    // Show the Yes/No buttons again
    document.getElementById('yesButton').classList.remove('d-none');
    document.getElementById('noButton').classList.remove('d-none');
    askNextQuestion25();
}

