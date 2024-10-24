function startSection31Questions() {
    // Set the first question to ask if the individual is a foreigner
    document.getElementById('questionText').innerHTML = "Is the individual a foreigner?";
    document.getElementById('questionContainer').style.display = 'block';
    document.querySelectorAll('.scenario-section').forEach(section => section.style.display = 'none');
    let step = 0; // Start with step 0 for the foreigner question

    window.handleAnswer = function(answer) {
        if (step === 0) { // Foreigner check
            if (answer === 'yes') {
                // If the individual is a foreigner, ask about involvement in the election process
                document.getElementById('questionText').innerHTML = "Is the individual trying to be involved in the election process?";
                step = -1; // Step for foreigner involvement question
            } else {
                // Proceed to the original first question
                document.getElementById('questionText').innerHTML = "Is the individual a member of Board of Election Inspectors (BEI)?";
                step = 1;
            }
        } else if (step === -1) { // Foreigner involvement question
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = `"Penalty: Guilty of violating Section 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, sentenced to deportation which shall be enforced after the prison term has been served"`;
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 1) { // Original question logic begins here
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the member of BEI participated in the election process specifically in registration and revision activities?";
                step = 2;
            } else {
                document.getElementById('questionText').innerHTML = "Is the individual responsible to process the payments (cashier or finance officer) from Department of Education, Culture and Sports, or Commission on Elections?";
                step = 3;
            }
        } else if (step === 2) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Has the member of BEI received Per Diem within fifteen (15) days after the day of (Registration, Revision, and Election)?";
                step = 4;
            } else {
                document.getElementById('questionText').innerHTML = "No Violation.";
                showResultButtons();
            }
        } else if (step === 3) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Are the funds available to pay the election inspectors?";
                step = 7;
            } else {
                document.getElementById('questionText').innerHTML = "Is the individual included in other officials (Provincial, city, municipal treasurers, and Department of Education, Culture, and Sports supervisors assigned by the Commission)?";
                step = 10;
            }
        } else if (step === 4) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the per diem received by the member in accordance with the specified per diem rate?";
                step = 5;
            } else {
                document.getElementById('questionText').innerHTML = "Are the funds available to pay the members of the BEI?";
                step = 6;
            }
        } else if (step === 5) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code due to incorrect per diem rates.<br>Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
                showResultButtons();
            }
        } else if (step === 6) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code for unjustifiable delays in payment of per diems when funds are available.<br>Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 7) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Are the Officials received the correct amount of Per Diem based on the Per Diem Rate?";
                step = 8;
            } else {
                document.getElementById('questionText').innerHTML = "Is the delay of payment has a valid, justifiable, and legitimate reason?";
                step = 9;
            }
        } else if (step === 8) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code due to incorrect per diem rates.<br>Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
                showResultButtons();
            }
        } else if (step === 9) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code for unjustifiable delays in payment of per diems when funds are available.<br>Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
                showResultButtons();
            }
        } else if (step === 10) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Has the official received Per Diem within fifteen (15) days after the day of election?";
                step = 11;
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 11) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the per diem received by the official in accordance with the specified per diem rate?";
                step = 12;
            } else {
                document.getElementById('questionText').innerHTML = "Are the funds available to pay the members of the BEI?";
                step = 13;
            }
        } else if (step === 12) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code due to incorrect per diem rates.<br>Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
                showResultButtons();
            }
        } else if (step === 13) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Sections 23 and 24 of the Omnibus Election Code for unjustifiable delays in payment of per diems when funds are available.<br>Consequences include imprisonment for a term of 1 to 6 years, disqualification from holding public office, and the loss of voting rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        }
    };
}
