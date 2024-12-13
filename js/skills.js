async function loadSkills() {
    try {
        const response = await fetch(window.location.href + '/json/skills.json');
        const skills = await response.json();

        const skillList = document.getElementById("skills-list");
        shuffleArray(skills);

        if (!skills) {
            console.log("Skill issue.\n");
        }

        console.log(skills);

        skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill.name;

            switch (skill.level) {
                case 1:
                    li.classList.add("lvl1");
                    break;
                case 2:
                    li.classList.add("lvl2");
                    break;
                case 3:
                    li.classList.add("lvl3");
                    break;
                case 4:
                    li.classList.add("lvl4");
                    break;
                case 5:
                    li.classList.add("lvl5");
                    break;
                default:
                    li.classList.add("lvl1");
            }

            skillList.appendChild(li);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

loadSkills();
