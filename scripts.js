function updateModal(colNum) {
  if (colNum == 1) {
    $('.carousel').carousel(0)
    $('.modal-title').text('Unredd Posts');
    $('#car-img1').attr('src', 'images/urp1.png');
    $('#car-img2').attr('src', 'images/urp2.png');
  }
  else if (colNum == 2) {
    $('.carousel').carousel(0)
    $('.modal-title').text('What\'s For Lunch?');
    $('#car-img1').attr('src', 'images/wfl1.png');
    $('#car-img2').attr('src', 'images/wfl3.png');
  }
  else if (colNum == 3) {
    $('.carousel').carousel(0)
    $('.modal-title').text('"Let Me Google That For You" Discord Bot');
    $('#car-img1').attr('src', 'images/bot1.png');
    $('#car-img2').attr('src', 'images/bot2.png');
  }
  else if (colNum == 4) {
    $('.carousel').carousel(0)
    $('.modal-title').text('Spooky Ghost');
    $('#car-img1').attr('src', 'images/sg2.png');
    $('#car-img2').attr('src', 'images/sg1.png');
  }
  else if (colNum == 5) {
    $('.carousel').carousel(0)
    $('.modal-title').text('Indeed Sponsored Jobs Blocker');
    $('#car-img1').attr('src', 'images/isjb2.png');
    $('#car-img2').attr('src', 'images/isjb3.png');
  }
  else {
    $('.carousel').carousel(0)
    $('.modal-title').text('Placeholder');
    $('#car-img1').attr('src', 'images/placeholder2.png');
    $('#car-img2').attr('src', 'images/placeholder2.png');
  }
}