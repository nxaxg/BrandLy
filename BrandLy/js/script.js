$(document).ready(function () {
    header();
    
    
    $('.size').click(function () {
            $('.desc-four-btns li').removeClass('size-selected');
            $(this).addClass('size-selected');
        });
});



//scrolling down
function header() {
    var tope = 500; /*from top*/

    function posActual() {
        return window.pageYOffset || document.documentElement.scrollTop;
    };


    $(window).scroll(function () {
        var scroll = posActual(); /*posicion actual*/
        if (scroll >= tope && scroll < 1400) {
            smallHeader();
            linkRemove();
            $('nav ul li:nth-child(2)>a').addClass('nav-selected');
        } else if (scroll >= 1400 && scroll < 2100) {
            smallHeader();
            linkRemove();
            $('nav ul li:nth-child(3)>a').addClass('nav-selected');
        } else if (scroll >= 2100 && scroll < 2600) {
            smallHeader();
            linkRemove();
            $('nav ul li:nth-child(4)>a').addClass('nav-selected');
        } else if (scroll >= 2600) {
            smallHeader();
            linkRemove();
            $('nav ul li:nth-child(5)>a').addClass('nav-selected');
        } else {
            $('header').removeClass('small-header');
            linkRemove();
            $('header ul li:first-child>a').addClass('nav-selected');
        }
    });

    function smallHeader() {
        return $('header').addClass('small-header');
    };

    function linkRemove() {
        return $('.menu-link').removeClass('nav-selected');
    };
};