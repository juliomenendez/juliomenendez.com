(function($) {
    var $window = $(window),
        $body = $('body');

    if ($body.hasClass('home')) {
        var windowWidth,
            windowHeight,
            elementWidth,
            elementHeight,
            elementLeft,
            elementTop,
            scale,
            $background = $('.landing-background');
        var updateBackground = function() {
            windowWidth = $window.width();
            windowHeight = $window.height();
            elementWidth = $background.width();
            elementHeight = $background.height();
            scale = Math.max(windowHeight / elementHeight, windowWidth / elementWidth);
            elementWidth = scale * elementWidth;
            elementHeight = scale * elementHeight;
            elementLeft = (windowWidth - elementWidth) / 3;
            elementTop = (windowHeight - elementHeight) / 2;
            $background.css({
                'height': elementHeight,
                'width': elementWidth,
                'left': elementLeft,
                'top': elementTop
            });
        };
        $window.resize(function() {
            updateBackground();
        });
        updateBackground();
    }
})(jQuery);