!function (e) {
    "use strict";

    function i() {
        var i = e(window).width(), s = e(window).height();
        e(".section.hero-main-slider, .section.main-slider, .section.full-slider, .section.half-slider, .section.m-works-carousel, .section.m-contacts-map, .error-page, .section.hero-started, .menu-full-overlay, .preloader .centrize").css({height: s}), i < 783 && e(".section.hero-main-slider, .section.main-slider, .section.full-slider, .section.half-slider, .section.m-works-carousel, .section.m-contacts-map, .error-page, .section.hero-started, .menu-full-overlay, .preloader .centrize").css({height: s})
    }

    e(window).on("load", function () {
        e("body").imagesLoaded({}, function () {
            var i = e(".preloader");
            i.addClass("loaded"), i.find(".centrize").fadeOut(), function () {
                var i = window.innerWidth / 2, s = window.innerHeight / 2, a = {
                    el: e(".cursor"),
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2,
                    w: 30,
                    h: 30,
                    update: function () {
                        var e = this.x - this.w / 2, i = this.y - this.h / 2;
                        this.el.css({transform: "translate3d(" + e + "px," + i + "px, 0)"})
                    }
                };

                function t(e, i, s) {
                    return (1 - s) * e + s * i
                }

                e(window).mousemove(function (e) {
                    i = e.clientX, s = e.clientY
                }), e("a, .swiper-pagination, .swiper-buttons, button, .button, .btn").hover(function () {
                    e(".cursor").addClass("cursor-zoom")
                }, function () {
                    e(".cursor").removeClass("cursor-zoom")
                }), setInterval(function () {
                    a.x = t(a.x, i, .1), a.y = t(a.y, s, .1), a.update()
                }, 1e3 / 60)
            }(), e(".scroll-animate").scrolla({
                once: !0,
                mobile: !0
            }), e(".main-slider-items__image").length && initMainSlider(), e(".full-slider-items__image").length && initFullSlider(), e(".half-slider-items__image").length && initHalfSlider(), e(".started-items__image").length && initHeroStarted()
        })
    }), e(function () {
        if ((e(".hero-main-slider").length || e(".main-slider").length || e(".full-slider").length || e(".hero-started").length || e(".archive .shop-page-started").length || e(".section.m-works-carousel.fully").length) && (e("body").addClass("nav-white"), e("body").addClass("nav-white-logo")), e(window).width() < 768 && e(".half-slider").length && e("body").addClass("nav-white"), i(), e(window).resize(function () {
            i()
        }), e(".js-parallax").jarallax({
            speed: .65,
            type: "scroll"
        }), Splitting(), e(window).width() > 1200) skrollr.init();
        e(".header").length && e(".page-white").length && e(window).on("scroll", function (i) {
            e(window).scrollTop() > 100 ? (e(".header").addClass("sticky"), this.oldScroll < this.scrollY ? e(".header").addClass("animate-in") : e(window).scrollTop() < 200 && e(".header").addClass("animate-out")) : (e(".header").removeClass("sticky"), e(".header").removeClass("animate-in"), e(".header").removeClass("animate-out")), this.oldScroll = this.scrollY
        });
        new Swiper(".hero-main-slider .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !0,
            autoplay: {delay: 5e3},
            speed: 1e3,
            mousewheel: !0,
            watchSlidesProgress: !0,
            pagination: {el: ".hero-main-slider .swiper-pagination"},
            navigation: {
                nextEl: ".hero-main-slider .swiper-button-next",
                prevEl: ".hero-main-slider .swiper-button-prev"
            },
            on: {
                progress: function () {
                    for (var e = 0; e < this.slides.length; e++) {
                        var i = this.slides[e].progress * (.5 * this.width);
                        this.slides[e].querySelector(".slide").style.transform = "translateX(" + i + "px)"
                    }
                }, touchStart: function () {
                    for (var e = 0; e < this.slides.length; e++) this.slides[e].style.transition = ""
                }, setTransition: function (e, i) {
                    for (var s = 0; s < e.slides.length; s++) e.slides[s].style.transition = i + "ms", e.slides[s].querySelector(".slide").style.transition = i + "ms"
                }, slideChangeTransitionStart: function (i, s) {
                    for (var a = 0; a < i.slides.length; a++) e(".hero-main-slider .swiper-slide").removeClass("animate-active"), e(".hero-main-slider .swiper-slide-active").addClass("animate-active"), e(".hero-main-slider .swiper-slide-active").find(".dark").length ? e("body").hasClass("dark-first") || e("body").addClass("dark-first") : e("body").removeClass("dark-first")
                }, init: function () {
                    setTimeout(function () {
                        e(".hero-main-slider .swiper-slide-active").addClass("animate-active")
                    }, 500), e(".hero-main-slider .swiper-slide-active").find(".dark").length ? e("body").hasClass("dark-first") || e("body").addClass("dark-first") : e("body").removeClass("dark-first")
                }
            }
        }), new Swiper(".m-works-carousel.default .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: !0,
            speed: 1e3,
            loop: !0,
            mousewheel: !0,
            preventInteractionOnTransition: !0,
            navigation: !1,
            pagination: {el: ".swiper-pagination", type: "progressbar"},
            breakpoints: {
                0: {slidesPerView: 1},
                768: {slidesPerView: 1},
                1024: {slidesPerView: 2},
                1280: {slidesPerView: 3}
            }
        }), new Swiper(".m-works-carousel.fully .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: !0,
            speed: 1e3,
            loop: !0,
            mousewheel: !0,
            preventInteractionOnTransition: !0,
            navigation: !1,
            pagination: {el: ".swiper-pagination", type: "progressbar"},
            breakpoints: {
                0: {slidesPerView: 1},
                768: {slidesPerView: 1},
                1024: {slidesPerView: 2},
                1280: {slidesPerView: 3}
            }
        });
        e(".js-testimonials").each(function () {
            new Swiper(".js-testimonials", {
                slidesPerView: 2,
                spaceBetween: 50,
                pagination: {el: ".swiper-pagination", clickable: !0},
                breakpoints: {
                    0: {slidesPerView: 1},
                    768: {slidesPerView: 1},
                    1024: {slidesPerView: 2},
                    1280: {slidesPerView: 3}
                }
            })
        }), e(".header").on("click", ".menu-btn.full", function () {
            if (e(this).hasClass("active")) e(this).removeClass("active"), e(this).addClass("no-touch"), e("body").removeClass("no-scroll"), e(".menu-full-overlay").removeClass("is-open"), e(".menu-full-overlay").removeClass("has-scroll"), e(".menu-full-overlay").removeClass("animate-active"), setTimeout(function () {
                e(".menu-full-overlay").removeClass("visible"), e(".menu-btn.full").removeClass("no-touch")
            }, 1e3); else {
                e(this).addClass("active no-touch");
                var i = e(window).height();
                e(".menu-full-overlay").css({height: i}), e("body").addClass("no-scroll"), e(".menu-full-overlay").addClass("is-open visible"), setTimeout(function () {
                    e(".menu-full-overlay").addClass("has-scroll animate-active"), e(".menu-btn.full").removeClass("no-touch")
                }, 1e3)
            }
            return !1
        }), e(".menu-full").on("click", ".has-children > a", function () {
            if (e(this).closest("li").hasClass("opened")) e(this).closest("li").removeClass("opened"), e(this).closest("li").addClass("closed"), e(this).closest("li").find("> ul").css("max-height", 0); else {
                e(this).closest("ul").find("> li").removeClass("closed").removeClass("opened"), e(this).closest("ul").find("> li").find("> ul").css("max-height", 0), e(this).closest("li").addClass("opened");
                var i = 0;
                e(this).closest("li").find("> ul > li").each(function () {
                    i += e(this).height() + 20
                }), e(this).closest("li").find("> ul").css("max-height", i + 20)
            }
            return !1
        });
        new Swiper(".m-gallery-carousel .swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 100,
            speed: 700,
            loop: !1,
            pagination: !1,
            breakpoints: {0: {spaceBetween: 30}, 768: {spaceBetween: 50}, 1200: {spaceBetween: 100}}
        });
        var s = e(".m-gallery .row");
        s.imagesLoaded(function () {
            s.isotope({itemSelector: ".col-xs-12", percentPosition: !0})
        });
        var a = e(".works-items");
        a.imagesLoaded(function () {
            a.isotope({itemSelector: ".works-col", percentPosition: !0})
        }), e(".filter-links").on("click", "a", function () {
            var i = e(this).attr("data-href");
            return a.isotope({filter: i}), e(".filter-links a").removeClass("active"), e(this).addClass("active"), e(i).find(".scroll-animate").hasClass("animate__active") || e(i).find(".scroll-animate").addClass("animate__active"), !1
        }), e(".has-popup-image").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "mfp-fade",
            image: {verticalFit: !0}
        }), e(".has-popup-video").magnificPopup({
            disableOn: 700,
            type: "iframe",
            iframe: {
                patterns: {
                    youtube_short: {
                        index: "youtu.be/",
                        id: "youtu.be/",
                        src: "https://www.youtube.com/embed/%id%?autoplay=1"
                    }
                }
            },
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "mfp-fade",
            callbacks: {
                markupParse: function (e, i, s) {
                    e.find("iframe").attr("allow", "autoplay")
                }
            }
        }), e(".has-popup-audio").magnificPopup({
            disableOn: 700,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "mfp-fade"
        }), e(".has-popup-gallery").on("click", function () {
            var i = e(this).attr("href");
            return e(i).magnificPopup({
                delegate: "a",
                type: "image",
                closeOnContentClick: !1,
                mainClass: "mfp-fade",
                removalDelay: 160,
                fixedContentPos: !1,
                gallery: {enabled: !0}
            }).magnificPopup("open"), !1
        }), e(".tab-menu").on("click", ".tab-btn", function () {
            var i = e(this).attr("href");
            return e(this).closest(".tab-menu").find("li").removeClass("active"), e(this).closest("li").addClass("active"), e(this).closest(".tabs").find("> .tab-item").hide(), e(i).fadeIn(), !1
        }), e(".collapse-item").on("click", ".collapse-btn", function () {
            e(this).closest(".collapse-item").hasClass("active") ? (e(this).closest(".collapse-item").find(".collapse-content").slideUp(), e(this).closest(".collapse-item").removeClass("active"), e(this).removeClass("active")) : (e(this).closest(".collapse-item").find(".collapse-content").slideDown(), e(this).closest(".collapse-item").addClass("active"), e(this).addClass("active"))
        }), e(".m-video-large .video").on("click", ".play, .img", function () {
            return e(this).closest(".video").addClass("active"), function (e) {
                var i = e.data("src");
                e.attr("src", i)
            }(e(this).closest(".video").find(".js-video-iframe")), !1
        }), e(".contacts-form").length && e("#cform").validate({
            rules: {
                name: {required: !0},
                message: {required: !0},
                email: {required: !0, email: !0}
            }, success: "valid", submitHandler: function () {
                e.ajax({
                    url: "mailer/feedback.php",
                    type: "post",
                    dataType: "json",
                    data: "name=" + e("#cform").find('input[name="name"]').val() + "&email=" + e("#cform").find('input[name="email"]').val() + "&message=" + e("#cform").find('textarea[name="message"]').val(),
                    beforeSend: function () {
                    },
                    complete: function () {
                    },
                    success: function (i) {
                        e("#cform").fadeOut(), e(".alert-success").delay(1e3).fadeIn()
                    }
                })
            }
        })
    })
}(jQuery);

$(function () {
    $('body').append('');
    $('.fix-bts').on('mouseenter', function () {
        $('.fix-bts').css({'right': '0'});
    });
    $('.fix-bts').on('mouseleave', function () {
        $('.fix-bts').css({'right': '-90px'});
    });
});

(function ($) {
    'use strict';

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/62961d197b967b1179922b9c/1g4d7oaso';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

})(jQuery);
