let ages = [18 ,20 ,50 ,17 ,13 ,90];
let adults = ages.filter(checkage);

adults.forEach(print);

function checkage(element){
	    return element >= 18 ;
}

function print(element){
	    console.log(element);
}
