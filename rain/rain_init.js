$().ready(function () {

    function run() {

        var image = document.getElementById('background');
        image.crossOrigin = 'anonymous';

        var engine = new RainyDay({
            element: 'background',
            blur: 10,
            opacity: 1,
            fps: 30
        });
        engine.rain([ [0, 2, 200], [3, 3, 1] ], 100);
    }

    run();

});