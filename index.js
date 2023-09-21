 
var http = require('http');
var dt = require('./myloginmodule');

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(dt.myDateTime() + ("<br><br>")); 

res.write('<!DOCTYPE html>'+
'<html lang="en" dir="ltr">'+
'<head>'+
'<meta charset="utf-8">'+
'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
'<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
'<title>Tela de login 1'+
'</title>'+
'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">'+
'<link rel="stylesheet" href="styles.css">'+
''+
'</head>'+
''+
'<body class="corpo">'+
'<html>'+
'<img src="https://raw.githubusercontent.com/VictorCalori/aula0703.github.io/main/logo.png-removebg-preview%20(1).png" width="380" height="120">'+
'<head>'+
'</head>'+
'<body>'+
'<center><div class="imagem">'+
'<img src="https://raw.githubusercontent.com/VictorCalori/aula0703.github.io/main/download%20(1).png" width="160" height="161" />'+
'</div></center>'+
'<div class="entrar">'+
'<center><h1 style="font-style: monospace;">Entrar como:</h1></center>'+
'</div>'+
'<div class="button">'+
'<div>'+
'<center><button class="paciente"style="font-size: 30PX; background-color: #00a6fb;color: white"> <img src="https://raw.githubusercontent.com/VictorCalori/aula0703.github.io/main/3337584-foto-avatar-padrao-placeholder-perfil-icone-vetor.jpg" width="45" height="45" id="img-1">paciente</button></center>'+
'<br>'+
'</div>'+
'<div class="medico">'+
'<center><button class="medico"style="font-size: 30px;background-color: #00a6fb;color: white"> <img src="https://raw.githubusercontent.com/VictorCalori/aula0703.github.io/main/3337584-foto-avatar-padrao-placeholder-perfil-icone-vetor.jpg" height="45" id="img-1">Médico</button></center>'+
'<br>'+
'</div>'+
'<div class="administrador">'+
'<center><button class="administrador"style="font-size: 30px;background-color: #00a6fb ;color: white;"><img src="https://raw.githubusercontent.com/VictorCalori/aula0703.github.io/main/3337584-foto-avatar-padrao-placeholder-perfil-icone-vetor.jpg" width="45" height="45" id="img-1">Administrador</button></center>'+
'</div>'+
'</div>'+
'</div>'+
'<footer>'+
'<b>Todos os direitos reservados©2023</b>'+
'</footer>'+
'</html>'+
''+
''+
'</body>');
  res.end();
}).listen(8010);




