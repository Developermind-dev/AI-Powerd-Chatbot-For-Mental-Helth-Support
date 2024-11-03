// script.js
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, 'user');

    // Clear input field
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot');
    }, 1000);
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    // Simple responses for demonstration
    const responses = {
        "hello": "Hi there! How can I help you?",
        "depression": "Depression is a common mental health disorder. It's important to talk to someone who can help.",
        "anxiety": "Anxiety can be overwhelming. Have you considered speaking to a professional?",
        "help": "I'm here to help! Please share what's on your mind.",
        "default": "I'm sorry, I didn't understand that. Can you please rephrase?"
    };

    // Return a response based on user input
    return responses[input.toLowerCase()] || responses["default"];
}
