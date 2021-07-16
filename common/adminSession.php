<?php 

include_once 'constant.php';

session_start();
if(!(isset($_SESSION['session_ap']) && $_SESSION['session_ap']!="")){
	header("Location:../QwertyAsdf/signin.php");
	exit(0);
}



 
?>