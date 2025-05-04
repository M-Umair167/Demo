document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages")
  const userInput = document.getElementById("user-input")
  const sendBtn = document.getElementById("send-btn")
  const welcomeMessage = document.getElementById('welcomeMessage');



  // Auto-resize textarea
  userInput.addEventListener('input', autoResize);

  // Handle Enter key (Shift+Enter for new line)
  userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Send button click
  sendBtn.addEventListener('click', handleSend);


  function autoResize() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  }

  function handleSend() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessage('user', message);
    userInput.value = '';
    autoResize.call(userInput);

    // Hide welcome message
    if (welcomeMessage) welcomeMessage.style.display = 'none';

    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message assistant-message';
    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Thinking...';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    

    // Determine which API to call
    const isGenerationRequest = shouldGenerateCode(message);
    const apiUrl = isGenerationRequest ? '/api/generate' : '/api/assist';
    const requestData = isGenerationRequest ?
      { description: message } :
      { query: message };

    // Call API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        // Remove loading indicator
        chatMessages.removeChild(loadingDiv);


        // Handle response
        if (data.error) {
          addMessage('assistant', data.error, true);
        } else {
          const content = isGenerationRequest ? data.code : data.response;
          const isError = content.toLowerCase().includes('failed');
          const isCode = isGenerationRequest && !isError;
          addMessage('assistant', content, isError, isCode);
        }
      })
      .catch(error => {
        chatMessages.removeChild(loadingDiv);
        addMessage('assistant', 'Failed to get response: ' + error.message, true);
      });
  }

  function shouldGenerateCode(message) {
    const lowerMsg = message.toLowerCase();
    const generationKeywords = ['generate', 'create', 'write', 'make', 'code for', 'implement'];
    const assistanceKeywords = ['explain', 'debug', 'fix', 'correct', 'error', 'issue', 'what is', 'how does', 'improve', 'refactor'];

    // Check if input looks like code
    const looksLikeCode = /(def|class|import|for|while|if|else|try|except|return|print)/.test(message);

    return generationKeywords.some(kw => lowerMsg.includes(kw)) &&
      !assistanceKeywords.some(kw => lowerMsg.includes(kw)) &&
      !looksLikeCode;
  }

  function addMessage(role, content, isError = false, isCode = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}-message${isError ? ' error-message' : ''}`;
  
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
  
    if (isCode) {
      const codeBlock = document.createElement('pre');
      codeBlock.className = 'code-block';
      codeBlock.textContent = content;
      contentDiv.appendChild(codeBlock);
    } else {
      contentDiv.innerHTML = marked.parse(content);
  
      const codeBlocks = contentDiv.querySelectorAll('pre code');
      codeBlocks.forEach(block => hljs.highlightElement(block));
    }
  
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  

})

