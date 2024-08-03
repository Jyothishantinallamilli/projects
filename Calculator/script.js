function appendToDisplay(value) {
    document.getElementById('input').innerText += value;
}
function clearDisplay() {
    document.getElementById('input').innerText = '';
}
function calculateResult() {
    try {
        const result = eval(document.getElementById('input').textContent);
        document.getElementById('input').textContent = result;
    } catch (error) {
        document.getElementById('input').textContent = 'Error';
    }
}
function toggleSign() {
    const display = document.getElementById('input');
    if (display.textContent) {
        if (display.textContent.startsWith('-')) {
            display.textContent = display.textContent.substring(1);
        } else {
            display.textContent = '-' + display.textContent;
        }
    }
}
function backspace() {
    const display = document.getElementById('input');
    display.textContent = display.textContent.slice(0, -1);
}