function showQuestion(scenario) {
    // Hide all scenario sections
    document.querySelectorAll('.scenario-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show question container
    const questionContainer = document.getElementById('questionContainer');
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = scenario + "?"; // Set the question text
    questionContainer.style.display = 'block'; // Show the question container
}

// function handleAnswer(answer) {
//     const questionContainer = document.getElementById('questionContainer');
//     questionContainer.style.display = 'none'; // Hide the question container
//     // You can handle the answer logic here
//     alert(`You answered: ${answer}`);
//     // Optionally, you could reload the scenarios or take other actions
//     document.querySelectorAll('.scenario-section').forEach(section => {
//         section.style.display = 'block'; // Show scenarios again if needed
//     });
// }

function goBack() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.style.display = 'none'; // Hide the question container
    // Show all scenario sections again
    document.querySelectorAll('.scenario-section').forEach(section => {
        section.style.display = 'block'; // Show scenarios again
    });
}

function showResultButtons() {
    // Hide the Yes/No buttons
    document.getElementById('yesButton').classList.add('d-none');
    document.getElementById('noButton').classList.add('d-none');

    // Show the "Back to Home" and "Reset" buttons
    document.getElementById('backHomeButton').classList.remove('d-none');
    document.getElementById('resetButton').classList.remove('d-none');
}

function goBackToHome() {
    // Hide the question container and reset buttons
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('backHomeButton').classList.add('d-none');
    document.getElementById('resetButton').classList.add('d-none');
    
    // Show the Yes/No buttons again for next time
    document.getElementById('yesButton').classList.remove('d-none');
    document.getElementById('noButton').classList.remove('d-none');
    
    // Show the scenario section again
    const scenarios = document.getElementsByClassName('scenario-section');
    for (let i = 0; i < scenarios.length; i++) {
        scenarios[i].style.display = 'block';
    }
    
    // Reset the question text and step
    document.getElementById('questionText').innerHTML = '';
    currentStep = 1; // Reset to the first question
}