let rCount = 0;
let tCount = 0;
let decks = 8;
let total = decks * 52;
let remaining = total;

function subtract(){
	rCount--
	document.getElementById("rCount").innerHTML = rCount;
	
	remaining--;
	tCount = Math.trunc(rCount/(remaining/52));
	document.getElementById("tCount").innerHTML = tCount;
	console.log(remaining, Math.round(remaining/52), tCount);
}

function zero(){
	remaining--;
	let div = remaining/52;
	tCount = Math.trunc(rCount/(remaining/52));
	document.getElementById("tCount").innerHTML = tCount;
	console.log(remaining, Math.round(remaining/52), tCount);
}

function add(){
	rCount++;
	document.getElementById("rCount").innerHTML = rCount;
	
	remaining--;
	tCount = Math.trunc(rCount/(remaining/52));
	document.getElementById("tCount").innerHTML = tCount;
	console.log(remaining, Math.round(remaining/52), tCount);
}