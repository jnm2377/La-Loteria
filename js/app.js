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
      // ALSO push random index into empty array (to not repeat images?)
      //or splice index...
          //if removing images, have to take into account that Math.random *56 == 56-- each time
      // simultaneously create a new img with src as that selected URL and append it to modal #cardsInPlay
//when "selected" card image is clicked,
      //open up #cardsInPlay modal

//original!!!!
const $cardsArray = ["images/Loteria_cards/el_alacran.jpg", "images/Loteria_cards/el_arbol.jpg", "images/Loteria_cards/el_barril.jpg", "images/Loteria_cards/el_borracho.jpg", "images/Loteria_cards/el_cantarito.jpg", "images/Loteria_cards/el_catrin.jpg", "images/Loteria_cards/el_cazo.jpg", "images/Loteria_cards/el_corazon.jpg", "images/Loteria_cards/el_cotorro.jpg", "images/Loteria_cards/el_diablito.jpg", "images/Loteria_cards/el_gorrito.jpg", "images/Loteria_cards/el_mundo.jpg", "images/Loteria_cards/el_nopal.jpg", "images/Loteria_cards/el_paraguas.jpg", "images/Loteria_cards/el_pino.jpg", "images/Loteria_cards/el_sol.jpg", "images/Loteria_cards/el_tambor.jpg", "images/Loteria_cards/el_valiente.jpg", "images/Loteria_cards/el_violoncello.jpg", "images/Loteria_cards/la_bandera.jpg", "images/Loteria_cards/la_bota.jpg", "images/Loteria_cards/la_calavera.jpg", "images/Loteria_cards/la_campana.jpg", "images/Loteria_cards/la_corona.jpg", "images/Loteria_cards/la_escalera.jpg", "images/Loteria_cards/la_estrella.jpg", "images/Loteria_cards/la_luna.jpg", "images/Loteria_cards/la_maceta.jpg", "images/Loteria_cards/la_mano.jpg", "images/Loteria_cards/la_palma.jpg", "images/Loteria_cards/la_pera.jpg", "images/Loteria_cards/la_rosa.jpg", "images/Loteria_cards/la_sandia.jpg", "images/Loteria_cards/la_sirena.jpg", "images/Loteria_cards/las_jaras.jpg", "images/Loteria_cards/la_chalupa.jpg", "images/Loteria_cards/la_muerte.jpg", "images/Loteria_cards/el_venado.jpg", "images/Loteria_cards/el_camaron.jpg", "images/Loteria_cards/la_rana.jpg", "images/Loteria_cards/la_arpa.jpg", "images/Loteria_cards/el_melon.jpg", "images/Loteria_cards/el_gallo.jpg", "images/Loteria_cards/la_araña.jpg", "images/Loteria_cards/el_pajaro.jpg", "images/Loteria_cards/la_garza.jpg", "images/Loteria_cards/el_pescado.jpg", "images/Loteria_cards/la_botella.jpg", "images/Loteria_cards/el_bandolon.jpg"];


