let question1_section13 =
  "Did the candidate exceed the authorized spending limit for the election campaign?";

function startSection13Questions() {
  currentSection = "section13";
  step = 1;
  falseCounter = 0;
  counterMax = 0;
  document.getElementById("questionText").innerHTML = question1_section13;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      document.getElementById("questionText").innerHTML =
        "Did the political party exceed its authorized spending limit?";
      if (answer === "yes") {
        step = 2;
      } else {
        falseCounter = falseCounter + 1;
        step = 2;
      }
      counterMax = counterMax + 1;
    } else if (step === 2) {
      document.getElementById("questionText").innerHTML =
        "Were all contributions (in cash or in kind) to the candidate or political party properly reported to the Commission on Elections (COMELEC)?";
      if (answer === "yes") {
        step = 3;
      } else {
        falseCounter = falseCounter + 1;
        step = 3;
      }
      counterMax = counterMax + 1;
    } else if (step === 3) {
      document.getElementById("questionText").innerHTML =
        "Were any unreported contributions received by the candidate or political party?";
      if (answer === "yes") {
        step = 4;
      } else {
        falseCounter = falseCounter + 1;
        step = 4;
      }
      counterMax = counterMax + 1;
    } else if (step === 4) {
      document.getElementById("questionText").innerHTML =
        "Did the candidate or political party attempt to evade gift tax obligations by failing to report contributions?";
      if (answer === "yes") {
        step = 5;
      } else {
        falseCounter = falseCounter + 1;
        step = 5;
      }
      counterMax = counterMax + 1;
    } else if (step === 5) {
      document.getElementById("questionText").innerHTML =
        "Are there any foreigners involved in the political party?";
      if (answer === "yes") {
        if (falseCounter == counterMax) {
          document.getElementById("questionText").innerHTML = "No Penalty";
          showResultButtons();
        }
        step = 6;
      } else {
        falseCounter = falseCounter + 1;
        step = 6;
      }
      counterMax = counterMax + 1;
    } else if (step === 6) {
      if (falseCounter == counterMax) {
        document.getElementById("questionText").innerHTML = "No Penalty";
      } else if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: 1-6 years imprisonment is not subject to probation\nPenalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.\nPenalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.\nPenalty: Sentenced to deportation which shall be enforced after the prison term has been served.\nCorollary: Anti-Graft and Corrupt Practices Act (Republic Act No. 3019)";
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: 1-6 years imprisonment is not subject to probation\nPenalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.\nPenalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.\nCorollary: Anti-Graft and Corrupt Practices Act (Republic Act No. 3019)";
      }
      showResultButtons();
    }
  };
}
