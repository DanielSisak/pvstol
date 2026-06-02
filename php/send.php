<?php
require_once __DIR__ . '/../includes/config.php';
function clean($v){return trim(str_replace(["\r","\n"],' ',filter_var($v,FILTER_SANITIZE_SPECIAL_CHARS)));}
if($_SERVER['REQUEST_METHOD']!=='POST'){http_response_code(405);exit('Method not allowed');}
if(!empty($_POST['website'])){exit('OK');}
if(empty($_POST['gdpr'])){http_response_code(400);exit('Chýba súhlas so spracovaním osobných údajov.');}
$name=clean($_POST['name']??'');$email=filter_var($_POST['email']??'',FILTER_VALIDATE_EMAIL);$phone=clean($_POST['phone']??'');$loc=clean($_POST['location']??'');$type=clean($_POST['type']??'');$msg=trim($_POST['message']??'');
if(!$name||!$email||!$msg){http_response_code(400);exit('Vyplňte povinné polia.');}
$subject='Nový dopyt z webu PVSTOL';
$body="Meno: $name\nEmail: $email\nTelefón: $phone\nLokalita: $loc\nTyp: $type\n\nSpráva:\n$msg\n";
$headers='From: '.$FROM_EMAIL."\r\n".'Reply-To: '.$email."\r\n".'Content-Type: text/plain; charset=UTF-8';
$ok=mail($TO_EMAIL,$subject,$body,$headers);
if($ok){ header('Location: /kontakt.html?odoslane=1'); exit; }
http_response_code(500); echo 'Email sa nepodarilo odoslať. Skontrolujte nastavenia hostingu.';
?>