//for shuffling
const $cardsArrayCopy = ["images/Loteria_cards/el_alacran.jpg", "images/Loteria_cards/el_arbol.jpg", "images/Loteria_cards/el_barril.jpg", "images/Loteria_cards/el_borracho.jpg", "images/Loteria_cards/el_cantarito.jpg", "images/Loteria_cards/el_catrin.jpg", "images/Loteria_cards/el_cazo.jpg", "images/Loteria_cards/el_corazon.jpg", "images/Loteria_cards/el_cotorro.jpg", "images/Loteria_cards/el_diablito.jpg", "images/Loteria_cards/el_gorrito.jpg", "images/Loteria_cards/el_mundo.jpg", "images/Loteria_cards/el_nopal.jpg", "images/Loteria_cards/el_paraguas.jpg", "images/Loteria_cards/el_pino.jpg", "images/Loteria_cards/el_sol.jpg", "images/Loteria_cards/el_tambor.jpg", "images/Loteria_cards/el_valiente.jpg", "images/Loteria_cards/el_violoncello.jpg", "images/Loteria_cards/la_bandera.jpg", "images/Loteria_cards/la_bota.jpg", "images/Loteria_cards/la_calavera.jpg", "images/Loteria_cards/la_campana.jpg", "images/Loteria_cards/la_corona.jpg", "images/Loteria_cards/la_escalera.jpg", "images/Loteria_cards/la_estrella.jpg", "images/Loteria_cards/la_luna.jpg", "images/Loteria_cards/la_maceta.jpg", "images/Loteria_cards/la_mano.jpg", "images/Loteria_cards/la_palma.jpg", "images/Loteria_cards/la_pera.jpg", "images/Loteria_cards/la_rosa.jpg", "images/Loteria_cards/la_sandia.jpg", "images/Loteria_cards/la_sirena.jpg", "images/Loteria_cards/las_jaras.jpg", "images/Loteria_cards/la_chalupa.jpg", "images/Loteria_cards/la_muerte.jpg", "images/Loteria_cards/el_venado.jpg", "images/Loteria_cards/el_camaron.jpg", "images/Loteria_cards/la_rana.jpg", "images/Loteria_cards/la_arpa.jpg", "images/Loteria_cards/el_melon.jpg", "images/Loteria_cards/el_gallo.jpg", "images/Loteria_cards/la_araña.jpg", "images/Loteria_cards/el_pajaro.jpg", "images/Loteria_cards/la_garza.jpg", "images/Loteria_cards/el_pescado.jpg", "images/Loteria_cards/la_botella.jpg", "images/Loteria_cards/el_bandolon.jpg"];


const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
} //Durnstenfeld shuffle algorithm, shuffles an array and returns that shuffled array.
//Have array be shuffled when original submit button at start of game is clicked.
//That way we don't have to randomly select index, but they're already shuffled to begin with, so we can just select index items in order.

let $shuffledArray = shuffle($cardsArrayCopy);
// console.log($shuffledArray);
//

//make event listener so that selectCard() is called on click of img (back of card)
//back of card image never changes

const selectCard = () => {
  let x = $shuffledArray.length - 1;
  let $cardInPlay = $shuffledArray[x];
  if (x >= 0){
    $('#inPlay').attr('src', $cardInPlay);
    let $cardSelected = $('<img>'). attr('src', $cardInPlay).addClass('modalCard');
    let $displayModal = $("#display-cards");
    $displayModal.append($cardSelected);
    $shuffledArray.pop($cardInPlay);
  } else {
      console.log("you are out of cards");
  }
}

$('#deck').on('click', selectCard);







  /******************************
        GENERATE BOARD
  *******************************/
const $container = $('.container');
let players = 0;

//for board shuffling
const $cardsArrayCopy2 = ["images/Loteria_cards/el_alacran.jpg", "images/Loteria_cards/el_arbol.jpg", "images/Loteria_cards/el_barril.jpg", "images/Loteria_cards/el_borracho.jpg", "images/Loteria_cards/el_cantarito.jpg", "images/Loteria_cards/el_catrin.jpg", "images/Loteria_cards/el_cazo.jpg", "images/Loteria_cards/el_corazon.jpg", "images/Loteria_cards/el_cotorro.jpg", "images/Loteria_cards/el_diablito.jpg", "images/Loteria_cards/el_gorrito.jpg", "images/Loteria_cards/el_mundo.jpg", "images/Loteria_cards/el_nopal.jpg", "images/Loteria_cards/el_paraguas.jpg", "images/Loteria_cards/el_pino.jpg", "images/Loteria_cards/el_sol.jpg", "images/Loteria_cards/el_tambor.jpg", "images/Loteria_cards/el_valiente.jpg", "images/Loteria_cards/el_violoncello.jpg", "images/Loteria_cards/la_bandera.jpg", "images/Loteria_cards/la_bota.jpg", "images/Loteria_cards/la_calavera.jpg", "images/Loteria_cards/la_campana.jpg", "images/Loteria_cards/la_corona.jpg", "images/Loteria_cards/la_escalera.jpg", "images/Loteria_cards/la_estrella.jpg", "images/Loteria_cards/la_luna.jpg", "images/Loteria_cards/la_maceta.jpg", "images/Loteria_cards/la_mano.jpg", "images/Loteria_cards/la_palma.jpg", "images/Loteria_cards/la_pera.jpg", "images/Loteria_cards/la_rosa.jpg", "images/Loteria_cards/la_sandia.jpg", "images/Loteria_cards/la_sirena.jpg", "images/Loteria_cards/las_jaras.jpg", "images/Loteria_cards/la_chalupa.jpg", "images/Loteria_cards/la_muerte.jpg", "images/Loteria_cards/el_venado.jpg", "images/Loteria_cards/el_camaron.jpg", "images/Loteria_cards/la_rana.jpg", "images/Loteria_cards/la_arpa.jpg", "images/Loteria_cards/el_melon.jpg", "images/Loteria_cards/el_gallo.jpg", "images/Loteria_cards/la_araña.jpg", "images/Loteria_cards/el_pajaro.jpg", "images/Loteria_cards/la_garza.jpg", "images/Loteria_cards/el_pescado.jpg", "images/Loteria_cards/la_botella.jpg", "images/Loteria_cards/el_bandolon.jpg"];


