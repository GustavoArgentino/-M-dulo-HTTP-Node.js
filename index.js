 
var http = require('http');
var dt = require('./myloginmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.myDateTime() + ("<br><br>")); 
  res.write("<center>" + "Deseja fazer login como?" + "<br><br>");
  res.write("<center>" + "Medico" + "<br><br>");
  res.write("<center>" + "Paciente" + "<br><br>");
  res.write("<center>" + "Administrador" + "<br><br>");
  res.end();
}).listen(8010);



