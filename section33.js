function startSection33Questions() {
    document.getElementById('questionText').innerHTML = "Is the individual a candidate for public office, including incumbent public officers seeking election to any public office?";
    document.getElementById('questionContainer').style.display = 'block';
    document.querySelectorAll('.scenario-section').forEach(section => section.style.display = 'none');

    let step = 1;

    window.handleAnswer = function(answer) {
        if (step === 1) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Does the candidate face any threats to life or security during the election campaign?";
                step = 2;
            } else {
                document.getElementById('questionText').innerHTML = "Is the individual a member of the Philippine National Police, Armed Forces of the Philippines, or any other law enforcement agencies of the Government?";
                step = 3;
            }
        } else if (step === 2) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Are the threats to life or security validated as true for the individual candidate?";
                step = 4;
            } else {
                document.getElementById('questionText').innerHTML = "Does the candidate have Security Personnel and Bodyguards assigned to them during the election campaign?";
                step = 5;
            }
        } else if (step === 4) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Does the candidate submit an application to the COMELEC to assign them a member/members of a law enforcement agency?";
                step = 6;
            } else {
                document.getElementById('questionText').innerHTML = "Does the candidate have Security Personnel and Bodyguards assigned to them during the election campaign?";
                step = 8;
            }
        } else if (step === 6) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Does the candidate have Security Personnel and Bodyguards assigned to them during the election campaign?";
                step = 8;
            }
        } else if (step === 8) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Does the candidate submit an application to the COMELEC to assign them a member/members of a law enforcement agency?";
                step = 9;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 9) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                displayPenalty();
            }
        } else if (step === 5) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Does the candidate submit an application to the COMELEC to assign them a member/members of a law enforcement agency?";
                step = 7;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 7) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                displayPenalty();
            }
        } else if (step === 3) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Are the law enforcer(s) Security Personnel and Bodyguards of a candidate?";
                step = 10;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 10) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Are the law enforcer(s) assigned by the COMELEC as Security Personnel and Bodyguards for the individual candidate?";
                step = 11;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 11) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Are the law enforcer(s) assigned by the COMELEC as Security Personnel and Bodyguards wearing full uniform clearly showing their name, rank, and serial number?";
                step = 12;
            } else {
                displayPenalty();
            }
        } else if (step === 12) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                displayPenalty();
            }
        }
    };
}

function displayPenalty() {
    const penaltyText = `
        Penalty under Sections 263 and 264:
        <strong>Imprisonment:</strong> A violator may face imprisonment of one to six years depending on the severity of the offense. This applies to candidates, public officers, or law enforcement officers found guilty of violating Section 33.
        <strong>Disqualification from Holding Public Office:</strong> Any person convicted of an election offense may face permanent disqualification from holding public office, meaning that a candidate who violates Section 33 could lose their right to run for or hold any elected position in the future. Law enforcement officers could lose their current position or be barred from any future role in public service.
        <strong>Loss of Voting Rights:</strong> Conviction could lead to the loss of the right to vote in future elections.
    `;
    
    document.getElementById('questionText').innerHTML = penaltyText;
    showResultButtons();
}

function showResultButtons() {
    // Hide the Yes/No buttons
    document.getElementById('yesButton').classList.add('d-none');
    document.getElementById('noButton').classList.add('d-none');

    // Show the "Back to Home" and "Reset" buttons
    document.getElementById('backHomeButton').classList.remove('d-none');
    document.getElementById('resetButton').classList.remove('d-none');
}
