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

app.listen(3000, ()=> console.log("servidor corriendo"))