function updateModal(colNum) {
  if (colNum == 1) {
    $('.modal-title').text('What\'s For Lunch?');
    $('.modal-footer span').text('Beep');
    $('#car-img1').attr('src', 'images/wfl1.png');
    $('#car-img2').attr('src', 'images/wfl3.png');
  }
  else if (colNum == 2) {
    $('.modal-title').text('Unredd Posts');
    $('.modal-footer span').text('Beep');
    $('#car-img1').attr('src', 'images/urp1.png');
    $('#car-img2').attr('src', 'images/urp2.png');
  }
  else if (colNum == 3) {
    $('.modal-title').text('"Let Me Google That For You" Discord Bot');
    $('.modal-footer span').text('Beep');
  }
  else if (colNum == 4) {
    $('.modal-title').text('Spooky Ghost');
    $('.modal-footer span').text('Beep');
  }
  else if (colNum == 5) {
    $('.modal-title').text('Indeed Sponsored Jobs Blocker');
    $('.modal-footer span').text('Beep');
  }
  else {
    $('.modal-title').text('Placeholder');
    $('.modal-footer span').text('Placeholder Two');
  }
}