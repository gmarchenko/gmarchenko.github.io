requirejs.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.12.0.min',
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require(
    [
        'tmpl',
        'jquery',
        'Model',
        'View',
        'Controller'
    ],
    function (tmpl, $, Model, View, Controller) {
        $(function() {

            var data = ['This ToDo list can save your data. Try it!'];

            var model = new Model(data);
            var view = new View(model);
            var controller = new Controller(model, view);

        });
    }
);

