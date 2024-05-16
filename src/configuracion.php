<?php

require_once 'formulario/autoload.php';

// CONFIGURACION DE GOOGLE
$clientID = '514764690732-mn5tlnhrhniqeb8507em22spl68rcjk8.apps.googleusercontent.com';
$clientSecret = 'TU-SECRETO-DE-CLIENTE';
$redirectUri = 'http://localhost:4200/loginGoogle/perfil.php';

  // create Client Request to access Google API
  $client = new Google_Client();
  $client->setClientId($clientID);
  $client->setClientSecret($clientSecret);
  $client->setRedirectUri($redirectUri);
  $client->addScope("email");
  $client->addScope("profile");

?>