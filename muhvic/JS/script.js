console.log("zkj to beres?");

let statRefreshTime = 1000;
let eng = true;

setInterval(DisplayServerStats, statRefreshTime);

//pokaze ce streznik gori
function DisplayServerStats() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../PHP/sysinfo.php', true);
    xhr.onload = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById('systeminfo').innerHTML = xhr.responseText;
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };
    xhr.onerror = function () {
        console.error('Request failed');
    };
    xhr.send();
}

//displaya fake statse med body-ondload da se ne opaz delaya od commanda
function DisplayFakeServerStats() {
    //izjemno smesne stevilke, vem
    const systemInfo = `
        System load: 0.69 Temperature: 69.0 C<br>
        Usage of /: 69.69% of 420.69GB Processes: 420<br>
        Memory usage: 69% Users logged in: 420
    `;

    const systemInfoDiv = document.getElementById('systeminfo');

    systemInfoDiv.innerHTML = systemInfo;
}

function changeLangImage() {
    let imageElement = document.getElementById('language_flag');
    if (!eng) {
        //console.log("slo->eng\n");
        imageElement.src = 'assets/en.png';
        eng = !eng;
    }
    else {
        //console.log("eng->slo\n");
        imageElement.src = 'assets/si.png';
        eng = !eng;
    }
}

const languageflag = document.getElementById('language_flag');
// fake gumb!!!
languageflag.addEventListener('click', changeLangImage);

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });

    const languageFlag = document.getElementById('language_flag');

    if (languageFlag.src.includes('si.png')) {
        languageFlag.src = 'assets/en.png';
    }
    else {
        languageFlag.src = 'assets/si.png';
    }
}