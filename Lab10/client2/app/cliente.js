const socket = require(`zmq`).socket(`pull`);
const address = process.env.ZMQ_PUB_ADDRESS_SWEETIE;

var redis = require(`redis`);
var clientRedis = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

console.log(`Conectando a ${address}`);
socket.connect(address);

var cont = 0;
socket.on(`message`, function (msg) {
	console.log(`Message received: ${msg}`);
	cont++;
	if(cont % 7 == 0) {
		clientRedis.hgetall('Vegeta', function(err, object) {
		if(err) {
			console.log('Error: '+ err);
			throw err;
  		}
    		console.log('Vegeta -> ');
		console.log(object);
		});
	}
});
