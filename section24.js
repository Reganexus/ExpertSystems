let question1_section24 =
  "Did the Chairman of the board of election inspectors affix his/her signature at the back of the official ballot at the presence of the voter?";

function startSection24Questions() {
  currentSection = "section24";
  step = 1;
  falseCounter = 0;
  document.getElementById("questionText").innerHTML = question1_section24;
  document.getElementById("questionContainer").style.display = "block";
  document
    .querySelectorAll(".scenario-section")
    .forEach((section) => (section.style.display = "none"));

  window.handleAnswer = function (answer) {
    if (step === 1) {
      document.getElementById("questionText").innerHTML =
        "Is the ballot with signature of the chairman of the board of election been authenticated?";
      if (answer === "yes") {
        falseCounter++;
        step = 2;
      } else {
        step = 2;
      }
    } else if (step === 2) {
      document.getElementById("questionText").innerHTML =
        "Are there any foreigners involved in the political party?";
      if (answer === "yes") {
        falseCounter++;
        step = 3;
      } else {
        step = 3;
      }
    } else if (step === 3) {
      if (answer === "yes") {
        document.getElementById("questionText").innerHTML =
          "Penalty: 1-6 years imprisonment is not subject to probation\nPenalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.\nPenalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.\nPenalty: Sentenced to deportation which shall be enforced after the prison term has been served.".replace(
            /\n/g,
            "<br>"
          );
        showResultButtons();
      } else {
        document.getElementById("questionText").innerHTML =
          "Penalty: 1-6 years imprisonment is not subject to probation\nPenalty: Sentenced to suffer disqualification to hold public office and deprivation of the right of suffrage.\nPenalty: Sentenced to pay a fine not less than ten thousand pesos (10,000) if found guilty.".replace(
            /\n/g,
            "<br>"
          );
        showResultButtons();
      }

      if (falseCounter >= 2) {
        document.getElementById("questionText").innerHTML = "No penalty.";
        showResultButtons();
      }
    }
  };
}
