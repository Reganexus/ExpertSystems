let question1_section25 =
  "Q1: Is the individual a member of Board of Election Inspectors (Chairman, Poll Clerk, Third Member)?";

function startSection25Questions() {
    // Set the first question to ask if the individual is a foreigner
    document.getElementById('questionText').innerHTML = question1_section25;
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
                document.getElementById('questionText').innerHTML = "Is the individual a member of Board of Election Inspectors (Chairman, Poll Clerk, Third Member)?";
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
                document.getElementById('questionText').innerHTML = "Is the member of BEI blocking the watchers or public from having a clear view of the ballots, election return, or tally board?";
                step = 2;
            } else {
                document.getElementById('questionText').innerHTML = "Is the individual an Election Personnel (Watchers/Poll Workers)?";
                step = 3;
            }
        } else if (step === 2) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = `"Penalty: Guilty of obstructing the view of the public.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights."`;
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Is the table cluttered with unrelated materials like pens, papers, or personal items?";
                step = 4;
            }
        } else if (step === 3) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the watcher or poll worker trying to touch the tally board, ballots, or election return?";
                step = 5;
            } else {
                document.getElementById('questionText').innerHTML = "Are you a registered voter?";
                step = 6;
            }
        } else if (step === 4) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Are the BEI members following procedural requirements like reading ballots aloud and recording votes in real-time?";
                step = 7;
            }
        } else if (step === 5) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 6) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Is the registered voter trying to touch the tally board, ballots, or election return?";
                step = 8;
            } else {
                document.getElementById('questionText').innerHTML = "Is the individual an unauthorized person trying to assist in the election process?";
                step = 9;
            }
        } else if (step === 7) {
            if (answer === 'no') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Are unauthorized individuals getting too close to ballots or documents?";
                step = 10;
            }
        } else if (step === 8) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 9) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        } else if (step === 10) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Guilty of violating Section 23 and 24 of the Omnibus Election Code.<br>Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "No violation.";
                showResultButtons();
            }
        }
    };
  currentSection = "section25";
  step = 1;
  document.getElementById("questionText").innerHTML = question1_section25;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Q2: Is the member of BEI blocking the watchers or public from having a clear view of the ballots, election return, or tally board?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML =
          "Q3: Is the individual an Election Personnel (Watchers/Poll Workers)?";
        step = 3;
      }
    } else if (step === 2) {
      if (answer === "yes") {
        document.getElementById(
          "questionText"
        ).innerHTML = `"Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights."`;
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Q4: Is the table cluttered with unrelated materials like pens, papers, or personal items?";
        step = 4;
      }
    } else if (step === 3) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Q5: Is the watcher or poll worker trying to touch the tally board, ballots, or election return?";
        step = 5;
      } else {
        document.getElementById("questionText").innerHTML =
          "Q6: Are you a registered voter?";
        step = 6;
      }
    } else if (step === 4) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Q7: Are the BEI members following procedural requirements like reading ballots aloud and recording votes in real-time?";
        step = 7;
      }
    } else if (step === 5) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      }
    } else if (step === 6) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Q8: Is the registered voter trying to touch the tally board, ballots, or election return?";
        step = 8;
      } else {
        document.getElementById("questionText").innerHTML =
          "Q9: Is the individual an unauthorized person trying to assist in the election process?";
        step = 9;
      }
    } else if (step === 7) {
      if (answer === "no") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Q10: Are unauthorized individuals getting too close to ballots or documents?";
        step = 10;
      }
    } else if (step === 8) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      }
    } else if (step === 9) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      }
    } else if (step === 10) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Guilty of violating the rules of vote counting. Imprisonment: 1 to 6 years, Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      }
    }
  };
}
