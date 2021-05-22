//
$("#myTeamRoster").collapse({ show: true });
//
$("#showMyTeamRoster").on("click", function () {
  //
  if ($(this).hasClass("collapsed") || $(this).hasClass("collapsing")) {
    //
    $(this).children().removeClass("fa-chevron-down");
    $(this).children().addClass("fa-chevron-up");
    //
  } else {
    //
    $(this).children().removeClass("fa-chevron-up");
    $(this).children().addClass("fa-chevron-down");
    //
  }
  //
});
//
