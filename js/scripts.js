$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


$(".actionable").on("click", function() {
  $(this).toggleClass("selected");
});


//on click of nav item

  //set classes for col1 & col2

  //set display of nav-item specific to what was clicked

  //undo actions on other click
