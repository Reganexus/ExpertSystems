let currentStep31 = 1; // To keep track of the question step for Section 31

function startSection31Questions() {
    currentStep31 = 1;
    askNextQuestion31(); // Start the process by asking the first question
}

function askNextQuestion31() {
    switch (currentStep31) {
        case 1:
            showQuestion("Is the individual a member of Board of Election Inspectors (BEI)?");
            break;
        case 2:
            showQuestion("Is the member of BEI participated in the election process specifically in registration and revision activities?");
            break;
        case 3:
            showQuestion("What are you doing here? Is this just for fun?");
            break;
        case 4:
            showQuestion("Has the member of BEI received Per Diem within fifteen (15) days after the day of (Registration, Revision, and Election)?");
            break;
        case 5:
            showQuestion("Is the per diem received by the member in accordance with the specified per diem rate?");
            break;
        case 6:
            showQuestion("Are the funds available to pay the members of the BEI?");
            break;
        case 7:
            showQuestion("Is the individual responsible for processing the payments (cashier or finance officer) from the Department of Education, Culture and Sports, or Commission on Elections?");
            break;
        case 8:
            showQuestion("Are the funds available to pay the election inspectors?");
            break;
        case 9:
            showQuestion("Did the Officials receive the correct amount of Per Diem based on the Per Diem Rate?");
            break;
        case 10:
            showQuestion("Is the delay in payment justified with a valid reason?");
            break;
        case 11:
            showQuestion("Is the individual included in other officials (Provincial, city, municipal treasurers, and Department of Education, Culture, and Sports supervisors assigned by the Commission)?");
            break;
        case 12:
            showQuestion("Did the individual included in other officials receive Per Diem within fifteen (15) days after the day of the election?");
            break;
        case 13:
            showQuestion("Is the per diem received by the member in accordance with the specified per diem rate?");
            break;
        case 14:
            showQuestion("Are the funds available to pay the members of the BEI?");
            break;
        default:
            goBack(); // Handle end of questions or reset
            break;
    }
}

function handleAnswer31(answer) {
    switch (currentStep31) {
        case 1:
            if (answer === 'yes') {
                currentStep31 = 2;
                askNextQuestion31();
            } else {
                currentStep31 = 3;
                askNextQuestion31();
            }
            break;
        case 2:
            if (answer === 'yes') {
                currentStep31 = 4;
                askNextQuestion31();
            } else {
                displayMessage("What are you doing here? Is this just for fun?");
            }
            break;
        case 4:
            if (answer === 'yes') {
                currentStep31 = 5;
                askNextQuestion31();
            } else {
                currentStep31 = 6;
                askNextQuestion31();
            }
            break;
        case 5:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty("Imprisonment: Violators may face imprisonment of one to six years, depending on the severity of the offense. Disqualification from Holding Public Office. Loss of Voting Rights.");
            }
            break;
        case 6:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: Violators may face imprisonment of one to six years. Disqualification from Holding Public Office. Loss of Voting Rights.");
            } else {
                displayNoPenalty();
            }
            break;
        case 7:
            if (answer === 'yes') {
                currentStep31 = 8;
                askNextQuestion31();
            } else {
                currentStep31 = 10; // Skip to question 10
                askNextQuestion31();
            }
            break;
        case 8:
            if (answer === 'yes') {
                currentStep31 = 9;
                askNextQuestion31();
            } else {
                currentStep31 = 10;
                askNextQuestion31();
            }
            break;
        case 9:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty("Imprisonment: Violators may face imprisonment of one to six years. Disqualification from Holding Public Office. Loss of Voting Rights.");
            }
            break;
        case 10:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty("Imprisonment: Violators may face imprisonment of one to six years. Disqualification from Holding Public Office. Loss of Voting Rights.");
            }
            break;
        case 11:
            if (answer === 'yes') {
                currentStep31 = 12;
                askNextQuestion31();
            } else {
                displayNoPenalty();
            }
            break;
        case 12:
            if (answer === 'yes') {
                currentStep31 = 13;
                askNextQuestion31();
            } else {
                displayNoPenalty();
            }
            break;
        case 13:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty("Imprisonment: Violators may face imprisonment of one to six years. Disqualification from Holding Public Office. Loss of Voting Rights.");
            }
            break;
        case 14:
            if (answer === 'yes') {
                displayPenalty("Imprisonment: Violators may face imprisonment of one to six years. Disqualification from Holding Public Office. Loss of Voting Rights.");
            } else {
                displayNoPenalty();
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
    showResultButtons();
}

function displayNoPenalty() {
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = "No Violation."; // Display "No penalty" in the questionContainer
    showResultButtons();
}

function resetQuiz31() {
    currentStep31 = 1; // Reset to the first question of Section 31
    document.getElementById('backHomeButton').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('yesButton').style.display = 'inline-block';
    document.getElementById('noButton').style.display = 'inline-block';
    askNextQuestion31();
}
