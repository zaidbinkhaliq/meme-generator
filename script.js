document.getElementById('generateBtn').addEventListener('click', function () {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];
    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            drawImageWithText(img);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

function drawImageWithText(img) {
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to match image size
    canvas.width = img.width;
    canvas.height = img.height;

    // Clear the canvas and draw the image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const topText = document.getElementById('topText').value.toUpperCase();
    const bottomText = document.getElementById('bottomText').value.toUpperCase();

    // Calculate font size based on canvas width
    const fontSize = Math.floor(canvas.width / 10); // Adjust text size dynamically
    ctx.font = `${fontSize}px Impact`;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';
    ctx.lineWidth = Math.floor(fontSize / 8); // Adjust outline thickness dynamically

    // Draw top text
    ctx.textBaseline = 'top';
    ctx.fillText(topText, canvas.width / 2, 10);
    ctx.strokeText(topText, canvas.width / 2, 10);

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 10);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 10);
}
