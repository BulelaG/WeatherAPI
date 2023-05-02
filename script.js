// var input = document.querySelector('.input_text');
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');


// button.addEventListener('click', function(name){
// fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f479ff1dec11747d950e13b3116b591d')
// .then(response => response.json())
// .then(data => {
//   var tempValue = data['main']['temp'];
//   var nameValue = data['name'];
//   var descValue = data['weather'][0]['description'];

//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   input.value ="";

// })

// .catch(err => alert("Wrong city name!"));
// })

import requests
import json

// # Enter your API key here
api_key = "YOUR_API_KEY"

 //base URL
url = "http://api.openweathermap.org/data/2.5/weather?"

//Get city name from user
city_name = input("Enter city name : ")

# complete URL with parameters
complete_url = url + "appid=" + api_key + "&q=" + city_name

# Send HTTP request
response = requests.get(complete_url)

# Get JSON data from response
data = response.json()

# Extract required information
temperature = data['main']['temp']
description = data['weather'][0]['description']

# Display weather information
print("Temperature : {:.2f}°C".format(temperature - 273.15))
print("Description : {}".format(description))
