function resetSection() {
    // Reset the question text to the initial state
    document.getElementById('questionText').innerHTML = "Q1: Does the individual have firearms?";

    // Reset the step counter to the first question
    step = 1;

    // Show the Yes/No buttons
    document.getElementById('yesButton').classList.remove('d-none');
    document.getElementById('noButton').classList.remove('d-none');

    // Hide the "Back to Home" button during reset
    document.getElementById('backHomeButton').classList.add('d-none');

    // Hide the Reset button itself during reset
    document.getElementById('resetButton').classList.add('d-none');

    // Show the question container again
    document.getElementById('questionContainer').style.display = 'block';

    // Optionally clear any previously selected answers if using inputs
    document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);

    // Hide any scenario sections that might be displayed after answering
    document.querySelectorAll('.scenario-section').forEach(section => section.style.display = 'none');
}

function handleAnswer(answer) {
    // Hide the question container after the answer is selected
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.style.display = 'none'; // Hide the question container

    // Log the answer and perform additional actions based on the answer
    alert(`You answered: ${answer}`);

    // Optionally, show other scenarios or process the answer logic
    document.querySelectorAll('.scenario-section').forEach(section => {
        section.style.display = 'block'; // Show scenarios after an answer is selected
    });

    // When appropriate, show the result buttons (Back to Home and Reset)
    showResultButtons();
}

function goBackToHome() {
    // Hide the question container and result buttons
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('backHomeButton').classList.add('d-none');
    document.getElementById('resetButton').classList.add('d-none');
    
    // Show the Yes/No buttons again for the next question
    document.getElementById('yesButton').classList.remove('d-none');
    document.getElementById('noButton').classList.remove('d-none');
    
    // Show the scenario sections again
    document.querySelectorAll('.scenario-section').forEach(section => section.style.display = 'block');
    
    // Reset the question text and step
    document.getElementById('questionText').innerHTML = '';
}

function showResultButtons() {
    // Hide the Yes/No buttons
    document.getElementById('yesButton').classList.add('d-none');
    document.getElementById('noButton').classList.add('d-none');

    // Show the "Back to Home" and "Reset" buttons
    document.getElementById('backHomeButton').classList.remove('d-none');
    document.getElementById('resetButton').classList.remove('d-none');
}
