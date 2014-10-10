/**
 * Model storing a color
 */
define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        defaults: {
            hex: undefined,
            position: undefined
        }
    });
});