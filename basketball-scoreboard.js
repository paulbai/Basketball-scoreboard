let homeScore = 0;
let guestScore = 0;

function updateHomeScore(score) {
    homeScore += score;
    document.querySelector(".homeScore").textContent = homeScore;
}


function addHome1() {
    updateHomeScore(1);
}

function addHome2() {
    updateHomeScore(2);
}

function addHome3() {
    updateHomeScore(3);
}

function updateGuestScore(score) {
    guestScore += score;
    document.querySelector(".guestScore").textContent = guestScore;
}

function addGuest1() {
    updateGuestScore(1);
}

function addGuest2() {
    updateGuestScore(2);
}

function addGuest3() {
    updateGuestScore(3);
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    document.querySelector(".homeScore").textContent = homeScore;
    document.querySelector(".guestScore").textContent = guestScore;
}


