// pregnancystages.js

document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "By week 6, your baby’s heart is already beating.",
        "Pregnant women may need up to 300 extra calories per day.",
        "Morning sickness can actually happen at any time of day.",
        "By the second trimester, many moms-to-be feel a surge of energy.",
        "Babies can start hearing sounds around week 18–20.",
        "Skin changes like the 'pregnancy glow' are caused by increased blood flow.",
        "Partners who stay involved help reduce stress for moms during pregnancy."
    ];

    const adviceTips = [
        "Offer to handle chores — small actions mean a lot.",
        "Attend doctor visits together to show support.",
        "Learn about each trimester so you can anticipate her needs.",
        "Encourage rest and relaxation whenever possible.",
        "Be patient — emotional ups and downs are normal."
    ];

    // Pick a random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("randomFact").textContent = randomFact;

    // Pick a random dad advice
    const randomAdvice = adviceTips[Math.floor(Math.random() * adviceTips.length)];
    document.getElementById("adviceText").textContent = randomAdvice;
});
