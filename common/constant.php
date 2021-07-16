<?php

//always use these constants to store the current date & time.
date_default_timezone_set('Asia/Kolkata');

define("CURRENTTIME", date('Y-m-d H:i:s'));
define("CURRENTDATE", date('Y-m-d'));

//to be used when you need the URL path:
$serverPath = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";

define("LOCAL_IMAGE_PATH", $serverPath);
//if you want to add a folder name for temporary purpose then you can do this: define("LOCAL_IMAGE_PATH", $serverPath.'folderName');   concat the name
define("SERVERPATHS", $serverPath);


//to be used only when the project has mail sending facility otherwise delete it
define("HOST","mail.studyleagueit.com");
define("PORT",25);
define("USERNAME","testing@studyleagueit.com");
define("PASSWORD","123456789");
define("NOREPLY","testing@studyleagueit.com");



?>