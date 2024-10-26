let question1_section31 =
  "Is the individual a member of Board of Election Inspectors (BEI)?";

function startSection31Questions() {
  currentSection = "section31";
  step = 1;
  document.getElementById("questionText").innerHTML = question1_section31;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the member of BEI participated in the election process specifically in registration and revision activities?";
        step = 2;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual responsible to process the payments (cashier or finance officer) from Department of Education, Culture and Sports, or Commission on Elections?";
        step = 3;
      }
    } else if (step === 2) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Has the member of BEI received Per Diem within fifteen (15) days after the day of (Registration, Revision, and Election)?";
        step = 4;
      } else {
        document.getElementById("questionText").innerHTML =
          "Ginagawa mo d2? Trip mo lang?";
        showResultButtons();
      }
    } else if (step === 3) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the funds available to pay the election inspectors?";
        step = 7;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the individual included in other officials (Provincial, city, municipal treasurers, and Department of Education, Culture, and Sports supervisors assigned by the Commission)?";
        step = 10;
      }
    } else if (step === 4) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the per diem received by the member in accordance with the specified per diem rate?";
        step = 5;
      } else {
        document.getElementById("questionText").innerHTML =
          "Are the funds available to pay the members of the BEI?";
        step = 6;
      }
    } else if (step === 5) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      }
    } else if (step === 6) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      }
    } else if (step === 7) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Are the Officials received the correct amount of Per Diem based on the Per Diem Rate?";
        step = 8;
      } else {
        document.getElementById("questionText").innerHTML =
          "Is the delay of payment has a valid, justifiable, and legitimate reason?";
        step = 9;
      }
    } else if (step === 8) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      }
    } else if (step === 9) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      }
    } else if (step === 10) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Has the official received Per Diem within fifteen (15) days after the day of election?";
        step = 11;
      } else {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      }
    } else if (step === 11) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Is the per diem received by the official in accordance with the specified per diem rate?";
        step = 12;
      } else {
        document.getElementById("questionText").innerHTML =
          "Are the funds available to pay the members of the BEI?";
        step = 13;
      }
    } else if (step === 12) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      }
    } else if (step === 13) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: Imprisonment (1 to 6 years), Disqualification from Public Office, Loss of Voting Rights.";
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML = "No violation.";
        showResultButtons();
      }
    }
  };
}
