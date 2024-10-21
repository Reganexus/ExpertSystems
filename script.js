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

function handleAnswer(answer) {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.style.display = 'none'; // Hide the question container
    // You can handle the answer logic here
    alert(`You answered: ${answer}`);
    // Optionally, you could reload the scenarios or take other actions
    document.querySelectorAll('.scenario-section').forEach(section => {
        section.style.display = 'block'; // Show scenarios again if needed
    });
}

function goBack() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.style.display = 'none'; // Hide the question container
    // Show all scenario sections again
    document.querySelectorAll('.scenario-section').forEach(section => {
        section.style.display = 'block'; // Show scenarios again
    });
}