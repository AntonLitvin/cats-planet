$(window).on('load', function() { 
	$('.loader-inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});


$(function() {

var mainNav = $('.main-nav'),
		mainNavItem = $('.main nav a'),
		toggleBtn = $('.toggle-btn'),
		filtersBtn = $('.filters-btn'),
		searchField = $('.search-field'),
		searchBtn = $('.search-btn'),
		sidebarForm = $('.sidebar-form'),
		addFormBtn = $('.add-form-btn');


//toggle menu button
$(toggleBtn).on('click', function() {
	$(this).toggleClass('on');
	$(mainNav).slideToggle();
	return false;
});


$(window).resize(function(){

	heightses();

	if($(window).width() > '767') {
		$(mainNav).removeAttr('style').css('list-style-type', 'none');
		$(toggleBtn).removeClass('on');
		$(filtersBtn).html('Применить фильтры');
		$(searchField).removeAttr('style');
		$(sidebarForm).removeAttr('style');
		$(mainNavItem).off('click', hideMenu);
	}

	if ($(window).width() < '768') {
		$(mainNavItem).on('click', hideMenu);
	}

});

if ($(window).width() < '768') {
	$(mainNavItem).on('click', hideMenu);
}

function hideMenu() {
	$(mainNav).slideUp();
	$(toggleBtn).removeClass('on');
}


//Show and hide searchform onclick
$(searchBtn).on('click', function(e){
	if($(window).width() < '768') {
		$(searchField).fadeToggle();
	}
	e.preventDefault();
});


//Show and hide filters onclick
$(addFormBtn).on('click', function(){
	$(sidebarForm).slideDown();
	$(filtersBtn).html('OK');

	$(filtersBtn).on('click', function(e){
		e.preventDefault();
		if ($(window).width() < '768') {
			$(sidebarForm).slideUp();
			$(addFormBtn).addClass('add-form-btn-checked').html('Примененные фильтры');
		}
	});
});

$(filtersBtn).on('click', function(e){
	e.preventDefault();
});


//open-close filter submenu
$('.list-toggle').on('click', function() {
	if ($(this).parent().hasClass('opened')) {
		$(this).parent().removeClass('opened');
	} else {
		$(this).parent().addClass('opened');
	}
	$(this).closest('.pub-theme-item').find('.subtheme-list').slideToggle();
});


//Articles filter
$('.pub-type-item input').on('change', function(){
	var $checkBoxName = $(this).attr('name'); 

	if ($(this).is(':checked')) {

		$('.public-label').each(function(){
			var pubLabelType = $(this).data('typeArticle');
			if (($checkBoxName == pubLabelType)) {
				$(this).parents('.public-item').addClass('choosen').parent().show(200);
			} else if (!($(this).parents('.public-item').hasClass('choosen'))){
				$(this).parents('.public-item').parent().hide(200);
			}
		});

	} else {

		$('.public-label').each(function(){
			$('.public-item').removeClass('choosen');
			$(this).parents('.public-item').parent().show(200);
		});

	}
});


//close article item
$('.public-close').on('click', function(){
	$(this).parent('.public-item').parent().hide(200);
});

$('.read-more-btn').on('click', function(){
	$header = $(this).parents('.public-item').find('h3').html();
	console.log($header);
});


//set article label color
function setLabelColor() {
	if($(window).width() > '767') {
		$('.public-label').each(function(){
			if($(this).data('typeArticle') == "review") {
				$(this).css('background-color', 'rgba(245,57,101,0.5)');
			}
			if($(this).data('typeArticle') == "useful") {
				$(this).css('background-color', 'rgba(63,63,63,0.5)');
			}
			if($(this).data('typeArticle') == "article") {
				$(this).css('background-color', 'rgba(5,93,143,0.5)');
			}
		});
	} else {
		$('.public-label').each(function(){
			$(this).removeAttr('style');
		});
	}
}

setLabelColor();

$(window).resize(function(){
	setLabelColor();
});


//to-top button
$(window).scroll(function() {
	if($(this).scrollTop() > $(document).height() - 1500) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

$('.scroll-up').on('click', function() {
	$('body, html').animate({ scrollTop:0 },800);
	return false;
});


//Modal open-close
$('.callback-btn').on('click', function() {
	$('#callback').fadeIn();
	$('.overlay').fadeIn();
});

$('.modal-close').on('click', function() {
	$('#callback').fadeOut();
	$('.overlay').fadeOut();
});

$('.overlay').on('click', function() {
	$('#callback').fadeOut();
	$(this).fadeOut();
});


//equalHeights
function heightses() {
	$('.public-text').css('height', '').equalHeights();
	$('.public-item img').css('height', '').equalHeights();
}

heightses();


});
