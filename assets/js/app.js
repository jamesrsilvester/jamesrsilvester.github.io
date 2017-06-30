// sanity check
console.log("linked.");

// A $( document ).ready() block.
$(document).ready(function() {
    console.log(" and ready!");
    toggler();
    $('.clickable').click(toggler)
});
//set toggler as add class notBordered
//class notBordered = !important / border = none;
let toggler = function() {
    $('.toggleable').toggleClass('not-bordered');
    console.log("clicked");
};

//run initial toggle to remove.
//every element w/ border = .togglable
