let grades = [100 ,60 ,70 ,50 ,40 ,20 ,25];
grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x ,y){
	    return y - x;
}

function print(element){
	    console.log(element);
}
