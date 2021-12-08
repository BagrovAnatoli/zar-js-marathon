//Task #0
const player1 = {
	name: 'Liucang',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
	weapon: ['dagger', 'sword', 'mace'],
	attack: function getMessage() {
		console.log(player1.name + ' Fight...');
	}
};
const player2 = {
	name: 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['fist', 'cudgel', 'nunchucks'],
	attack: function getMessage() {
		console.log(player2.name + ' Fight...');
	}
};
////

//Task #3
function createPlayer(playerClass, player) {
	const $player = document.createElement('div');
	$player.classList.add(playerClass);

	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	const $character = document.createElement('div');
	$character.classList.add('character');

	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.innerText = player.hp;

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = player.name;

	const $img = document.createElement('img');
	$img.src = player.img;


	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);

	$player.appendChild($progressbar);
	$player.appendChild($character);

	document.querySelector('div.arenas').appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
////