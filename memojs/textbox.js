

window.onload = function () {

textbox = document.getElementById('textbox');
alignRadio = document.getElementsByName('align');
for ( let i=0; i<alignRadio.length ; i++ ) {
alignRadio[i].addEventListener('change', function (e) {
let target = e.target;
let message;

switch (target.value) {
case 'left':
textbox.style.textAlign = 'left';
break;
case 'center':
textbox.style.textAlign = 'center';
break;
case 'right':
textbox.style.textAlign = 'right';
break;
default:
textbox.style.color = 'black';
textbox.style.textAlign = 'left';
break;
}
});
}


fontRadio = document.getElementsByName('font');
for ( let i=0; i<fontRadio.length ; i++){
	fontRadio[i].addEventListener('change', function whatFont(f){
		let target = f.target;

		switch(target.value){
		case 'gothic':
			textbox.style.fontFamily = 'SUIT-Regular';
		break;
		case 'serif':
			textbox.style.fontFamily = 'GowunBatang-Regular';
		break;
		case 'hand':
			textbox.style.fontFamily = 'iceJaram-Rg';
		break;
		case 'hand2':
			textbox.style.fontFamily = 'GangwonEduHyeonokT_OTFMediumA';
		break;
		}
	});
}



sizeRange = document.getElementsByName('size')[0];
//sizeRange는 노드리스트이므로 바로 value를 참조할 수 없다. 첫번째 요소를 선택했다.
sizeRange.addEventListener('input', function(){
	newSize = sizeRange.value + 'pt';
	textbox.style.fontSize = newSize;
	textbox.style.lineHeight = newSize;
});


}


