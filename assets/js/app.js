// sanity check
console.log("linked.");

// A $( document ).ready() block.
$(document).ready(function() {
    console.log( " and ready!" );

let toggler = function() {
  $('.toggleable').toggleClass('notBordered');
}

toggler();

$('.clickable').click(toggler());

});
