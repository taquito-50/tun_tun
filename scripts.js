document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('options-container').style.display = 'block';
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('end-container').style.display = 'block';
});

function showPopup(optionText, imageUrl) {
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('popup-image').src = imageUrl;
    document.getElementById('popup-text').textContent = `Has elegido: ${optionText}`;
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('end-container').style.display = 'block';
}
