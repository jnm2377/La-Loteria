$( () => {

  /******************************
        BOARD OBJECT CLASS
  *******************************/

class Board {
  constructor(id) {
    this.boardId = id;
    this.points = 0;
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
  $('img.card').on('click', clickCard);
}



/******************************
      CLICKING CARDS
*******************************/

const unclickCard = (event) => {
  $(event.currentTarget).attr('class', 'card');
  $(event.currentTarget).on('click', clickCard);
}

const clickCard = (event) => {
  $(event.currentTarget).attr('class', 'overlay');
  // let grid = $(event.currentTarget).parent().parent().parent();
  $(event.currentTarget).on('click', unclickCard);
  checkWinner();
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
let $overlay = 0;
  for (let i = 1; i <= players; i++){
    let $grid = $(`#${i}`).contents();
    let $board = $grid.eq(0).contents();
    // console.log($board);
    for (let r = 0; r < 4; r++){
      let $row = $board.eq(r).contents();
      // console.log($row);
      for (let card = 0; card < 4; card++) {
        let $card = $row.eq(card);
        if ($card.hasClass('overlay')) {
          $overlay++
          continue;
        } else {
          console.log('break');
          break;
        }
      }
    }
  }
  if ($overlay === 16){
    console.log('winner');
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
// $('.card').on('click', clickCard);







});
