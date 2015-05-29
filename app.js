var express = require('express');

var app = express();
var respuesta,texto;
app.get('/preguntas',function(req,res){
  res.sendFile(__dirname+'/preguntas.html');
});

app.get('/respuesta',function(req,res){

  respuesta = req.query.respuesta
  if(req.query.id === '1'){
    if(respuesta === 'cristobal colon'){
      texto = 'Tu respuesta es correcta';
    }else{
      texto = 'Tu respuesta es incorrecta, quien descubrio a america fue cristobal colon';
    }
  }else{ // ID 2
    if(respuesta === 'lisboa'){
      texto = 'Tu respuesta es correcta';
    }else{
      texto = 'Tu respuesta es incorrecta, la capital de portugal es lisboa';
    }
  }

  res.send(
    '<!DOCTYPE html>'
    +'<html>'
    +'<head>'
    +'	<meta charset="UTF-8">'
    +'	<title>Preguntas</title>'
    +'</head>'
    +'<body>'
    +texto
    +'</br><a href="/Preguntas">Volver a la página inicial</a>'
    +'</body>'
    +'</html>'
  );

});

app.get('/*',function(req,res){
  res.send('URL Inválida');
});

// Se asocia al puerto 8000 para que escuche en el
app.listen(8000);
