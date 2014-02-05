/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var display = Backbone.View.extend({
    
    initialize: function() {
        var that = this;
        $(':button').on('click', $.proxy(function() {
            that.ajaxCall();
        }, this));
    },
    
    ajaxCall: function() {
        $.ajax({
            url: '../'+App.api.colors
        }).done(function( data ) {
            console.log(data);
        });
    }
});