const generateBoards = ($numberOfPlayers) => {
  $('.default').remove();
  for (let i = 1; i <= $numberOfPlayers; i++){
    let x = 0; //will indicate the index number of cards array for img src
    shuffle($cardsArrayCopy2); //should shuffle array each time it makes a new board
    let $grid = $('<div>').addClass('grid').attr('id', i);
    let $board = $('<div>').addClass('board');
      for (let r=0; r<4; r++){
        let $row = $('<div>').addClass('row');
          for (let img=0 ; img<4; img++){
            let $img = $('<img>').addClass('card').attr('src', $cardsArrayCopy2[x]);
            $row.append($img);
            x += 1; //want to loop through array for each image...
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
            APPENDING FOOTER
        *******************************/
  const $footer = $('<div>').addClass('footer');
  const $footerText = $('<div>').attr('id', 'footerText');
  $footerText.html('<h2>Created with <span id= "heart">&hearts;</span> by Josefina Mancilla </h2>');
  $footer.append($footerText);
  $container.append($footer);
        /******************************
          CLICKING EVENT LISTENER
        *******************************/
  $('.card').on('click', clickCard);
}

/******************************
      DEFAULT BOARD
*******************************/

const generateBoardsDefault = () => {
  for (let i = 1; i <= 2; i++){
    let x = 0; //will indicate the index number of cards array for img src
    shuffle($cardsArrayCopy2); //should shuffle array each time it makes a new board
    let $grid = $('<div>').addClass('grid').attr('id', i);
    let $board = $('<div>').addClass('board');
      for (let r=0; r<4; r++){
        let $row = $('<div>').addClass('row');
          for (let img=0 ; img<4; img++){
            let $img = $('<img>').addClass('card').attr('src', $cardsArrayCopy2[x]);
            $row.append($img);
            x += 1; //want to loop through array for each image...
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
            APPENDING FOOTER
        *******************************/
  const $footer = $('<div>').addClass('footer');
  const $footerText = $('<div>').attr('id', 'footerText');
  $footerText.html('<h2>Created with <span id= "heart">&hearts;</span> by Josefina Mancilla </h2>');
  $footer.append($footerText);
  $container.append($footer);
          /******************************
            CLICKING EVENT LISTENER
          *******************************/
  $('.card').on('click', clickCard);

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
          // console.log('break');
          break;
        }
      }
    }
  }
  //dispays winner message only after checking ALL boards, IF there is a winner
  if ($numOfWinners >= 1){
    $('#winner').text($winnerNames);
    $('#modal-winner1').show('slow');
    $('#reset').on('click', ()=> {
      location.reload();
    });
    $('#close3').on('click', () => {
      $('#modal-winner1').hide('slow');
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
  // $('#modal-instructions').css('display', 'block');
  $('#modal-instructions').show('slow');
}

const closeNav= () => {
  $('#modal-instructions').hide('slow');
}

const openCards = () => {
  $('#modal-cardsInPlay').show('slow');
}

const closeCards = () => {
  $('#modal-cardsInPlay').hide('slow');
}


/******************************
      EVENT LISTENERS
*******************************/
$('#submit').on('click', closeStart);
$('#triangle').on('click', openNav);
$('#close').on('click', closeNav);
$('#deck').on('click', checkWinner);
$('#inPlay').on('click', openCards);
$('#close2').on('click', closeCards);
// $('#player-input').on('keydown', (event) => {
//   if(event.keycode === 13){
//     $('#submit').click();
//   }
// });








});
