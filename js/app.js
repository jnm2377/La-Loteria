$( () => {

  /******************************
        GENERATE BOARD
  *******************************/
const $container = $('.container');
let players = 0;

const generateBoards = ($numberOfPlayers) => {
  $('.default').remove();
  for (let i = 1; i <= $numberOfPlayers; i++){
    let $grid = $('<div>').addClass('grid').attr('id', i);
    let $board = $('<div>').addClass('board');
      for (let r=0; r<4; r++){
        let $row = $('<div>').addClass('row');
          for (let img=0 ; img<4; img++){
            let $img = $('<img>').addClass('card').attr('src', '#');
            $row.append($img);
          }
        $board.append($row);
      }
    let $name = $('<h3>').addClass('playerName').text("Player " + i);
    $grid.append($board);
    $grid.append($name);
    $container.append($grid);
    players = i;
  }

  $('img.card').on('click', clickCard);
}



const generateBoardsDefault = () => {
  for (let i = 1; i <= 2; i++){
    let $grid = $('<div>').addClass('grid').attr('id', i);
    let $board = $('<div>').addClass('board');
      for (let r=0; r<4; r++){
        let $row = $('<div>').addClass('row');
          for (let img=0 ; img<4; img++){
            let $img = $('<img>').addClass('card').attr('src', '#');
            $row.append($img);
          }
        $board.append($row);
      }
    $grid.addClass('default').append($board);
    let $name = $('<h3>').addClass('playerName').text("Player " + i);
    $grid.append($name);
    $container.append($grid);
    players = i;
  }
}

generateBoardsDefault();



/******************************
      CLICKING CARDS
*******************************/

const clickCard = () => {
  $(event.currentTarget).attr('class', 'overlay');

  const unclickCard = () => {
    $(event.currentTarget).attr('class', 'card');
  }

  $('.overlay').on('click', unclickCard);
}



/******************************
      CHECKING WINNER
*******************************/

// loops through every board (loop # determined by players variable) --how to make it check on every board????
    // loop through using i, and #id number i

// loops through every row and every image in every row to check if hasClass('overlay') (this part much like generating function loops)
// if returns false, stop
// if all true, invoke winner function

const checkWinner = () => {
  for (let i = 1; i <= players; i++){
    
  }
}















/******************************
      MODAL EVENT HANDLERS
*******************************/
const closeStart= () => {
  // $('#modal-start').css('display', 'none');
  $('#modal-start').hide('slow');
  let $numberOfPlayers = $('#player-input').val();
  if ($numberOfPlayers > 1){
    generateBoards($numberOfPlayers);
  }
}

const openNav= () => {
  $('#modal-instructions').css('display', 'block');
}

const closeNav= () => {
  // $('#modal-instructions').css('display', 'none');
  $('#modal-instructions').hide('slow');
}



/******************************
      EVENT LISTENERS
*******************************/
$('#submit').on('click', closeStart);
$('#hearts').on('click', openNav);
$('#close').on('click', closeNav);
$('img.card').on('click', clickCard);








});
