// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const chatbotButton = document.querySelector('.chatbot-button');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeChatbotButton = document.querySelector('.close-chatbot');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle chatbot visibility
    chatbotButton.addEventListener('click', function () {
        chatbotContainer.style.display = 'block';
    });

    closeChatbotButton.addEventListener('click', function () {
        chatbotContainer.style.display = 'none';
    });

    // Rasa WebChat integration
    const webchat = WebChat.create({
        container: chatbotMessages,
        socketUrl: 'http://localhost:5005',
        socketPath: '/socket.io/',
        title: 'Chat with Mike',
        inputTextFieldHint: 'Type your message...',
        connectingText: 'Connecting...',
        hideWhenNotConnected: true,
        showFullScreenButton: true,
        params: {
            images: {
                user: 'user_avatar.png', // Replace with your user avatar image URL
                bot: 'chatbot_avatar.png' // Replace with your chatbot avatar image URL
            },
            storage: 'local' // Save chat history locally
        }
    });

    // Handle user input and send messages
    sendButton.addEventListener('click', function () {
        const message = userInput.value.trim();
        if (message !== '') {
            webchat.send(message);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
