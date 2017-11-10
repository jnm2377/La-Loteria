$( () => {
  /******************************
        MAIN CARDS
  *******************************/
// have 2 image divs
      // one "back of cards"
      // one "blank"/"selected" card
// create 2 arrays
      //original array with img src urls
      //empty array
// when deck div is clicked, select random index url and assign that as the attr src for the "selected card" image
      // simultaneously create a new img with src as that selected URL and append it to modal #cardsInPlay
//when "selected" card image is clicked,
      //open up #cardsInPlay modal


const $deck = [];
const $inPlay = [];

const selectCard = () => {
  $deck[Math.floor(Math.random() * 56)]
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
  }
        /******************************
          CLICKING EVENT LISTENER
        *******************************/
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
  }
          /******************************
            CLICKING EVENT LISTENER
          *******************************/
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
  $(event.currentTarget).on('click', unclickCard);
}



/******************************
      CHECKING WINNER
*******************************/

// loops through every board (loop # determined by players variable)
    // loop through using i, and #id number i
// loops through every row and every image in every row to check if hasClass('overlay') (this part much like generating function loops)
// if returns false, stop
// if all true, invoke winner function

const checkWinner = () => {
// let $overlay = 0;
let $winnerNames = "";
let $numOfWinners = 0;
console.log($winnerNames);
  for (let i = 1; i <= players; i++){
    let $overlay = 0; //if equals 16, will determine at least one winner (row 145-150)
    //LOOPS THRU GRIDS (grid = i)
    let $grid = $(`#${i}`).contents();
    //SELECTS BOARD OF GRID (below)
    let $board = $grid.eq(0).contents();
    // console.log($board);
    for (let r = 0; r < 4; r++){
      //LOOPS THRU ROWS OF EACH BOARD
      let $row = $board.eq(r).contents();
      // console.log($row);
      for (let card = 0; card < 4; card++) {
        //LOOPS THRU CARDS OF EACH ROW
        let $card = $row.eq(card);
        if ($card.hasClass('overlay')) {
          $overlay++
          // want to store the names of players that have won to display name on winner alert text
          if ($overlay === 16){
            $numOfWinners++;
            let $winner = $grid.eq(1).text();
            $winnerNames +=$winner + "  ";
            console.log($winnerNames);
          }
          continue;
          //will keep looping until false
        } else {
          console.log('break');
          break;
        }
      }
    }
  }
  //dispays winner message only after checking ALL boards, IF there is a winner
  if ($numOfWinners >= 1){
    $('#winner').text($winnerNames);
    $('#modal-winner1').css('display', 'block');
    $('#reset').on('click', ()=> {
      $('#modal-winner1').css('display', 'none');
      // location.reload();
      // do we want to reload or reset parameters to beginning, and if so, how?
    });
  }
}



/******************************
      MODAL EVENT HANDLERS
*******************************/
const closeStart= () => {
  $('#modal-start').hide('slow');
  let $numberOfPlayers = $('#player-input').val();
  if ($numberOfPlayers > 1){
    generateBoards($numberOfPlayers);
  } else {
    generateBoardsDefault();
  }
}

const openNav= () => {
  $('#modal-instructions').css('display', 'block');
}

const closeNav= () => {
  $('#modal-instructions').hide('slow');
}



/******************************
      EVENT LISTENERS
*******************************/
$('#submit').on('click', closeStart);
$('#hearts').on('click', openNav);
$('#close').on('click', closeNav);
$('h1').on('click', checkWinner);
      //eventually change this so it runs when deck of cards is clicked!







});
