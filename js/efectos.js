$(document).ready(function(){

	//Efecto menu
	$('.menu a').each(function(index, elemento){
		//Sube todo el menu a 200px
		$(this).css({
			'top': '-200px'
		})

		//Anima el menu con el index y da un transcurso de ms de acuerdo a cada arreglo (desde 0 a 3 en este caso)
		$(this).animate({
			'top': '0'
		}, 2000 + (index * 500))
	})

	//Efecto Header
	//Si el ancho de la ventana es mayor a 800px ejecute la animcación
	if( $(Window).width() > 800 ){
		$('header .textos').css({
			'opacity':'0',
			'marginTop': '0'
		})

		$('header .textos').animate({
			'opacity':'1',
			'marginTop': '-52px'
		}, 1800)
	}

	//Scroll elementos menú

	//Offset y top son la posicion caldulada de la posicion que aparecera
	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault()
		$('html, body').animate({
			scrollTop: acercaDe - 60
		},500)
	})


	$('#btn-menu').on('click', function(e){
		e.preventDefault()
		$('html, body').animate({
			scrollTop: menu
		},500)
	})


	$('#btn-galeria').on('click', function(e){
		e.preventDefault()
		$('html, body').animate({
			scrollTop: galeria 	+ 10
		},500)
	})

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault()
		$('html, body').animate({
			scrollTop: ubicacion + 40
		},500)
	})

})