function reverseString(str){
	let array = str.split("");
	for(let i=0; i<array.length/2; i++){
		let swap = array[i];
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = swap;
	}
	
	const result = array.join("");
	console.log(result);
}
reverseString("kavya")