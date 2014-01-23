function run() {

    var image = document.getElementById('background');
    image.crossOrigin = 'anonymous';

    var engine = new RainyDay({
        element: 'background',
        blur: 10,
        opacity: 1,
        fps: 30
    });
    engine.trail = engine.TRAIL_DROPS;
    engine.rain([ [3, 2, 2] ], 100);
}

$(window).load(function(){
    run();
});     