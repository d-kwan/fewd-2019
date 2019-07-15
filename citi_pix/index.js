// define variable city 

var city; 

// when you selector is 'submit button' and you click it, initiate "submit" function

$('#submit-btn').click(submit)

  // Define the function

function submit(event) {
  
    // clears the  default 
    event.preventDefault();
    
    // store variable 
    var city = $("#city-type").val();
    
    // display in console 

    console.log(city);

    // change bg based on City inputted 

    if (city === 'New York' || city === 'NYC' || city === 'New York City') {
        $('body').css('background','url(images/nyc.jpg)');
      } else if (city === 'San Francisco' || city === 'Bay Area' || city === 'SF') {
        $('body').css('background','url(images/sf.jpg)');
      } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
        $('body').css('background','url(images/la.jpg)');
      } else if (city === 'Austin' || city === 'ATX') {
        $('body').css('background','url(images/austin.jpg)');
      } else if (city === 'Sydney' || city === 'SYD') {
        $('body').css('background','url(images/sydney.jpg)');
      } else {
        $('body').css('background','url(images/citipix_skyline.jpg)');
      }
  }
