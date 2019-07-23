// array to list out all the cities 


// function to add a city to the option selection 

function addCity (city) {

$('#city-type').append('<option>') + city + '</option>'; 

// loop to add one for each

} ; 

// loop to add for each city 

var cities = {'NYC', 'SF', 'LA', ;'ATX', 'SYD'}; 

cities.foreach(addCity); 

// switch background function 

function switchBG () {


    var input = $('#city-type').val(); 

    if (input === NYC) { $('body').css('background','url(images/nyc.jpg)')

    }

    else if (input === SF) { $('body').css('background','url(images/sf.jpg)')

    }

    else if (input === LA) { $('body').css('background','url(images/la.jpg)')

    }

    else if (input === ATX) { $('body').css('background','url(images/austin.jpg)')

    }

    else if (input === SYD) { $('body').css('background','url(images/sydney.jpg)')

    }

};


// listener for when when input is selected 

$('#city-type').click(switchBG); 

