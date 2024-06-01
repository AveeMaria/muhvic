console.log("zkj to beres?");

let statRefreshTime = 1000;

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