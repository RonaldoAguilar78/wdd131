const stageData = {
    "12": {
        title: "Week 12: The Turning Point",
        image: "images/12week.jpg",
        trimester: "FIRST TRIMESTER",
        size: "Size of a Lime",
        development: "The baby's reflexes are starting to develop. If you poke the belly, the baby might move (though Mom can't feel it yet!). Vital organs are fully formed and starting to function.",
        tasks: [
            "Help with the 'Morning Sickness'—keep the house smelling neutral.",
            "Discuss the 'Announcement'—who are you telling first?",
            "Drink water! Encourage her to stay hydrated."
        ]
    },
    "26": {
        title: "Week 26: Making Waves",
        image: "images/26week.jpg",
        trimester: "SECOND TRIMESTER",
        size: "Size of a Scallion",
        development: "The baby's eyes are starting to open and they can respond to light. Their lungs are inhaling amniotic fluid to practice for breathing air.",
        tasks: [
            "Start the nursery projects. It's easier to paint now than in 10 weeks!",
            "Talk to the baby. They can hear your voice clearly now.",
            "Massages. Her back and feet are likely starting to ache."
        ]
    },
    "40": {
        title: "Week 40: The Grand Finale",
        image: "images/40week.jpg",
        trimester: "THIRD TRIMESTER",
        size: "Size of a Small Pumpkin",
        development: "The baby is fully developed and just putting on finishing touches of fat. They are likely 'dropped' lower in the pelvis, preparing for the exit.",
        tasks: [
            "Keep the car gas tank full at all times.",
            "Install the car seat. Don't wait until the last minute!",
            "Be the gatekeeper. Help manage calls from eager relatives."
        ]
    }
};

function loadStageDetails() {
    // 1. Get the week number from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const week = urlParams.get('week');

    const data = stageData[week];

    if (data) {
        // 2. Update the HTML elements
        document.getElementById('stageTitle').textContent = data.title;
        document.getElementById('stageImage').src = data.image;
        document.getElementById('stageImage').alt = data.title;
        document.getElementById('trimesterLabel').textContent = data.trimester;
        document.getElementById('sizeComparison').textContent = `Size: ${data.size}`;
        document.getElementById('developmentText').textContent = data.development;

        // 3. Update the Dad's List
        const listContainer = document.getElementById('dadList');
        listContainer.innerHTML = ""; // Clear old items
        data.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            listContainer.appendChild(li);
        });
    } else {
        // Handle case where week isn't found
        document.getElementById('stageTitle').textContent = "Stage Not Found";
    }
}

window.addEventListener('DOMContentLoaded', loadStageDetails);