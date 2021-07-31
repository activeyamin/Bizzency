// ========header-part jqurey start========
$(".search").click(function(){
    $("#search_part").slideDown()
})
$(".cros").click(function(){
    $("#search_part").slideUp()
})

$(".close").click(function(){
    $("li").fadeToggle()
})

// ========header-part jqurey end========
// ========banner-part-veno jqurey start========
$(document).ready(function(){
    $('.venobox').venobox(); 
});
// ========header-part-veno jqurey end========
// ========skills-part jqurey start========
$(document).ready(function(){
	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller();
	$('#bar4').barfiller();
});
// ========skills-part jqurey end========
// ========service-part jqurey start========
$('.service_slider').slick({
	dots: false,
	infinite: true,
	speed: 2000,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	autoplay: true,

	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
// ========service-part jqurey end========
// ========portfolio_part jqurey start========
$('.portfolio_slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
		prevArrow: '<i class="fas fa-angle-left prev"></i>',
		nextArrow: '<i class="fas fa-angle-right next"></i>',
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		  dots: false,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
// ========portfolio_part jqurey end========
// ========testi_slider jqurey start========
$('.testi_slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
		prevArrow: '<i class="fas fa-angle-left prev"></i>',
		nextArrow: '<i class="fas fa-angle-right next"></i>',
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
// ========testi_slider jqurey end========
// ========blog_part jqurey start========
$('.blog_slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
		prevArrow: '<i class="fas fa-angle-left prev"></i>',
		nextArrow: '<i class="fas fa-angle-right next"></i>',
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		  dots: false,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
// ========blog_part jqurey end========
// a .onclick = function() {
//     this.style.backgroundColor = 'red';
//   };
//   a.onclick = function() {
// 	this.style.fontSize = '36px';
// 	this.style.color = 'red';
//   };