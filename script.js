// ========================================
// ECOLIFE - GREEN & CLEAN TECHNOLOGY
// ========================================


// ----------------------------------------
// 1. GREEN SCORE
// ----------------------------------------

let greenScore = 0;

const scoreElement = document.getElementById("score");

if (scoreElement) {
    scoreElement.innerText = greenScore;
}


// ----------------------------------------
// 2. CARBON FOOTPRINT CALCULATOR
// ----------------------------------------

function calculateCarbon() {

    let carKm = Number(document.getElementById("carKm").value);
    let electricity = Number(document.getElementById("electricity").value);
    let flights = Number(document.getElementById("flights").value);

    // Empty values become 0
    if (isNaN(carKm)) carKm = 0;
    if (isNaN(electricity)) electricity = 0;
    if (isNaN(flights)) flights = 0;

    // Check whether user entered anything
    if (carKm === 0 && electricity === 0 && flights === 0) {

        document.getElementById("carbonResult").innerHTML =
            "⚠️ Please enter at least one value.";

        return;
    }

    // Simplified educational calculation
    let carEmission = carKm * 30 * 0.21;

    let electricityEmission = electricity * 0.70;

    let flightEmission = flights * 250 / 12;

    let totalEmission =
        carEmission +
        electricityEmission +
        flightEmission;


    document.getElementById("carbonResult").innerHTML =
        "🌍 Your estimated monthly carbon footprint is " +
        "<strong>" +
        totalEmission.toFixed(1) +
        " kg CO₂</strong>";
}


// ----------------------------------------
// 3. COMPLETE ECO CHALLENGE
// ----------------------------------------

function completeChallenge(button, points) {

    // Prevent clicking the same challenge twice
    if (button.classList.contains("completed")) {
        return;
    }

    greenScore = greenScore + points;

    // Update score
    document.getElementById("score").innerText =
        greenScore;

    // Change button
    button.innerText = "✓ Completed";

    button.classList.add("completed");

    // Add small effect
    document.getElementById("score").style.transform =
        "scale(1.2)";

    setTimeout(function () {

        document.getElementById("score").style.transform =
            "scale(1)";

    }, 300);
}


// ----------------------------------------
// 4. MOBILE MENU
// ----------------------------------------

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "70px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.padding = "20px";

        nav.style.background = "white";

        nav.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.1)";
    }
}


// ----------------------------------------
// 5. NAVIGATION
// ----------------------------------------

const navigationLinks =
    document.querySelectorAll(".navbar nav a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth <= 700) {

            document.querySelector(".navbar nav").style.display =
                "none";
        }

    });

});


// ----------------------------------------
// 6. CONSOLE MESSAGE
// ----------------------------------------

console.log(
    "🌱 EcoLife JavaScript loaded successfully!"
);