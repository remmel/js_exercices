/**
 * Collection storing the colors
 */
define(['backbone', 'ColorModel'], function (Backbone, ColorModel) {
    return Backbone.Collection.extend({
        url: App.api.colors,
        model: ColorModel
    });
});


