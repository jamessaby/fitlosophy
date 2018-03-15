// Swicher show/hide
$switcher = $('#switcher')

$('.show-switcher-icon').click(function(){

    if ($switcher.hasClass("show-switcher")) {
                $switcher.addClass('hide-switcher'); 
            $switcher.removeClass('show-switcher');
        }
        else {
            $switcher.addClass('show-switcher'); 
            $switcher.removeClass('hide-switcher');
        };
});
// and Swicher show/hide