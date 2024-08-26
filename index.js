function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

// function to use button to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log("copiado!")
    }, function(err) {
        console.error('Error al copiar: ', err);
    });
}

document.querySelector('.encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const encryptedText = encrypt(inputText);

    // Update Right Panel with copy button
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
        <div id="result-container">
            <p id="result-text">${encryptedText}</p>
            <button id="copy-btn">Copiar</button>
        </div>
    `;

    // After its added, we can add the alert.
    document.getElementById('copy-btn').addEventListener('click', function() {
        copyToClipboard(encryptedText);
    });
});

document.querySelector('.decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const decryptedText = decrypt(inputText);

    // Update right panel with the text, and add copy button
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
        <div id="result-container">
            <p id="result-text">${decryptedText}</p>
            <button id="copy-btn">Copiar</button>
        </div>
    `;

    // After its added, we can add the alert.
    document.getElementById('copy-btn').addEventListener('click', function() {
        copyToClipboard(decryptedText);
    });
});
