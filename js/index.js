var slideshow_move = 0;
$(function()
{
  var current_scroll_element = 0;

  $(".slideshow_arrow").on("click", function()
  {
    var 
      noOfImages = $(".slideshow_element").length,
      moveTo = 0,
      new_height = 0;
    if($(this).hasClass("ss_move_left"))
    {
      if(slideshow_move == 0)
      return;

      slideshow_move--;

      var widthOfImage = $(".slideshow_element").width();
      new_height = $(".slideshow_element").eq(slideshow_move).height();

      moveTo = (widthOfImage + 60) * slideshow_move;
    }
    else
    {
      if(slideshow_move == (noOfImages - 1))
      return;

      slideshow_move++;

      var widthOfImage = $(".slideshow_element").width();
      new_height = $(".slideshow_element").eq(slideshow_move).height();

      moveTo = (widthOfImage + 60) * slideshow_move;
    }

    $("#slideshow_holder > .rel").stop().animate(
      {
        "scrollLeft" : moveTo
      });
    $("#slideshow_holder").stop().animate(
      {
        "height" : (new_height + 80) + "px"
      });
  });
});
