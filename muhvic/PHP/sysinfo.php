<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$output = shell_exec('landscape-sysinfo 2>&1');
if (isset($output)) {
    // Split the output into lines
    $lines = explode("\n", $output);

    // Loop over each line
    foreach ($lines as $line) {
        // If the line contains one of the keywords, echo it
        if (strpos($line, 'Temperature') !== false ||
            strpos($line, 'Usage of /') !== false ||
            strpos($line, 'Memory usage') !== false ||
            strpos($line, 'Users logged in') !== false) {
            echo $line . "\n";
            echo "\n";
        }
    }
} else {
    echo "Command execution failed.";
}
?>
