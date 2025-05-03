document.addEventListener('DOMContentLoaded', function () {
    const codeEditor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
        mode: 'python',
        theme: 'dracula',
        lineNumbers: true,
        tabSize: 4,
        indentUnit: 4,
        indentWithTabs: false,
        smartIndent: true,
        autofocus: true,
        extraKeys: {
            "Tab": function (cm) {
                if (cm.somethingSelected()) {
                    cm.indentSelection("add");
                } else {
                    cm.replaceSelection("    ", "end", "+input");
                }
            }
        }
    });

    const runBtn = document.getElementById('run-btn');
    const clearBtn = document.getElementById('clear-output');
    const outputDiv = document.getElementById('output');
    const inputArea = document.getElementById('input-area');
    const userInput = document.getElementById('user-input');

    let isWaitingForInput = false;
    let previousInput = '';
    let currentCode = '';

    runBtn.addEventListener('click', () => {
        executeCode();
    });

    clearBtn.addEventListener('click', () => {
        outputDiv.innerHTML = '<span class="text-muted">// The output of your code will appear here...</span>';
        inputArea.style.display = 'none';
        isWaitingForInput = false;
        previousInput = '';
    });

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && isWaitingForInput) {
            e.preventDefault();
            const input = userInput.value;
            const previousOutput = outputDiv.querySelector('div:last-child');

            if (previousOutput && previousOutput.textContent.trim().endsWith('?')) {
                previousOutput.textContent += ' ' + input;
            } else {
                appendOutput(input + '\n');
            }


            userInput.value = '';
            continueExecution(input);
        }
    });

    function executeCode() {
        currentCode = codeEditor.getValue();
        outputDiv.innerHTML = '';
        inputArea.style.display = 'none';
        isWaitingForInput = false;
        previousInput = '';

        fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: currentCode, input: '' })
        })
            .then(response => response.json())
            .then(data => {
                if (data.output) appendOutput(data.output);
                if (data.status === 'error') {
                    appendOutput(`\n${data.error}\n`, 'error-text');
                    if (data.traceback) appendOutput(`${data.traceback}\n`, 'error-text');
                }

                if (data.status === 'waiting' || data.waiting_for_input) {
                    isWaitingForInput = true;
                    inputArea.style.display = 'flex';
                    userInput.focus();
                } else {
                    isWaitingForInput = false;
                    inputArea.style.display = 'none';

                    // ✅ Add this
                    const successDiv = document.createElement('div');
                    successDiv.className = 'execution-status success';
                    successDiv.textContent = '=== Code Execution Successful';
                    outputDiv.appendChild(successDiv);
                }
            })

            .catch(error => {
                appendOutput(`Error executing code: ${error.message}`, 'error-text');
            });
    }

    function continueExecution(input) {
        fetch('/api/continue_execution', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: currentCode,
                input: input,
                previous_input: previousInput
            })
        })
            .then(response => response.json())
            .then(data => {
                const newOutput = data.output?.slice(outputDiv.textContent.length) || '';
                if (newOutput) appendOutput(newOutput);
                previousInput = data.previous_input || '';

                if (data.status === 'error') {
                    appendOutput(`\n${data.error}\n`, 'error-text');
                    if (data.traceback) appendOutput(`${data.traceback}\n`, 'error-text');
                    isWaitingForInput = false;
                    inputArea.style.display = 'none';
                }

                if (data.status === 'waiting' || data.waiting_for_input) {
                    isWaitingForInput = true;
                    inputArea.style.display = 'flex';
                    userInput.focus();
                } else {
                    isWaitingForInput = false;
                    inputArea.style.display = 'none';

                    const successDiv = document.createElement('div');
                    successDiv.className = 'execution-status success';
                    successDiv.textContent = '=== Code Execution Successful';
                    outputDiv.appendChild(successDiv);
                }
            })
            .catch(error => {
                appendOutput(`\nError processing input: ${error.message}\n`, 'error-text');
                isWaitingForInput = false;
                inputArea.style.display = 'none';
            });
    }


    function appendOutput(text, className = '') {
        const lines = text.split('\n');
        lines.forEach((line) => {
            const div = document.createElement('div');
            div.textContent = line;
            if (className) {
                div.classList.add(className);
            }
            div.classList.add('fade-in');
            outputDiv.appendChild(div);
        });
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

});
