/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    var Box = Backbone.Model.extend({
        defaults : {
            hex:'',
            position: null
        }
    });
    
    window.box = new Box({
        hex: "#000000",
        position: 2
    });
    
    // var Boxs =
    
}())

