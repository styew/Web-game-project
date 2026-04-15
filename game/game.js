
//When loading the website, it will store the meteors in a list
document.addEventListener("DOMContentLoaded", () => {
    const rocket = document.getElementById("spaceship");
    const rocks = [
        document.getElementById("meteor1"),
        document.getElementById("meteor2"),
        document.getElementById("meteor3"),
        document.getElementById("meteor4"),
        document.getElementById("meteor5")
    ];
    let shipLeft = 50; // initial position of the ship
    let gameActive = false;
    let intervals = [];

//the function will position the rocket 
//inside the div and the meteors randomly. the function changes the style
    function initializeGame() {
        rocket.style.left = shipLeft + '%';
        rocket.style.top = '90%'; // initial position of the rocket
        rocket.src = "../sprit/neutro_1.png";

        rocks.forEach(rock => {
            rock.style.top = "0%";
            rock_random(rock);
        });
    }
//the function through style, change 
//the position of the ship according to the keys clicked
    function moveRocket(event) {
        if (gameActive) {
            if (event.key === 'ArrowLeft' && shipLeft > 0) {
                shipLeft -= 0.5;
            } else if (event.key === 'ArrowRight' && shipLeft < 95) {
                shipLeft += 0.5;
            }
            rocket.style.left = shipLeft + '%';
        }
    }
//the function starts the game if the player clicks on the space
//It changes the game key to activate, allowing the use 
//of other functions and activates the positioning of meteors
    function startGame() {
        gameActive = true;
        document.addEventListener('keydown', moveRocket);
        rocks.forEach(rock => moveRock(rock));
    }

//moves the meteors from top to bottom, changing their positioning style. 
//If they go beyond the screen limit, 
//they will be repositioned in a new direction and will fall again.

    function moveRock(rock) {
        document.getElementById("text_start").style.display = "none"
        let startpoint = 0; // init of meteors
        const interval = setInterval(() => {
            if (!gameActive) {
                clearInterval(interval);
                return;
            }
            startpoint += 2;
            rock.style.top = startpoint + "%";
            checkCollision(rocket, rock);
            if (startpoint > 100) {
                startpoint = -Math.random() * 50;
                rock_random(rock);
            }
        }, 100);
        intervals.push(interval);
    }

    function rock_random(rock) {
        var x_position = Math.floor(Math.random() * 100);
        rock.style.left = x_position + "%";
    }

//the function calculates whether there was a collision with the ship and 
//the meteors, if so, it calls the gameover() function
    function checkCollision(rocket, rock) {
        const rocketRect = rocket.getBoundingClientRect();
        const rockRect = rock.getBoundingClientRect();

        if (
            rocketRect.left < rockRect.right &&
            rocketRect.right > rockRect.left &&
            rocketRect.top < rockRect.bottom &&
            rocketRect.bottom > rockRect.top
        ) {
            // Colisão detectada
            gameOver();
        }
    }

//The function deactivates and stops the game. It calls a game end 
//alert and restarts the game. Returning to the initial settings.

    function gameOver() {
        gameActive = false;
        intervals.forEach(interval => clearInterval(interval));
        alert("Game Over! Click OK to restart.");
        document.removeEventListener('keydown', moveRocket);
        document.getElementById("text_start").style.display = "block"
        initializeGame();
    }

//Here is the code to activate the entire game. If you click on the space bar, 
//the game starts. From then on, all the functions mentioned above will be used 
//until the game over arrives.

    document.addEventListener('keydown', (event) => {
        if (event.key === ' ' && !gameActive) {
            startGame();
        }
    });

    // initialize positions on load
    initializeGame();
});
