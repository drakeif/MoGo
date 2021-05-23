// HEADER FIXED

$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

        function checkScroll(scrollOffset) {

        if (scrollOffset >=  introH) {
            header.addClass("fixed animate__animated animate__fadeInDown");
        }
            else {
                header.removeClass("fixed");
            }
        }


        //SMOOTH SCROLL

        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();

            var $this = $(this),
                blockId = $this.data('scroll'),
                blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
        });

        // MENU NAV TOGGLE

        $("#nav-toggle").on("click", function(event) {
            event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // COLLAPSE

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

            $this.toggleClass("active");
            //$(blockId).slideToggle();//

    });

    // DATA SLIDER

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    new WOW({
        offset: 300,
    }).init();

});
