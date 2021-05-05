import Fade from "./transitions/Fade.js";
import MoveLeft from "./transitions/MoveLeft.js";
import MoveRight from "./transitions/MoveRight.js";

(function ($) {

    'use strict';

    $(document).ready(function () {

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        let defaultTransition = {
            duration: 250,
            easing: 'easeInExpo'
        }

        smoothState = $main.smoothState({
            debug: true,
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = new Fade(defaultTransition);
                } else if (current < target) {
                    transition = new MoveRight(defaultTransition);
                } else {
                    transition = new MoveLeft(defaultTransition);
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    transition.moveIn(anime, '.sceneElement');
                    $site.animate({scrollTop: 0});
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    anime({
                        targets: '.sceneElement',
                        duration: 250,
                        opacity: 1,
                        easing: 'easeOutExpo'
                    });

                    transition.moveOut(anime, '.sceneElement');

                    anime({
                        targets: '.sceneElement',
                        duration: 250,
                        translateX: 0,
                        easing: 'easeOutExpo'
                    });
                }
            },
        }).data('smoothState');

    });

}(jQuery));