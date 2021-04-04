const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: {
        origin: "*"
    }
})
app.set('view engine', 'ejs')
app.get('/home',(req, res)=>{
    res.render('home')
})

io.on('connection',(socket) =>{console.log(socket.id)

socket.on('message',(data)=>{
    socket.broadcast.emit('message',data);
});
})

server.listen(3000,()=>{console.log('listening on 3000')})