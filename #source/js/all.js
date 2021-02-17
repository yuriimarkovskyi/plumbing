//Вывод цены при клике на кнопку
$('.services__button-block').on('click', function() {
	$(this).toggleClass('disable');
});
//Убрать цену
$('.services__button-block').mouseleave(function() {
	$(this).removeClass('disable');
});
//input mask
jQuery(function($){
	$('.phone').mask('+38 (099) 999-99-99');
});