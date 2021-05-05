(function ($) {

    'use strict';

    $(document).ready(function () {

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = 'fade';
                } else if (current < target) {
                    transition = 'moveright';
                } else {
                    transition = 'moveleft';
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    switch (transition) {
                        case 'moveright':
                            anime({
                                targets: '.sceneElement',
                                duration: 250,
                                translateX: '25px',
                                easing: 'easeInExpo'
                            });

                            anime({
                                targets: '.sceneElement',
                                duration: 250,
                                opacity: 0,
                                easing: 'easeInExpo'
                            });

                            break;

                        case 'moveleft':
                            anime({
                                targets: '.sceneElement',
                                duration: 250,
                                translateX: '-25px',
                                easing: 'easeInExpo'
                            });

                            anime({
                                targets: '.sceneElement',
                                duration: 250,
                                opacity: 0,
                                easing: 'easeInExpo'
                            });

                            break;
                    
                        default:
                            anime({
                                targets: '.sceneElement',
                                duration: 250,
                                opacity: 0,
                                easing: 'easeInExpo'
                            });
                            break;
                    }

                    $site.animate({scrollTop: 0});
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    anime({
                        targets: '.sceneElement',
                        duration: 400,
                        opacity: 1,
                        easing: 'easeOutExpo'
                    });

                    switch (transition) {
                        case 'moveright':
                            anime({
                                targets: '.sceneElement',
                                duration: 0,
                                translateX: '-25px',
                            });
                            break;
                    
                        case 'moveleft':
                            anime({
                                targets: '.sceneElement',
                                duration: 0,
                                translateX: '25px',
                            });
                            break;
                    }

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