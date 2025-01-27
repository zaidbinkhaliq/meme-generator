document.getElementById('generateBtn').addEventListener('click', function() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];
    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            drawImageWithText(img);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

function drawImageWithText(img) {
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const topText = document.getElementById('topText').value.toUpperCase();
    const bottomText = document.getElementById('bottomText').value.toUpperCase();

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';
    ctx.lineWidth = 2;
    ctx.font = '40px Impact';

    ctx.textBaseline = 'top';
    ctx.fillText(topText, canvas.width / 2, 10);
    ctx.strokeText(topText, canvas.width / 2, 10);

    ctx.textBaseline = 'bottom';
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 10);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 10);
}
