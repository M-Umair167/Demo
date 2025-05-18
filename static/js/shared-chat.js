// Shared utility functions for chat components
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function addMessage(container, role, content, isHTML = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${role}-message`;

  const messageContent = document.createElement("div");
  messageContent.className = "message-content";

  if (isHTML) {
    messageContent.innerHTML = content;
  } else {
    messageContent.textContent = content;
  }

  // Highlight code and add copy button
  messageContent.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.innerHTML = '<i class="far fa-copy"></i>';
    copyBtn.title = 'Copy code';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(block.textContent);
      copyBtn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="far fa-copy"></i>';
      }, 2000);
    });
    
    block.parentNode.insertBefore(copyBtn, block);
  });

  messageDiv.appendChild(messageContent);
  container.appendChild(messageDiv);
  scrollToBottom(container);
}

function scrollToBottom(container) {
  container.scrollTop = container.scrollHeight;
}

function handleTextareaInput(textarea) {
  // Save cursor position
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  
  // Auto-resize
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
  
  // Restore cursor position
  textarea.setSelectionRange(startPos, endPos);
}

function setupTextarea(textarea) {
  textarea.addEventListener('input', () => handleTextareaInput(textarea));
  handleTextareaInput(textarea);
}