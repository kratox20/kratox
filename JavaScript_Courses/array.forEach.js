let students = ["spagitti" , "coffee", "tee"];

students.forEach(capitalizea);
students.forEach(print);

function capitalizea(element , index , array){
	    array[index]= element[0].toUpperCase() + element.substring(1);
}

function print(element){
	    console.log(element);
}
