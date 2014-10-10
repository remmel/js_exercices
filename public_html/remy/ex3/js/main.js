require.config({
    'paths': {
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'jquery': 'lib/jquery-1.10.2'
    },
    'shim': {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() //for cache
});

require(["jquery", "underscore", "backbone", "GridView"], function($, _, B, GridView) {
    $( document ).ready(function(){
       var gridView = new GridView({
            el: ".grid"
        });
    });
});