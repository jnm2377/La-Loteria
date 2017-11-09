$( () => {

  /******************************
        GENERATE BOARD
  *******************************/

let $grid = $('<div>').addClass('grid');
let $board = $('<div>').addClass('board');
let $row1 = $('<div>');
let $row2 = $('<div>');
let $row3 = $('<div>');
let $row4 = $('<div>');








/******************************
      MODAL EVENT LISTENERS
*******************************/
const closeStart= () => {
  $('#modal-start').css('display', 'none');
}

const openNav= () => {
  $('#modal-instructions').css('display', 'block');
}

const closeNav= () => {
  $('#modal-instructions').css('display', 'none');
}

$('#submit').on('click', closeStart);
$('#hearts').on('click', openNav);
$('#close').on('click', closeNav);









});
