$(document).ready(function () {

    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
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

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass("is-visible")
            } else {
                $(entry.target).removeClass("is-visible")
            }

        })

    });

    observer.observe(document.querySelector('.fade-in-section'));



});


