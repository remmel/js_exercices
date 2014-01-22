/**
 * Handling the grid with it button
 */
GridView = Backbone.View.extend({
        events: {
            "click input[type=button]": "loadColors"
        },
        initialize: function(){
            this.collection = new ColorCollection();
            this.collection.on('add', this.updateColor, this);
        },
        loadColors: function(){
            this.collection.fetch();
        },
        updateColor: function(color){
            var id = "#position-"+color.attributes.position;
            this.$el.find(id).css("background-color",color.attributes.hex);
        }
});