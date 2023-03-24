

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

    // google map
    var googleMap = function () {
        // gmap default
        if ($().gmap3) {
            var data = JSON.parse('[{"address":"515 Crescent St, Brooklyn, NY 11208","content":""}]');
            $(".flat-map")
                .gmap3({
                    map: {
                        options: {
                            zoom: 17,
                            center: [40.6749633,-73.8699887,18.75],
                            mapTypeId: 'Modaz',
                            mapTypeControlOptions: {
                                mapTypeIds: ['Modaz', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                            },
                            scrollwheel: true
                        },
                    },
                });

        }
        // json loop
        $.each(data, function (key, val) {
            $('.flat-map').gmap3({
                marker: {
                    values: [{
                        address: val.address,
                        options: {
                            icon: "./images/maps/map_icon.png"
                        },
                        events: {
                            mouseover: function () {
                                $(this).gmap3({
                                    overlay: {
                                        address: val.address,
                                        options: {
                                            content: "<div class='infobox'><p>203, Envato Labs, Behind Alis Steet</p><div class='clearfix'></div></div>",
                                            offset: {
                                                y: 32,
                                                x: -19

                                            }
                                        }
                                    }
                                });
                            },
                            mouseout: function () {
                                $('.infobox').each(function () {
                                    $(this).remove();
                                });
                            }
                        }
                        }]
                },
                styledmaptype: {
                    id: "Modaz",
                    options: {
                        name: "Modaz"
                    },
                    styles: [
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e9e9e9"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dedede"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#333333"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        }
                    ]
                }
            });
        });
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
       googleMap();
        })
     scrollToTop()
     // onload
     responsivemenu();
 })()