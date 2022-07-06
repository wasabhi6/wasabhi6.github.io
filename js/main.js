
var divId;

jQuery(document).ready(function($) {

    //----- Preloader -----

    $(document).ready(function() {
        setTimeout(function() {
            $('body').addClass('loaded');
            setTimeout(function(){
                $('#loader-wrapper').remove();
            }, 1000);
        }, 3000);
    });
    
    // ---- Navbar shows on up-scroll functionality----

    var prevScrollpos = window.pageYOffset;
    var navClicked = false;
    
    $('.nav-link').click(function() {
        navClicked = true;
    })

    $(window).scroll(function(e) {
        var currentScrollPos = window.pageYOffset;
        
        if (!navClicked) {
            if ((prevScrollpos > currentScrollPos)) {
                $('.navbar').removeClass("navbar-hide");
                $('.navbar').addClass("navbar-show");
            } else {
                $('.navbar').addClass("navbar-hide");
            }
            prevScrollpos = currentScrollPos;
        }
        navClicked = false;
    });
});