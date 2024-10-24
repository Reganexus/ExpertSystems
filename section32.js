function startSection32Questions() {
    document.getElementById('questionText').innerHTML = "Does the individual have firearms?";
    document.getElementById('questionContainer').style.display = 'block';
    document.querySelectorAll('.scenario-section').forEach(section => section.style.display = 'none');
    let step = 1;

    window.handleAnswer = function(answer) {
        if (step === 1) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the firearm licensed/registered?";
                step = 2;
            } else {
                document.getElementById('questionText').innerHTML = "END: No violation.";
                showResultButtons();
            }
        } else if (step === 2) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Has the individual brought a firearm or any deadly weapons in public places?";
                step = 5;
            } else {
                document.getElementById('questionText').innerHTML = "Has the individual registered their firearm during the election period?";
                step = 3;
            }
        } else if (step === 3) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Does the individual have a written authorization from the COMELEC?";
                step = 4;
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            }
        } else if (step === 4) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            }
        } else if (step === 5) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the individual a member of the Philippine National Police, Armed Forces of the Philippines, or any other law enforcement agencies of the Government?";
                step = 6;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 6) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the law enforcement officer off-duty during the election period?";
                step = 7;
            } else {
                document.getElementById('questionText').innerHTML = "Is the law enforcement officer in full uniform, showing clearly and legibly his/her name, rank, and serial number?";
                step = 9;
            }
        } else if (step === 7) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Has the law enforcement officer brought a firearm during their off-duty hours in public places?";
                step = 8;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 8) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 9) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Did the law enforcement officer obtain written authorization from the COMELEC?";
                step = 10;
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            }
        } else if (step === 10) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            }
        } else if (step === 11) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Did the private individual obtain a written authorization from the COMELEC to transport firearms?";
                step = 12;
            } else {
                document.getElementById('questionText').innerHTML = "Did the private individual bring a firearm in public places during the election period?";
                step = 13;
            }
        } else if (step === 12) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            }
        } else if (step === 13) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Did the private individual obtain a written authorization from the COMELEC to bring firearms in public places during the election period?";
                step = 14;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 14) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            }
        }
    };
}

