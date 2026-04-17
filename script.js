// Typing Animation
const text = "B.Tech CSE Student | Web Developer | IoT Enthusiast";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

// Background Gaming Effect (moving dots)
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 1
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.y += p.speed;

        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = "#00ffcc";
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(animate);
}

animate();