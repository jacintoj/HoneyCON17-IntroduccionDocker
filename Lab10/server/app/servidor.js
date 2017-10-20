const socketHi = require(`zmq`).socket(`push`);
const socketSweetie = require(`zmq`).socket(`push`);
const addressHi = process.env.ZMQ_BIND_ADDRESS_HI;
const addressSweetie = process.env.ZMQ_BIND_ADDRESS_SWEETIE;

var redis = require(`redis`);
var clientRedis = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

clientRedis.on('ready',function() {
 console.log("Redis OK");
});

clientRedis.on('error',function(err) {
 console.log("Error Redis " + err);
});


var i = 1;
var j = 1;
console.log(`Escuchando en ${addressHi}`);
socketHi.bindSync(addressHi);

console.log(`Escuchando en ${addressSweetie}`);
socketSweetie.bindSync(addressSweetie);

// Guardamos en Redis a Goku y Vegeta
clientRedis.hmset('Goku', 'raza', 'Saiyan', 'poder', 1000000, function(err, reply) {
  if(err) {
	console.log('Error: '+ err);
	throw err;
  }
  console.log(reply + ' Goku stored');
});

clientRedis.hmset('Vegeta', 'raza', 'Saiyan', 'poder', 999900, function(err, reply) {
  if(err) {
	console.log('Error: '+ err);
	throw err;
  }
  console.log(reply + ' Vegeta stored');
});

const sendMessages = function () {
	var messageHi = `Hola #'${i++}!'`;
	console.log(`Enviando '${messageHi}'`);
	socketHi.send(messageHi);

	var messageSweetie = `Hola Sweetie #'${j++}!'`;
	console.log(`Enviando '${messageSweetie}'`);
	socketSweetie.send(messageSweetie);
};

setInterval(sendMessages, 2000);
