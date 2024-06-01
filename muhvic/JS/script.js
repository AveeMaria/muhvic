console.log("zkj to beres?");

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