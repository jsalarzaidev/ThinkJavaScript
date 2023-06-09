// Defining a function

const square = function(x){
	return x * x;
}

console.log(square(12));

const makeNoise1 = function(){
	console.log("Ming!!!")
}

makeNoise1();

function myFunction() {
  return;
}

console.log(myFunction());  // Outputs: undefined

function makeNoise2() {
  console.log('Making noise!');
}

console.log(makeNoise2());  // Outputs: undefined

const power = function(base, exponent){
	let result = 1;
	for (let count=0; count< exponent; count++){
		result *=base; // result = result * base;
}

return result
};

console.log(power(2,4));

