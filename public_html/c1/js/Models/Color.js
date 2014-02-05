/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Model for color collection
 * @type @exp;Backbone@pro;model@call;extend
 */
var Color = Backbone.Model.extend({
    
    parameters: {
        hex: "#FF0000",
        position: 1
    },
    
    initialize: function(options) {
        _.extend(this.parameters, options);
    }
});


