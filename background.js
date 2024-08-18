function ranColor(){
	let red = Math.floor(Math.random()*256);
	let green = Math.floor(Math.random()*256);
	let blue = Math.floor(Math.random()*256);
	return 'rgb('+red+','+green+','+blue+')';
}

textbox = document.getElementById('textbox');

textbox.addEventListener('change', function ranBG(){
	document.body.style.backgroundColor = ranColor();
	document.getElementById('textbox').style.backgroundColor = ranColor();
});