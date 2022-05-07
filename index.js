var btn1 = document.getElementById('search_btn');
var textField = document.getElementById('textBox');
var inputLocation = ''
var date = document.getElementById('date')

// Date
dateArr = new Date().toString().split(" ");
console.log(dateArr);
date.innerHTML = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]} - ${dateArr[4].slice(0,5)} <br />`; // ${dateArr[6]} ${dateArr[7]} ${dateArr[8]}


// Submit Button
btn1.addEventListener("click", function(e) {
    if (textField.value != "") {
        e.preventDefault();

        window.alert("This event listener is working");

        inputLocation = textField.value;
        console.log(inputLocation);
        // callAPI(inputLocation);
    }

    else {
        window.alert("You need to input a city name!");
    }
    
})




const callAPI = (location) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
            'X-RapidAPI-Key': 'dce426f38fmsha3bfe84515ac660p109d9djsn2720dafab401'
        }
    };
    
    fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            var currentWeather = response.data.current_observation;
            var currentTemp = currentWeather.condition.temperature;

            var { city, region, woeid, country, lat, long, timezone_id } = response.location;
            var forecasts = response.forecasts;
        })
        .catch(err => console.error(err));
}

// wind speed is in kmph

// response.data.current_observation

response.data
{
    location: {
      city: 'London',
      region: ' England',
      woeid: 44418,
      country: 'United Kingdom',
      lat: 51.506401,
      long: -0.12721,
      timezone_id: 'Europe/London'
    },
    current_observation: {
      wind: { chill: 34, direction: 245, speed: 8 },
      atmosphere: { humidity: 75, visibility: 10, pressure: 29.47, rising: 0 },
      astronomy: { sunrise: '6:19 am', sunset: '7:47 pm' },
      condition: { code: 26, text: 'Cloudy', temperature: 38 },
      pubDate: 1649384100
    },
    forecasts: [
      {
        day: 'Fri',
        date: 1649386800,
        low: 36,
        high: 52,
        text: 'Cloudy',
        code: 26
      },
      {
        day: 'Sat',
        date: 1649473200,
        low: 34,
        high: 52,
        text: 'Partly Cloudy',
        code: 30
      },
      {
        day: 'Sun',
        date: 1649559600,
        low: 31,
        high: 56,
        text: 'Cloudy',
        code: 26
      },
      {
        day: 'Mon',
        date: 1649646000,
        low: 41,
        high: 58,
        text: 'Rain',
        code: 12
      },
      {
        day: 'Tue',
        date: 1649732400,
        low: 49,
        high: 61,
        text: 'Rain',
        code: 12
      },
      {
        day: 'Wed',
        date: 1649818800,
        low: 47,
        high: 62,
        text: 'Mostly Cloudy',
        code: 28
      },
      {
        day: 'Thu',
        date: 1649905200,
        low: 48,
        high: 60,
        text: 'Cloudy',
        code: 26
      },
      {
        day: 'Fri',
        date: 1649991600,
        low: 51,
        high: 61,
        text: 'Cloudy',
        code: 26
      },
      {
        day: 'Sat',
        date: 1650078000,
        low: 49,
        high: 63,
        text: 'Mostly Cloudy',
        code: 28
      },
      {
        day: 'Sun',
        date: 1650164400,
        low: 46,
        high: 63,
        text: 'Mostly Cloudy',
        code: 28
      },
      {
        day: 'Mon',
        date: 1650250800,
        low: 46,
        high: 62,
        text: 'Mostly Cloudy',
        code: 28
      }
    ]
  }