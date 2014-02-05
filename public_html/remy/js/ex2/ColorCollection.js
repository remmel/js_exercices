var ColorCollection = Backbone.Collection.extend({
    url: App.api.colors,
    model: ColorModel,
    initialize: function(){}
});