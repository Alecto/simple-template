(function ($) {

    $('.menu__btn').on('click', function () {
        $(this).toggleClass('active').next().toggleClass('active');
    });

})(jQuery);