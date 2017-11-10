$( () => {

  /******************************
        BOARD OBJECT CLASS
  *******************************/

const class Board {
  constructor(id) {
    this.boardId: id,
    this.points: 0,
  }
}


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
    const boardObj = new Board(i);
  }

  $('img.card').on('click', clickCard);
}

/******************************
      DEFAULT BOARD
*******************************/

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
    const boardObj = new Board(i);
  }
}



/******************************
      CLICKING CARDS
*******************************/

const clickCard = () => {
  $(event.currentTarget).attr('class', 'overlay');
  let grid = $(event.currentTarget).parent().parent().parent();

  const unclickCard = () => {
    $(event.currentTarget).attr('class', 'card');
    $('.card').on('click', clickCard);
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
    for (let r = 0; r < 4; r++){
      for (let card = 0; card < 4; card++){
        if ($('#'+ i).eq(0).eq(r).eq(card).hasClass('overlay')) {
          console.log('winner');
        } else {
          return false;
        }
      }
    }
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
  } else {
    generateBoardsDefault();
  }
  // console.log(points);
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
$('.card').on('click', clickCard);
$('h1').on('click', checkWinner);






});
