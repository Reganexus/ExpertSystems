let question1_section14 = "Is the individual a candidate for election?";

function startSection14Questions() {
    currentSection = "section14";
    document.getElementById('questionText').innerHTML = "question1_section14";
    document.getElementById('questionContainer').style.display = 'block';
    document.querySelectorAll('.scenario-section').forEach(section => section.style.display = 'none');
    let step = 1;

    window.handleAnswer = function(answer) {
        if (step === 1) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Q2: Is the individual running for a position in the barangay?";
                step = 2;
            } else {
                document.getElementById('questionText').innerHTML = "No penalty.";
                showResultButtons();
            }
        } else if (step === 2) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Q3: Has the candidate spent any money or resources for the election campaign?";
                step = 3;
            } else {
                document.getElementById('questionText').innerHTML = "No penalty.";
                showResultButtons();
            }
        } else if (step === 3) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Q4: Has the elected official entered their public office after being elected without submitting SOCE after 30 days of the election?";
                step = 4;
            } else {
                document.getElementById('questionText').innerHTML = "Q5: Has the candidate submitted a nil SOCE after 30 days of election?";
                step = 5;
            }
        } else if (step === 4) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: An administrative offense, fine between P1,000 and P30,000.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Q6: Has the elected official submitted SOCE after 30 days of the election?";
                step = 6;
            }
        } else if (step === 5) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No penalty.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Q7: Has the candidate previously violated the regulations regarding the submission of the SOCE?";
                step = 7;
            }
        } else if (step === 6) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "No penalty.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: An administrative offense, fine between P1,000 and P30,000.";
                showResultButtons();
            }
        } else if (step === 7) {
            if (answer === 'yes') {
                document.getElementById('questionText').innerHTML = "Penalty: Fine between P2,000 and P60,000.";
                showResultButtons();
            } else {
                document.getElementById('questionText').innerHTML = "Penalty: An administrative offense, fine between P1,000 and P30,000.";
                showResultButtons();
            }
        }
    };
}
