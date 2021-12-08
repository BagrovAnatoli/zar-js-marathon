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

//Task #1
function createPlayer(playerClass, playerName, playerHp) {
	const $player = document.createElement('div');
	$player.classList.add(playerClass);

	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	const $character = document.createElement('div');
	$character.classList.add('character');

	const $life = document.createElement('div');
	$life.classList.add('life');

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = playerName;

	const $img = document.createElement('img');
	$img.src = 'http://reactmarathon-api.herokuapp.com/assets/' + playerName.toLowerCase() + '.gif';


	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);

	$player.appendChild($progressbar);
	$player.appendChild($character);

	document.querySelector('div.arenas').appendChild($player); //Task #2
}
////

//Task #2
createPlayer('player1', 'Kitana', 90);
createPlayer('player2', 'Liukang', 60);
////