$(document).ready(function(){
 
   // burger
   $(document).on("click", ".burger", function () {
      $(".burger").toggleClass("close");
      $(".header-nav").toggleClass("show");
   }); 
   
   $('.slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots:false,
      fade: true,
      asNavFor: '.slider-small',
      infinite:false,
      initialSlide: 0
   });

   $('.slider-small').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-big',
      dots: false,
      infinite:false,
      initialSlide: 1,
      centerMode:false 
   });
   
   $(window).resize(function() {         
      if ( $(window).width() > 768 ) {      
         
      };
   });
   
   $('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true,
      infinite:false,
      responsive: [
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3
           }
         },
         {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
         {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
         }
      ]
   });
   
   // согласие на обработку персональных данных
   var use_privacy = true;
		$('#form1').on('submit', function (e) {

			if (use_privacy) {
				if (!$(this).find('input[name=privacy]').prop('checked')) {
					alert('Для продолжения вы должны принять условия Пользовательского соглашения');
					return false;
				}
			}
			document.write('Форма успешно отправлена!');
			e.preventDefault();
      });
      
      // accordion-footer
      $(window).resize(function() {         
         if ( $(window).width() < 576 ) {
         
            $('.accordion-item__trigger').click(function (){
               $(this).parent('.accordion-item').toggleClass('accordion-item--active');
            });
         };
      });

      // search-active
      $(".header-top__search .btn").click(function () {
         $(".header-top__search .form-search").toggleClass("active");
      });
            
});

// tabs
document.querySelectorAll('.tabs-triggers__item').forEach((item) => 
   item.addEventListener('click', function(e) {
      e.preventDefault(); 

      const id = e.target.getAttribute('href').replace('#', '');      

      document.querySelectorAll('.tabs-triggers__item').forEach(
         (child) => child.classList.remove('tabs-triggers__item--active')
      );
      document.querySelectorAll('.tabs-content__item').forEach(
         (child) => child.classList.remove('tabs-content__item--active')
      );
      
      item.classList.add('tabs-triggers__item--active');
      document.getElementById(id).classList.add('tabs-content__item--active');            
   })         
);
document.querySelector('.tabs-triggers__item').click();