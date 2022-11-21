$(document).ready(function () {

  var saveButton = $(".saveBtn");

  // targets save buttons and enables 
  saveButton.on("click", function () {
    var textEl = $(this).parent().children(".description").val();
    var timeEl = $(this).parent().attr("id");
    localStorage.setItem(timeEl, textEl);
  })

  var currentTime = dayjs().hour();
  console.log(currentTime);


  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").slice(5));
    console.log(hourBlock);
    $(this).children(".description").val(localStorage.getItem($(this).attr("id")));

    if (currentTime === hourBlock) {
      $(this).addClass("present");
    }
    else if (currentTime < hourBlock) {
      $(this).addClass("future");
    }
    else {
      $(this).addClass("past");
    }
  });

  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("MMMM D, YYYY HH:mm"));

});
