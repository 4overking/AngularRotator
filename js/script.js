angular.module('canvasRotator', []).
        directive('rotator', function($document) {
            return function(scope, element, attr) {
                var canvas = document.createElement('canvas');
                var controlPanel = document.createElement('div');
                var buttonPlay = document.createElement('span');
                var slider = document.createElement('div');
                var step = 10;
                canvas.width = '480';
                canvas.height = '327';
                $(controlPanel).css({
                    position: 'absolute',
                    'margin': 'auto',
                    left: '0px',
                    right: '0px',
                    bottom: '10px',
                    background: 'lightgray',
                    width: '50px',
                    height: '50px',
                    'border-radius': '25px',
                    padding: '10px',
                    'padding-left': '12px'
                });

                $(buttonPlay).addClass('glyphicon glyphicon-play ').css({'font-size': '2em'});
                $(controlPanel).append(buttonPlay);
                element.append(canvas);
                element.append(controlPanel);
                var context = canvas.getContext('2d');
                var image = new Image();
                image.src = scope.frames[0].src;
                image.onload = function() {
                    context.drawImage(image, 0, 0);
                }
                element.css({
                    position: 'relative',
                    cursor: 'pointer',
                    width: '480px',
                    height: '327px'
                });

                var currentX;
                var currentFrame = 0;
                //Click handlers
                element.on('mousedown', function(event) {
                    event = event || window.event;
                    event.preventDefault();
                    currentX = (event.screenX) ? event.screenX : event.touches[0].screenX;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });

                function mousemove(event) {
                    event = event || window.event;
                    if (intervalId)
                    {
                        clearInterval(intervalId);
                        intervalId = null;
                        //shit code block
                        $(buttonPlay)[0].state = '';
                        $(buttonPlay)[0].className = 'glyphicon glyphicon-play ';
                        //end of shit code block

                    }
                    var screenX = (event.screenX) ? event.screenX : event.touches[0].screenX;

                    if (currentX - screenX >= step) {
                        rotator('-');
                        currentX = screenX;
                    }
                    else if (currentX - screenX <= -step) {
                        rotator('+');
                        currentX = screenX;
                    }
                }

                function mouseup(event) {

                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }

                //touch handlers

                element.on('touchstart', function(event) {
                    event = event || window.event;
                    event.preventDefault();
                    currentX = (event.screenX) ? event.screenX : event.touches[0].screenX;
                    $document.on('touchmove', mousemove);
                    $document.on('touchend', touchend);
                });
                function touchmove(event) {
                    event = event || window.event;
                    if (intervalId)
                    {
                        clearInterval(intervalId);
                        intervalId = null;
                        //shit code block
                        $(buttonPlay)[0].state = '';
                        $(buttonPlay)[0].className = 'glyphicon glyphicon-play ';
                        //end of shit code block

                    }
                    var screenX = (event.screenX) ? event.screenX : event.touches[0].screenX;
                    if (currentX - screenX >= step) {
                        rotator('-');
                        currentX = screenX;
                    }
                    else if (currentX - screenX <= -step) {
                        rotator('+');
                        currentX = screenX;
                    }
                }
                function touchend() {

                    $document.off('touchmove', mousemove);
                    $document.off('touchend', touchend);
                }
                var intervalId;
                $(buttonPlay).on('mousedown', function() {autoRotator()});
                $(buttonPlay).on('touchstart', function() {autoRotator()});
                function autoRotator()
                {
                    console.log($(buttonPlay)[0]);
                    if ($(buttonPlay)[0].state === 'play')
                    {

                        $(buttonPlay)[0].state = '';
                        $(buttonPlay)[0].className = 'glyphicon glyphicon-play ';
                        clearInterval(intervalId);
                    }
                    else
                    {
                        $(buttonPlay)[0].state = 'play';
                        $(buttonPlay)[0].className = 'glyphicon glyphicon-pause';
                        intervalId = setInterval(function() {
                            rotator('+');
                        }, 100);
                    }
                }
                function rotator(act)
                {
                    var step = 10;
                    if (act === '-')
                    {
                        currentFrame++;
                        currentFrame = (currentFrame > 33) ? 0 : currentFrame;
                    }
                    else
                    {
                        currentFrame--;
                        currentFrame = (currentFrame <= 0) ? 33 : currentFrame;
                    }
                    var image2 = new Image();
                    image2.src = scope.frames[currentFrame].src;
                    image2.onload = function() {
                        context.drawImage(image2, 0, 0);
                    };
                }
                ;
            };
        })
        .controller('HelloController', function($scope) {
            $scope.frames = [
                {'id': 0, 'src': 'img/rad_zoom_001.jpg'},
                {'id': 1, 'src': 'img/rad_zoom_002.jpg'},
                {'id': 2, 'src': 'img/rad_zoom_003.jpg'},
                {'id': 3, 'src': 'img/rad_zoom_004.jpg'},
                {'id': 4, 'src': 'img/rad_zoom_005.jpg'},
                {'id': 5, 'src': 'img/rad_zoom_006.jpg'},
                {'id': 6, 'src': 'img/rad_zoom_007.jpg'},
                {'id': 7, 'src': 'img/rad_zoom_008.jpg'},
                {'id': 8, 'src': 'img/rad_zoom_009.jpg'},
                {'id': 9, 'src': 'img/rad_zoom_010.jpg'},
                {'id': 10, 'src': 'img/rad_zoom_011.jpg'},
                {'id': 11, 'src': 'img/rad_zoom_012.jpg'},
                {'id': 12, 'src': 'img/rad_zoom_013.jpg'},
                {'id': 13, 'src': 'img/rad_zoom_014.jpg'},
                {'id': 14, 'src': 'img/rad_zoom_015.jpg'},
                {'id': 15, 'src': 'img/rad_zoom_016.jpg'},
                {'id': 16, 'src': 'img/rad_zoom_017.jpg'},
                {'id': 17, 'src': 'img/rad_zoom_018.jpg'},
                {'id': 18, 'src': 'img/rad_zoom_019.jpg'},
                {'id': 19, 'src': 'img/rad_zoom_020.jpg'},
                {'id': 20, 'src': 'img/rad_zoom_021.jpg'},
                {'id': 21, 'src': 'img/rad_zoom_022.jpg'},
                {'id': 22, 'src': 'img/rad_zoom_023.jpg'},
                {'id': 23, 'src': 'img/rad_zoom_024.jpg'},
                {'id': 24, 'src': 'img/rad_zoom_025.jpg'},
                {'id': 25, 'src': 'img/rad_zoom_026.jpg'},
                {'id': 26, 'src': 'img/rad_zoom_027.jpg'},
                {'id': 27, 'src': 'img/rad_zoom_028.jpg'},
                {'id': 28, 'src': 'img/rad_zoom_029.jpg'},
                {'id': 29, 'src': 'img/rad_zoom_030.jpg'},
                {'id': 30, 'src': 'img/rad_zoom_031.jpg'},
                {'id': 31, 'src': 'img/rad_zoom_032.jpg'},
                {'id': 32, 'src': 'img/rad_zoom_033.jpg'},
                {'id': 33, 'src': 'img/rad_zoom_034.jpg'}
            ];
        });
