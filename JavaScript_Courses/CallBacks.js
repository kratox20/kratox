sum (2 ,3 , DisplayDom, DisplayConsole);

function sum(x ,y ,CallBack, Callback1){
	    let result = x + y;
	    CallBack(result);
	    Callback1(result);
}


function DisplayConsole(output){
	    console.log(output);
}

function DisplayDom(output){
	    document.getElementById("displayDom").innerHTML = output;
}
