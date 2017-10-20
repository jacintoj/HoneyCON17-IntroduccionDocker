const socket = require(`zmq`).socket(`push`);
const address = process.env.ZMQ_BIND_ADDRESS || `tcp://*:9000`;

var i = 0;
console.log(`Escuchando en ${address}`);
socket.bindSync(address);

const sendMessage = function () {
	const message = `Hola #'${i++}!'`;
	console.log(`Enviando '${message}'`);
	socket.send(message);
};

setInterval(sendMessage, 2000);
