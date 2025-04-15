$(document).ready(function () {
  $(window).on("mousemove", function (event) {
    // Calculate the movement offset relative to the center of the window
    const moveX = (event.pageX - $(window).width() / 2) * 0.04;
    const moveY = (event.pageY - $(window).height() / 2) * 0.04;
    // Apply margins to the image
    $("#two").css({
      marginLeft: `${moveX}px`,
      marginTop: `${moveY}px`,
      marginRight: `${-moveX}px`,
      marginBottom: `${-moveY}px`,
    });
  });
});
