

;(function() {
    'use-strict'
 
    const showForm = function() {
     $('.ic-search').click(function (e) {
         $('.headerForm').toggleClass('showForm')
     })
    }
 
    const responsivemenu = function() {
       $(window).on('load resize', function() {
         const childs = $('#mobile-nav').find('li:has(ul)');
         if (matchMedia( 'only screen and (max-width: 998px)' ).matches) {
            $('#header').append($('#mobile-nav'));
            $('.menu-list').find('#mobile-nav').remove();
            childs.children('ul').hide();
            if(!$('.btn-submenu').length) {
             childs.children('a').after('<span class="btn-submenu"></span>');
            }
            $('.mobile-btn').css('display', 'block');
            $('#mobile-nav').hide();
         } else {
             $('#header').find('.menu-list').append($('#mobile-nav'));
             $('.menu-list .submenu').removeAttr('style');
             $('.btn-submenu').remove();
             $('#mobile-nav').show();
             $('.mobile-btn').css('display', 'none');
         }
       })
    }
 
    const togglerMenu = function() {
          $(document).on('click', '#mobile-nav li .btn-submenu', function(e) {
             $(this).toggleClass('activeBtnMenu').next('ul').slideToggle(100);
             e.stopImmediatePropagation();
          })
 
          $('.mobile-btn').on('click', function() {         
 
             $('#mobile-nav').slideToggle(300);
 
             $(this).toggleClass('activeNav');
 
         });
    };

    
    const flatIsotope = function() {
        if($().isotope) {
            let $container = $('.isotope-product');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.product-item',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $(document).on('click','#product-bar-menu .flat-filter li',function(e) {                           
                console.log("🚀 ~ file: main.js:62 ~ $ ~ e:", 'votrong')
                const selector = $(this).find("a").attr('data-filter');
                $('#product-bar-menu .flat-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                // return false;
                e.preventDefault();
            });
        };
    }; 

    const flatEffectDir = function(){
        if($().hoverdir){
            $('.data-effect').each(function(){
                $(this).find('.data-effect-item').hoverdir({
                    hoverDelay: 15,
                    hoverElem: '.overlay-effect'
                })
            })
        };
    };


    const carouselOwl = function() {
        if ( $().owlCarousel ) {
            $('.flat-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    navigation : false,
                    pagination: false,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        700:{
                            items:item2
                        },
                        1200:{
                            items:item
                        }
                    }

                });
            });
        }
    };
 
    const loadering = function() {
         setTimeout(() => {
             $('#loading-overlay').remove();
         }, 1000);
    }

    const scrollToTop = function () {
        $(window).scroll(function (e) {
            const valueScrollY = window.scrollY;
            if(valueScrollY < 400) {
                $('.btnClickScroll').removeClass('activeBtnScroll')
            } else {
              $('.btnClickScroll').addClass('activeBtnScroll')
            }
        })
    }

    const clickScrollToTop = function() {
        $('.btnClickScroll').click(() => {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        })
    }

    var flatAccordion = function() {
        var speed= {duration: 600};
        $('.toggle-content').hide();
        $('.flat-accordion .toggle-title.active').siblings('.toggle-content').show();
  
        $('.flat-accordion .toggle-title').on('click', function(){
          if(!$(this).is('.active')) {
            $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(speed);
            $(this).toggleClass('active');
            $(this).next().slideToggle(speed);
          }else {
            $(this).toggleClass('active');
            $(this).next().slideToggle(speed);
          }
        });
      };

    //count down
    var countDown = function() {
        var before = '<div class="square"><div class="numb">',
            text = '</div><div class="text">';
            if ($().countdown) {
                $(".countdown").countdown('2018/6/22', function(event) {
                  $(this).html(event.strftime(before + '%D' + text + 'Days</div></div>' + before + '%H' + text + 'Hours</div></div>' + before + '%M' + text + 'Minutes</div></div>' + before + '%S' + text + 'Seconds</div>'));
                });
            }      
    };
 
 
     //Dome Ready
    
     $(document).ready(function() {
       showForm();
       togglerMenu();
       loadering();
       flatEffectDir()
       carouselOwl();
       clickScrollToTop();
       flatIsotope();
       flatAccordion();
       countDown();
        })
     scrollToTop()
     // onload
     responsivemenu();
 })()