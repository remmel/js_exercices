/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// fonction to change color
$( document ).ready(function() {
   $('#block').find('td').each(function() {
       $(this).on('click', function() {
            var color = '#'+Math.floor(Math.random()*16777215).toString(16);
            $(this).css('background', color);
       });
   });
});

