const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))



app.get('/', function(req, res){
	res.sendFile(path.join(__dirname,'./views/index.html'))
	
})
app.get('/visitas', function(req, res){
	res.sendFile(path.join(__dirname,'./views/visitas.html'))
	
})

app.get('/ofertas', function(req, res){
	res.sendFile(path.join(__dirname,'./views/ofertas.html'))
	
})

app.get('/register', function(req, res){
	res.sendFile(path.join(__dirname,'./views/register.html'))
	
})

app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname,'./views/login.html'))
	
})

app.post('/resultadoRegister', function(req, res){
	res.redirect('./')
	
})

app.post('/resultadoLogin', function(req, res){
	res.redirect('./')
	
})

app.post('/resultadoSearch', function(req, res){
	res.redirect('./')
	
});


/**  Este cambio es para Heroku
app.listen(3000, ()=> console.log("Servidor corriendo en puerto 3000.")) */
 
app.listen(process.env.PORT || 3000, function(){
	console.log('Servidor corriendo en el puerto 3000.')
})
