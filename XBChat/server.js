var initServer = function (Server) {
    var io = require('socket.io')(Server);
    var users = [];
    var arrSockets=[];

    io.on('connection', function (socket) {
        arrSockets.push(socket);
        socket.on('login', function (nickname) {
            if (users.indexOf(nickname) > -1) {
                socket.emit('nickExisted');
            } else {
                socket.nickname = nickname;
                users.push(nickname);
                socket.emit('loginSuccess');
                io.sockets.emit('system', nickname, users.length, 'login');
            };
        }); //user leaves
        socket.on('disconnect', function () {
            if (socket.nickname !== null) {
                //users.splice(socket.userIndex, 1);
                users.splice(users.indexOf(socket.nickname), 1);
                socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
            }
        });
        //new message get
        socket.on('postMsg', function (msg, color) {
            socket.emit('newMsg', socket.nickname, msg, color);
        });
        //new image get
        socket.on('img', function (imgData, color) {
            socket.emit('newImg', socket.nickname, imgData, color);
        });
        socket.on('disconnect',function(){
            console.log("user disconnect")
        });
    });
   
}
module.exports = initServer;