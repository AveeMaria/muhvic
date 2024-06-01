<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// nek da nejoka za neke permisione? idk iskreno
header("Permissions-Policy: geolocation=(), microphone=(), camera=(), interest-cohort=()");

$output = shell_exec('landscape-sysinfo 2>&1');
if (isset($output)) {
    $lines = explode("\n", $output);

    foreach ($lines as $line) {
        if (strpos($line, 'Temperature') !== false ||
            strpos($line, 'Usage of /') !== false ||
            strpos($line, 'Memory usage') !== false ||
            strpos($line, 'Users logged in') !== false ||
            strpos($line, 'System load') !== false) {
            echo $line . "<br>\n";
        }
    }
} else {
    echo "Command execution failed.";
}
?>