const bodyE1 = document.querySelector("body");
let lastTime = 0;
let balloonCount = 0;
const maxBalloons = 40;
const popSound = new Audio('/Sounds/567087__lem120__4-pop-in-a-row.wav'); // Ensure this path is correct

bodyE1.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const currentTime = new Date().getTime();

    // Control balloon creation rate, limit balloon creation every 80ms
    if (currentTime - lastTime < 80) return;
    lastTime = currentTime;

    // Limit the number of balloons
    if (balloonCount >= maxBalloons) return;

    // Create balloon element
    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";

    // Set random size for the balloon
    const size = Math.random() * 100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";

    // Set random rotation for the balloon
    const rotation = Math.random() * 360;
    spanE1.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

    // Apply a random hue rotation
    const hueRotation = Math.random() * 360;
    spanE1.style.filter = `hue-rotate(${hueRotation}deg)`;

    spanE1.classList.add("ballon");

    // Add the balloon to the body
    bodyE1.appendChild(spanE1);

    // Play pop sound
    popSound.currentTime = 0; // Reset sound to start
    popSound.play().catch(error => {
        console.error("Sound could not be played:", error);
    });

    balloonCount++; // Increment balloon count

    // Start fading the balloon out after 2 seconds
    setTimeout(() => {
        spanE1.style.opacity = "0";
    }, 2000);

    // Remove the balloon from the DOM and decrease the count after it fades out
    setTimeout(() => {
        spanE1.remove();
        balloonCount--; // Decrement balloon count
    }, 2500); // Remove after 2.5 seconds
});
