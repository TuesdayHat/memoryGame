$(document).ready(function() {
  var cardValues = {
    "king": "../images/king.png",
    "queen":"../images/queen 2.png",
    "jack":"../images/jack.png",
    "ace":"../images/ace.png",
    "ten":"../images/10.png",
  };
  var displayPos = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10"];

  //assign cards to positions when page loads
    //random
    //never have an individual card (without at least one pair)
      //always an even number of any given card

  //list of images, associated with values

  //when user clicks on a card, do a thing

  //boolean isFirstCard = true

  assignCards();
  for (var i = 0; i<displayPos.length; i++){
    var pos = diplayPos[i];
    var val = displayVals[i];
    $("#"+pos).attr(value) = val;
  }



  var isFirstCard = true;
  var card1;
  var card2;
  $(".card").click(function(event){
    event.preventDefault();
    //IF (isFirstCard){
      //get the value assigned to card clicked
      //card1 value = value
      //replace image with card face associated with value
      //isFirstCard = false
    //  }
    if(isFirstCard){
      card1 = $(this).val();
      //flip card to show face
      isFirstCard = false;
    }else {
      card2 = $(this).val();
      //flip card to show face
      if (card1 == card2){
        this.hide();
        //remove the card
        //check if any cards remain
      } else {
        //flip the card back over
      }

      isFirstCard = true;
    }
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
