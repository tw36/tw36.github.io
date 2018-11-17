function updateModal(colNum) {
  if (colNum == 1) {
    $('.modal-title').text('What\'s For Lunch?');
    $('.modal-footer span').text('Beep');
  }
  else if (colNum == 2) {
    $('.modal-title').text('Unredd Posts');
    $('.modal-footer span').text('Beep');
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