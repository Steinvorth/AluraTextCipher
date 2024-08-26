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

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar: ', err);
    });
}

document.querySelector('.encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const encryptedText = encrypt(inputText);

    // Update the right panel with the encrypted text and add a copy button
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
        <div id="result-container">
            <p id="result-text">${encryptedText}</p>
            <button id="copy-btn">Copiar</button>
        </div>
    `;

    // Add event listener to the copy button
    document.getElementById('copy-btn').addEventListener('click', function() {
        copyToClipboard(encryptedText);
    });
});

document.querySelector('.decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const decryptedText = decrypt(inputText);

    // Update the right panel with the decrypted text and add a copy button
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
        <div id="result-container">
            <p id="result-text">${decryptedText}</p>
            <button id="copy-btn">Copiar</button>
        </div>
    `;

    // Add event listener to the copy button
    document.getElementById('copy-btn').addEventListener('click', function() {
        copyToClipboard(decryptedText);
    });
});
