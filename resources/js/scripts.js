$(function() {
  function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
  }

  if( isBreakpoint('xs') ) {
    $('h1').click(function() {
      $('nav').toggleClass('navReveal');
      $('nav .selected').removeClass('selected');
    });
  }

  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  $grid.masonry();

  $(".actionable").on("click", function() {
    $(this).toggleClass("selected");
    $('#col1').toggleClass('col1--active')
    $('#col2').toggleClass('col2--active')

    setTimeout(function() {
      $grid.masonry();
    }, 401);
  });

});




//on click of nav item

  //set classes for col1 & col2

  //set display of nav-item specific to what was clicked

  //undo actions on other click
