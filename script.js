function generateMeme() {
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    const imageInput = document.getElementById('imageInput');
    const topText = document.getElementById('topText').value.toUpperCase();
    const bottomText = document.getElementById('bottomText').value.toUpperCase();

    // Load image from input
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            // Set canvas size to image size
            canvas.width = img.width;
            canvas.height = img.height;
            // Draw the image
            ctx.drawImage(img, 0, 0);
            // Set text style
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.textAlign = 'center';
            ctx.lineWidth = 2;
            ctx.font = '40px Arial';
            // Draw text
            ctx.fillText(topText, canvas.width / 2, 50);
            ctx.strokeText(topText, canvas.width / 2, 50);
            ctx.fillText(bottomText, canvas.width / 2, canvas.height - 10);
            ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 10);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(imageInput.files[0]);
}
