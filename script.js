$(function () {
  const currentHour = dayjs().hour();
  $('.saveBtn').on('click', function () {
    const userInput = $(this).siblings('.description').val().trim();
    const timeBlockId = $(this).parent().attr('id');
    localStorage.setItem(timeBlockId, userInput);
  });
  $('.time-block').each(function () {
    const timeBlockId = $(this).attr('id');
    const timeBlockHour = parseInt(timeBlockId.replace('hour-', ''));
    if (timeBlockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
  $('.time-block').each(function () {
    const timeBlockId = $(this).attr('id');
    const userInput = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(userInput);
  });
  const currentDate = dayjs().format('dddd, MMMM D, h:mm A');
$('#currentDay').text(currentDate);

  $('.description').on('blur', function() {
    const userInput = $(this).val().trim();
    if (!userInput) {
      $(this).addClass('empty');
      $(this).siblings('.warning').show();
    } else {
      $(this).removeClass('empty');
      $(this).siblings('.warning').hide();
    }
  });
});
