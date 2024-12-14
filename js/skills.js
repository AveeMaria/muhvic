async function loadSkills() {
    try {
        const response = await fetch(window.location.href + '/json/skills.json');
        const skills = await response.json();

        const skillList = document.getElementById("skills-list");
        shuffleArray(skills);//every day we shuffelin

        if (!skills) {
            console.log("Skill issue.\n");
        }

        console.log(skills);

        skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill.name;

            switch (skill.level) {
                case 0:
                    li.classList.add("g0");
                    break;
                case 1:
                    li.classList.add("g1");
                    break;
                case 2:
                    li.classList.add("g2");
                    break;
                case 3:
                    li.classList.add("g3");
                    break;
                case 4:
                    li.classList.add("g4");
                    break;
                case 5:
                    li.classList.add("g5");
                    break;
                case 6:
                    li.classList.add("g6");
                    break;
                default:
                    li.classList.add("g0");
            }

            skillList.appendChild(li);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

loadSkills();
