console.clear();

function MobileSideBar__init() {
    var $btnToggleMobileSideBar = $('.btn-toggle-mobile-side-bar');

    $btnToggleMobileSideBar.click(function() {
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
            $('.mobile-side-bar').removeClass('active'); 

            $('.btn-toggle-mobile-side-bar > i:first-child').removeClass('no');
            $('.btn-toggle-mobile-side-bar > i:last-child').removeClass('yes');
            $('.btn-toggle-mobile-side-bar > i:first-child').addClass('yes');
            $('.btn-toggle-mobile-side-bar > i:last-child').addClass('no');

        }
        else {
            $(this).addClass('active');
            $('.mobile-side-bar').addClass('active');

            $('.btn-toggle-mobile-side-bar > i:first-child').removeClass('yes');
            $('.btn-toggle-mobile-side-bar > i:last-child').removeClass('no');
            $('.btn-toggle-mobile-side-bar > i:first-child').addClass('no');
            $('.btn-toggle-mobile-side-bar > i:last-child').addClass('yes');

        }
    });

}

$(function() {
    MobileSideBar__init();
});


function MobileSideBar__init1() {
    
    var $btnMobieSubMenu = $('.mobile-side-bar > .menu-box-1 > ul > li');

    $btnMobieSubMenu.click(function() {
        if ( $(this).hasClass('sub') ) {
            $(this).removeClass('sub');
        }
        else {
            $(this).addClass('sub');
        }
    });
}

$(function() {
    MobileSideBar__init1();
});
