/*console.log("zkj to beres?");

const {
    exec
}

    = require('child_process');

exec('landscape-sysinfo', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    let systemInfoElement = document.getElementById('systeminfo');
    systemInfoElement.textContent = stdout;
});*/

function DisplayServerStats() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'PHP/sysinfo.php', true);
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