$(document).ready(function(){

	//Busca el ancho de la ventana de la pagina
	$(window).scroll(function(){
		var windowWidth = $(window).width()


	//Si el ancho de la ventana es mayor a 800px ejecuta el codigo -- se entiende sies menor que esta en un disp. movil
	//Scroll es la posicion donde se identifica desde la posicion inicial hasta lo mas bajo donde esta colocada la paigna
		if(windowWidth > 800){
			var scroll = $(window).scrollTop()

			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2.5 + '%)'
			})
		// translate(0px, 50px) los 50px son dinamicos y cambiaran de acuerdo en su posicion y se realiza concatenando el codigo

			$('.acerca-de article').css({
			'transform': 'translate(0px, -' + scroll / 6 + '%)'
			})
		}
	})

	//Buscar cuando el usuario haga un cambio de tamaño en la pagina
	$(window).resize(function(){
		var windowWidth = $(Window).width()
		if(windowWidth < 800){
			//Su traslado de tamaño de pagina inferior a 800 px va a ser de 0
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
				})
		}
	})

})