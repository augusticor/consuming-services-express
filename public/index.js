'use strict';

const btnAdd = document.querySelector('.add');
const btnList = document.querySelector('.list');
const list = document.querySelector('.list-article');

btnAdd.addEventListener('onClick', createNewDog);

const createNewDog = () => {
	const options = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
	};

	let dog = document.createElement('h3');

	fetch('/dogs', options)
		.then((response) => response.json())
		.then((data) => {
			dog.textContent = data.name;
			list.appendChild(dog);
		});
};

const listDogs = () => {
	fetch('/dogs')
		.then((response) => response.json())
		.then((data) => {
			for (let dog of data[0]) {
				let h3 = document.createElement('h3');
				h3.textContent = dog.name;
				list.appendChild(h3);
			}
		});
};
