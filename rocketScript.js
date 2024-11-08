// Get the canvas and the 2D context
const canvas = document.getElementById('rocketCanvas');
const ctx = canvas.getContext('2d');

// Set initial rocket position
let rocketY = canvas.height - 100;
let countdown = 10;
let countdownInterval;

// Create a rocket shape instead of using an image (a simple triangle for the rocket body)
function drawRocket() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    // Draw rocket body (a simple triangle for the rocket)
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, rocketY);  // Bottom center of the rocket
    ctx.lineTo(canvas.width / 2 - 30, rocketY - 60);  // Top left of the rocket
    ctx.lineTo(canvas.width / 2 + 30, rocketY - 60);  // Top right of the rocket
    ctx.closePath();
    ctx.fill();

    // Draw rocket flame (a simple triangle for the flame)
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, rocketY + 20);  // Bottom center of the flame
    ctx.lineTo(canvas.width / 2 - 20, rocketY + 50);  // Left flame
    ctx.lineTo(canvas.width / 2 + 20, rocketY + 50);  // Right flame
    ctx.closePath();
    ctx.fill();
}

// Start the countdown timer
function startCountdown() {
    document.getElementById('countdown').textContent = countdown;  // Display countdown
    countdownInterval = setInterval(function() {
        countdown--;
        document.getElementById('countdown').textContent = countdown;  // Update countdown display
        if (countdown <= 0) {
            clearInterval(countdownInterval);  // Stop countdown
            startBlastOff();  // Begin rocket animation
        }
    }, 1000);  // Update every second
}

// Start rocket blast-off animation
function startBlastOff() {
    let blastOffInterval = setInterval(function() {
        rocketY -= 10;  // Move the rocket up
        if (rocketY <= -200) {
            clearInterval(blastOffInterval);  // Stop the rocket when it moves off screen
        }
        drawRocket();  // Redraw rocket at new position
    }, 50);  // Update rocket position every 50ms
}

// Handle start button click
document.getElementById('startButton').addEventListener('click', function() {
    rocketY = canvas.height - 100;  // Reset rocket to starting position
    countdown = 10;  // Reset countdown
    document.getElementById('countdown').textContent = countdown;  // Display countdown
    startCountdown();  // Start countdown
});
