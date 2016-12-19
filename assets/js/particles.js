const particleSize = 100;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasWidth = canvas.width = window.innerWidth * 2;
const canvasHeight = canvas.height = window.innerHeight * 2;
context.fillStyle = "#eee";

console.log("canvasWidth: ", canvasWidth);
console.log("canvasHeight: ", canvasHeight);

const particles = [];

for (let i = 0; i < 100; i++)
    particles.push({
        xPosition: Math.random() * canvasWidth,
        yPosition: Math.random() * canvasHeight,
        xVelocity: Math.random() * canvasWidth / 100 - canvasWidth / 200,
        yVelocity: Math.random() * canvasHeight / 100 - canvasHeight / 200,
    });

requestAnimationFrame(frame);

function frame() {
    requestAnimationFrame(frame);
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.beginPath();
    particles.forEach(function (p) {
        p.xPosition += p.xVelocity;
        p.yPosition += p.yVelocity;
        if (p.xPosition > canvasWidth)
            p.xPosition = -particleSize;
        if (p.yPosition > canvasHeight)
            p.yPosition = -particleSize;
        if (p.xPosition < -particleSize)
            p.xPosition = canvasWidth;
        if (p.yPosition < -particleSize)
            p.yPosition = canvasHeight;
        context.rect(p.xPosition, p.yPosition, particleSize, particleSize);
    });
    context.fill();
}