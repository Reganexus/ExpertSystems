let currentStep32 = 1; // To keep track of the question step for Section 32

function startSection32Questions() {
    currentStep32 = 1;
    askNextQuestion32(); // Start the process by asking the first question
}

function askNextQuestion32() {
    switch (currentStep32) {
        case 1:
            showQuestion("Does the individual have firearms?");
            break;
        case 2:
            showQuestion("Does the firearm have a license registration?");
            break;
        case 3:
            showQuestion("Did the individual register their firearms during the election period?");
            break;
        case 4:
            showQuestion("Does the individual have written authorization from the COMELEC?");
            break;
        case 5:
            showQuestion("Did the individual bring a firearm or any deadly weapon into public places?");
            break;
        case 6:
            showQuestion("Is the individual a member of the Philippine National Police, Armed Forces of the Philippines, or any other law enforcement agency of the Government?");
            break;
        case 7:
            showQuestion("Is the law enforcement officer off duty during the election period?");
            break;
        case 8:
            showQuestion("Did the law enforcement officer bring a firearm during their off duty in public places?");
            break;
        case 9:
            showQuestion("Is the law enforcement officer in full uniform, showing clearly and legibly their name, rank, and serial number?");
            break;
        case 10:
            showQuestion("Did the law enforcement officer obtain written authorization from the COMELEC?");
            break;
        case 11:
            showQuestion("Does the private individual use their private vehicle to transport firearms during the election period?");
            break;
        case 12:
            showQuestion("Did the private individual obtain written authorization from the COMELEC to transport firearms?");
            break;
        case 13:
            showQuestion("Did the private individual bring a firearm into public places during the election period?");
            break;
        case 14:
            showQuestion("Did the private individual obtain written authorization from the COMELEC to bring firearms into public places during the election period?");
            break;
        default:
            goBack(); // Handle end of questions or reset
            break;
    }
}

function handleAnswer32(answer) {
    switch (currentStep32) {
        case 1:
            if (answer === 'yes') {
                currentStep32 = 2;
                askNextQuestion32();
            } else {
                displayMessage("END");
            }
            break;
        case 2:
            if (answer === 'yes') {
                currentStep32 = 5; // Skip to question 5
                askNextQuestion32();
            } else {
                currentStep32 = 3;
                askNextQuestion32();
            }
            break;
        case 3:
            if (answer === 'yes') {
                currentStep32 = 4;
                askNextQuestion32();
            } else {
                displayPenalty();
            }
            break;
        case 4:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty();
            }
            break;
        case 5:
            if (answer === 'yes') {
                currentStep32 = 6;
                askNextQuestion32();
            } else {
                displayNoPenalty();
            }
            break;
        case 6:
            if (answer === 'yes') {
                currentStep32 = 7;
                askNextQuestion32();
            } else {
                currentStep32 = 11; // Skip to question 11
                askNextQuestion32();
            }
            break;
        case 7:
            if (answer === 'yes') {
                currentStep32 = 8;
                askNextQuestion32();
            } else {
                currentStep32 = 9;
                askNextQuestion32();
            }
            break;
        case 8:
            if (answer === 'yes') {
                displayPenalty();
            } else {
                displayNoPenalty();
            }
            break;
        case 9:
            if (answer === 'yes') {
                currentStep32 = 10;
                askNextQuestion32();
            } else {
                displayPenalty();
            }
            break;
        case 10:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty();
            }
            break;
        case 11:
            if (answer === 'yes') {
                currentStep32 = 12;
                askNextQuestion32();
            } else {
                currentStep32 = 13; // Skip to question 13
                askNextQuestion32();
            }
            break;
        case 12:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty();
            }
            break;
        case 13:
            if (answer === 'yes') {
                currentStep32 = 14;
                askNextQuestion32();
            } else {
                displayNoPenalty();
            }
            break;
        case 14:
            if (answer === 'yes') {
                displayNoPenalty();
            } else {
                displayPenalty();
            }
            break;
        default:
            goBack();
            return;
    }
}

function displayPenalty() {
    const penaltyText = "Imprisonment: One to six years. Disqualification from holding public office. Loss of the right to vote.";
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = `Penalty: ${penaltyText}`; // Display the penalty in the questionContainer
    showResultButtons();
}

function displayNoPenalty() {
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = "No Violation."; // Display "No penalty" in the questionContainer
    showResultButtons();
}

function resetQuiz32() {
    currentStep32 = 1; // Reset to the first question of Section 32
    document.getElementById('backHomeButton').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('yesButton').style.display = 'inline-block';
    document.getElementById('noButton').style.display = 'inline-block';
    askNextQuestion32();
}

