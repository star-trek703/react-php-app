<?php
include_once dirname(__FILE__).'/PHPMailer/class.phpmailer.php';
//include('../../../common/EmailConfig/configMail.php');
//include('../../common/constant.php');
         $mail = new PHPMailer(); // create a new object
         $mail->IsSMTP(); // enable SMTP
         $mail->Host = HOST;
         $mail->Port = PORT; // or 587
         $mail->SMTPAuth = true;

         $mail->Username = USERNAME;
         $mail->Password = PASSWORD;
         $mail->SMTPSecure = '';

         $mail->From = NOREPLY; 
         $mail->FromName = NOREPLY;
?>