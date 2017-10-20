const socket = require(`zmq`).socket(`pull`);
const address = process.env.ZMQ_PUB_ADDRESS || `tcp://127.0.0.1:9000`;

console.log(`Conectando a ${address}`);
socket.connect(address);

socket.on(`message`, function (msg) {
	console.log(`Message received: ${msg}`);
});
