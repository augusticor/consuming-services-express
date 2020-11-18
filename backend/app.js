'use strict';
const express = require('express');
const server = express();

server.set('appName', 'Sending data with nodeJS and express');
server.set('port', 3000);

server.use(express.static('../public'));
server.use(express.json());

let dogs = [
	{ name: 'Collie', age: 2 },
	{ name: 'Pastor Alemán', age: 2 },
	{ name: 'Lakeland Terrier', age: 2 },
	{ name: 'Pastor Belga', age: 2 },
	{ name: 'Pastor de Briard', age: 2 },
	{ name: 'Bernés de la Montaña', age: 2 },
	{ name: 'Bulldog Inglés', age: 2 },
	{ name: 'Mastín Inglés', age: 2 },
	{ name: 'RottWoiler', age: 2 },
	{ name: 'Antiguo Pastor Ingles', age: 1 },
	{ name: 'San Bernardo', age: 2 },
	{ name: 'Schanuzer Standard', age: 2 },
	{ name: 'Bull Terrier Inglés', age: 2 },
	{ name: 'Fox Terrier', age: 2 },
];

server.get('/dogs', (req, res) => {
	res.send(dogs);
});

server.post('/dogs', (req, res) => {
	let number = Math.floor(Math.random() * dogs.length);
	let dog = dogs[number];
	dogs.push(dog);
	res.send(dog);
});

server.listen(server.get('port'), () => {
	console.log(server.get('appName'));
	console.log(`Now Express JS is listening on port ${server.get('port')}`);
});
