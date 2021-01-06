$(document).ready(function () {

    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $(".background-video video").toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    // Smooth scroll to anchor links
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 500);
        }
    });
});


