//onload는 문서당 한 번에 쓸 수 있으나 eventlistener는 페이지가 로드된 후에 사용.
//window onload eventlistener로 대체 (다른 문서에 있다가 분리해서 그냥 그대로 사용)



window.addEventListener('load', function(){

	var capbutton = document.getElementById('capture');

	capbutton.addEventListener('click', function() {
		document.fonts.ready
		.then(function(){
			return domtoimage.toBlob(document.getElementById('memoarea'), {
				style: {fontFamily: 'inherit'}
			});
		})
		
		.then(function (blob){
			window.saveAs(blob, 'image.jpg');
		})

	});

});

