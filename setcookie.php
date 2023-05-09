<?php
$value = 'snifftegist';

setcookie("SniffTegist", $value);
setcookie("SniffTegist", $value, time()+60*60*24*30);  /* expire in 30 days */
setcookie("SniffTegist", $value, time()+60*60*24*30, "/", "snifftegist.com", 30);

// Print an individual cookie
echo $_COOKIE["SniffTegist"];

// Another way to debug/test is to view all cookies
print_r($_COOKIE);
?>

