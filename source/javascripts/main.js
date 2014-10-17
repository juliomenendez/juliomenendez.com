(function($) {
    var $window = $(window),
        $body = $('body');

    if ($body.hasClass('home')) {
        var $background = $('.landing-container');
        var updateBackgroundSize = function() {
            $background.css('height', $window.height());
        };
        $window.resize(function() {
            updateBackgroundSize();
        });
        updateBackgroundSize();
    }
})(jQuery);