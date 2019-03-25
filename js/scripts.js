$(document).ready(function(){

  $("#submit").click(function(event) {
    var inputName = document.getElementById('name').value;

            // Prevent the page from reloading
            event.preventDefault();
            alert("suggester")
            // Function that suugests destinations based on whether someone likes travelling and the price range
            var likeTravel = () =>{
              if(document.getElementById('y').checked && document.getElementById('mid').checked){
                return( inputName + " , " + "You should visit Antigua, Colombia and Peru next time you travel");


              }
              else if(document.getElementById('y').checked && document.getElementById('high').checked){
                 return(inputName + " , " + "Japan, China and South Korea await you on your next travel");

              }
              else if (document.getElementById('y').checked && document.getElementById('veryhigh').checked) {
                 return (inputName + " ,"+ " The Carribeans , Jamaica and Bahamas are amazing this time of year");

              }
              else if (document.getElementById('y').checked && document.getElementById('low').checked) {
                 return(inputName + " ,"+" The Pearl of Africa Uganda, Rwanda and Kenya welcome with a loving embrace");

              }
              else if (document.getElementById('n').checked && document.getElementById('low').checked) {
                 return(inputName + " ,"+"Doesnt hurt to visit these amazing places: Egypt,South Africa and Morroco");

              }
              else if (document.getElementById('n').checked && document.getElementById('mid').checked) {
                 return(inputName + " ," + " Give yourself a chance to discover yourself with these amazing destinations :Australia, New Zealand and Papua New Guinea");

              }
              else if (document.getElementById('n').checked && document.getElementById('high').checked) {
                 return(inputName +" ," + "Paris, Shanghai and Milan might be just the place for a highroller like you");

              }
              else if (document.getElementById('n').checked && document.getElementById('veryhigh').checked) {
                 return(inputName + " , " + "England , Scotland and Wales welcome you ");

              }
              else{
              return(inputName + " ," +"The Gulf countries of Bahrain, Qatar and UAE are thrilled for your visit");
            }
};

        var suggester = likeTravel();

        $(".suggestions").append(suggester)
        $(".suggestions").slideDown(600);


  });

  });
