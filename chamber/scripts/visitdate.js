const msToDays = 84600000;
const theDateToday = Date.now();
const visitsDisplay = document.querySelector("#visitDate");

let lastVisitDate = Date(window.localStorage.getItem("lastVisitDate-ls"));
let lastVisitDateDays = Math.round((theDateToday - lastVisitDate) / msToDays);

if (lastVisitDate == null) {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else if (lastVisitDateDays >= 1) {
    visitsDisplay.textContent = `You last visited ` + lastVisitDateDays + ` days ago.`;
} else {
    visitsDisplay.textContent = `Back so soon! Awesome!`;
}

lastVisitDate = theDateToday;

localStorage.setItem("lastVisitDate-ls", lastVisitDate);
