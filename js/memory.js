$(document).ready(function() {
  //assign cards to positions when page loads
    //random
    //never have an individual card (without at least one pair)
      //always an even number of any given card

  //list of images, associated with values

  //when user clicks on a card, do a thing

  //boolean isFirstCard = true
  $(".card").click(function(event){
    event.preventDefault();
    //IF (isFirstCard){
      //get the value assigned to card clicked
      //card1 value = value
      //replace image with card face associated with value
      //isFirstCard = false
    //  }
    //ELSE
      //get the value assigned to card clicked
      //card2 value = value
      //replace image with card face associated with value
      //IF (card1 value == card2 value){
        // remove both cards from the board
        // IF(any cards remain on the board){
          //continue the game
        //} ELSE {
          //player wins, game ends, show button to reset
        //}
      //} ELSE {
        //replace images of both cards with backs
      //}
      //isFirstCard = true
  })
})
