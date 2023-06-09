// scope

let x = 10;

if (true){
	let y = 20;
	var z = 30;
	console.log(x + y + z)
}

console.log(x + z)

const halve = function(n){
	return n/2
}

let n = 10;

console.log(halve(100))

console.log(n);

console.log('\n')

//nested scope

const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}	
	console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};

hummus(3)

console.log('\n')

const roster = function(prev_play){
	const player = function(min, name, pos){
		let total_min = min + prev_play;
		if (total_min > 10 && total_min < 120){
			console.log('play')
		}else{
			console.log('rest')
		}
		console.log(`${min} ${name} ${pos}`)
	}
	player(19, 'Kane', 'Striker' )
	player(120, 'Kante', 'Midfielder')
}

//default minutes
roster(11)

