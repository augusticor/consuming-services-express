'use strict';

const btnAdd = document.querySelector('.add');
const btnList = document.querySelector('.list');
const list = document.querySelector('.list-article');

btnAdd.addEventListener('click', createNewDog);
btnList.addEventListener('click', listDogs);

function createNewDog() {
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
}

function listDogs() {
	fetch('/dogs')
		.then((response) => response.json())
		.then((data) => {
			for (let dog of data) {
				let h3 = document.createElement('h3');
				h3.textContent = dog.name;
				list.appendChild(h3);
			}
		});
}
