const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '28a5a768c2mshdf87e0357c5b3c5p1f2bb9jsnbe974cb8e0bb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let searchWeatherButton = document.querySelector(`#search-weather-btn`);
searchWeatherButton.addEventListener(`click`, getWeatherInfo);
/**
 * function to get the weather Info for a given city.
 */
async function getWeatherInfo() {
	console.log(`------getWeatherInfo start------`);
	let searchedText = document.querySelector(`#searched-text`);
	let getCityName = document.querySelector(`#searched-text`).value;
	if (getCityName === ``) {
		alert(`City Name field is Empty... Please enter City Name`);
		displayDefaultWeatherInfo();
	} else {
		console.log(`Logging Searched City Name: ${getCityName}`);
		/**
		 * Fetching Weather Details: 
		 */
		console.log(`------Fetching Lucknow Weather Details start------`);
		let weather = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${getCityName}`, options)
			.then(response => response.json())
			.then(response => { return response })
			.catch(err => { console.error(err) });
		if (weather.hasOwnProperty(`error`)) {
			console.log(`Incorrect City Name in API.....`);
			searchedText.value = ``;
			alert(`Error while fetching the weather deatils.. City Name can be incorrect...`);
			displayDefaultWeatherInfo();
		} else {
			let displayDefaultWeatherCity = document.querySelector(`#display-default-weather-city`);
			let temperatureHeading = document.querySelector(`#temp-heading`);
			let temperatureDisplay = document.querySelector(`#temp-display-actual`);
			let temperatureMinimum = document.querySelector(`#temp-minimum`);
			let temperatureMaximum = document.querySelector(`#temp-maximum`);
			let humidityHeading = document.querySelector(`#humidity-heading`);
			let humidityDisplay = document.querySelector(`#humidity-display-actual`);
			let windDegrees = document.querySelector(`#wind-degree`);
			let feelsLike = document.querySelector(`#feels-like`);
			let windHeading = document.querySelector(`#wind-heading`);
			let windDisplay = document.querySelector(`#wind-display-actual`);
			let sunriseTime = document.querySelector(`#sunrise-time`);
			let sunsetTime = document.querySelector(`#sunset-time`);
			searchedText.value = ``;
			displayDefaultWeatherCity.innerText = `Weather for ${getCityName}`;
			temperatureHeading.innerText = `${weather.temp}°C`;
			temperatureDisplay.innerText = `Temperature is: ${weather.temp}°C`;
			temperatureMinimum.innerText = `Minimum Temperature is: ${weather.min_temp}°C`;
			temperatureMaximum.innerText = `Maximum Temperature is: ${weather.max_temp}°C`;
			humidityHeading.innerText = `${weather.humidity}%`;
			humidityDisplay.innerText = `Humididity is: ${weather.humidity}`;
			windDegrees.innerText = `Wind Degree is: ${weather.wind_degrees}`;
			feelsLike.innerText = `Feels like: ${weather.feels_like}`;
			windHeading.innerText = `${weather.wind_speed} km/hr`;
			windDisplay.innerText = `Wind Speed is: ${weather.wind_speed}`;
			sunriseTime.innerText = `Sunrise Time is: ${formatEpochTimeToHumanTime(weather.sunrise)}`;
			sunsetTime.innerText = `Sunset Time is: ${formatEpochTimeToHumanTime(weather.sunset)}`;
		}
	}
	console.log(`------getWeatherInfo ends------`);
}
/**
 * function to display weather of some common cities.
 */
async function getWeatherDetailsOfDifferentPlaces() {
	console.log(`------getWeatherDetailsOfDifferentPlaces start------`);
	let cityFirstCloutPct = document.querySelector(`#city-first-pct`);
	let cityFirstFeelsLike = document.querySelector(`#city-first-feels-like`);
	let cityFirstHumidity = document.querySelector(`#city-first-humidity`);
	let cityFirstMaxTemperature = document.querySelector(`#city-first-max-temp`);
	let cityFirstMinTemperature = document.querySelector(`#city-first-min-temp`);
	let cityFirstSunrise = document.querySelector(`#city-first-sunrise`);
	let cityFirstSunset = document.querySelector(`#city-first-sunset`);
	let cityFirstTemperature = document.querySelector(`#city-first-temp`);
	let cityFirstWindDegrees = document.querySelector(`#city-first-wind-degrees`);
	let cityFirstWindSpeed = document.querySelector(`#city-first-wind-speed`);

	let citySecondCloutPct = document.querySelector(`#city-second-pct`);
	let citySecondFeelsLike = document.querySelector(`#city-second-feels-like`);
	let citySecondHumidity = document.querySelector(`#city-second-humidity`);
	let citySecondMaxTemperature = document.querySelector(`#city-second-max-temp`);
	let citySecondMinTemperature = document.querySelector(`#city-second-min-temp`);
	let citySecondSunrise = document.querySelector(`#city-second-sunrise`);
	let citySecondSunset = document.querySelector(`#city-second-sunset`);
	let citySecondTemperature = document.querySelector(`#city-second-temp`);
	let citySecondWindDegrees = document.querySelector(`#city-second-wind-degrees`);
	let citySecondWindSpeed = document.querySelector(`#city-second-wind-speed`);

	let cityThirdCloutPct = document.querySelector(`#city-third-pct`);
	let cityThirdFeelsLike = document.querySelector(`#city-third-feels-like`);
	let cityThirdHumidity = document.querySelector(`#city-third-humidity`);
	let cityThirdMaxTemperature = document.querySelector(`#city-third-max-temp`);
	let cityThirdMinTemperature = document.querySelector(`#city-third-min-temp`);
	let cityThirdSunrise = document.querySelector(`#city-third-sunrise`);
	let cityThirdSunset = document.querySelector(`#city-third-sunset`);
	let cityThirdTemperature = document.querySelector(`#city-third-temp`);
	let cityThirdWindDegrees = document.querySelector(`#city-third-wind-degrees`);
	let cityThirdWindSpeed = document.querySelector(`#city-third-wind-speed`);

	let cityFourthCloutPct = document.querySelector(`#city-fourth-pct`);
	let cityFourthFeelsLike = document.querySelector(`#city-fourth-feels-like`);
	let cityFourthHumidity = document.querySelector(`#city-fourth-humidity`);
	let cityFourthMaxTemperature = document.querySelector(`#city-fourth-max-temp`);
	let cityFourthMinTemperature = document.querySelector(`#city-fourth-min-temp`);
	let cityFourthSunrise = document.querySelector(`#city-fourth-sunrise`);
	let cityFourthSunset = document.querySelector(`#city-fourth-sunset`);
	let cityFourthTemperature = document.querySelector(`#city-fourth-temp`);
	let cityFourthWindDegrees = document.querySelector(`#city-fourth-wind-degrees`);
	let cityFourthWindSpeed = document.querySelector(`#city-fourth-wind-speed`);

	/**
	 * Fetching Lucknow Weather: 
	 */
	console.log(`------Fetching Lucknow Weather Details start------`);
	let weatherDetailsLucknow = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	cityFirstCloutPct.innerText = `${weatherDetailsLucknow.cloud_pct}%`;
	cityFirstFeelsLike.innerText = `${weatherDetailsLucknow.feels_like}°C`;
	cityFirstHumidity.innerText = weatherDetailsLucknow.humidity;
	cityFirstMaxTemperature.innerText = `${weatherDetailsLucknow.max_temp}°C`;
	cityFirstMinTemperature.innerText = `${weatherDetailsLucknow.min_temp}°C`;
	cityFirstSunrise.innerText = formatEpochTimeToHumanTime(weatherDetailsLucknow.sunrise);
	cityFirstSunset.innerText = formatEpochTimeToHumanTime(weatherDetailsLucknow.sunset);
	cityFirstTemperature.innerText = `${weatherDetailsLucknow.temp}°C`;
	cityFirstWindDegrees.innerText = weatherDetailsLucknow.wind_degrees;
	cityFirstWindSpeed.innerText = `${weatherDetailsLucknow.wind_speed} km/hr`;
	console.log(`------Fetching Lucknow Weather Details ends------`);

	/**
	 * Fetching Kolkata Weather: 
	 */
	console.log(`------Fetching Kokata Weather Details start------`);
	let weatherDetailsKolkata = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	citySecondCloutPct.innerText = `${weatherDetailsLucknow.cloud_pct}%`;
	citySecondFeelsLike.innerText = `${weatherDetailsKolkata.feels_like}°C`;
	citySecondHumidity.innerText = weatherDetailsKolkata.humidity;
	citySecondMaxTemperature.innerText = `${weatherDetailsKolkata.max_temp}°C`;
	citySecondMinTemperature.innerText = `${weatherDetailsKolkata.min_temp}°C`;
	citySecondSunrise.innerText = formatEpochTimeToHumanTime(weatherDetailsKolkata.sunrise);
	citySecondSunset.innerText = formatEpochTimeToHumanTime(weatherDetailsKolkata.sunset);
	citySecondTemperature.innerText = `${weatherDetailsKolkata.temp}°C`;
	citySecondWindDegrees.innerText = weatherDetailsKolkata.wind_degrees;
	citySecondWindSpeed.innerText = `${weatherDetailsKolkata.wind_speed} km/hr`;
	console.log(`------Fetching Kolkata Weather Details ends------`);

	/**
	 * Fetching Bangkok Weather: 
	 */
	console.log(`------Fetching Bangkok Weather Details start------`);
	let weatherDetailsBangkok = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangkok', options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	cityThirdCloutPct.innerText = `${weatherDetailsBangkok.cloud_pct}%`;
	cityThirdFeelsLike.innerText = `${weatherDetailsBangkok.feels_like}°C`;
	cityThirdHumidity.innerText = weatherDetailsBangkok.humidity;
	cityThirdMaxTemperature.innerText = `${weatherDetailsBangkok.max_temp}°C`;
	cityThirdMinTemperature.innerText = `${weatherDetailsBangkok.min_temp}°C`;
	cityThirdSunrise.innerText = formatEpochTimeToHumanTime(weatherDetailsBangkok.sunrise);
	cityThirdSunset.innerText = formatEpochTimeToHumanTime(weatherDetailsBangkok.sunset);
	cityThirdTemperature.innerText = `${weatherDetailsBangkok.temp}°C`;
	cityThirdWindDegrees.innerText = weatherDetailsBangkok.wind_degrees;
	cityThirdWindSpeed.innerText = `${weatherDetailsBangkok.wind_speed} km/hr`;
	console.log(`------Fetching Bangkok Weather Details ends------`);

	/**
	 * Fetching Delhi Weather: 
	 */
	console.log(`------Fetching Delhi Weather Details start------`);
	let weatherDetailsDelhi = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	cityFourthCloutPct.innerText = `${weatherDetailsDelhi.cloud_pct}%`;
	cityFourthFeelsLike.innerText = `${weatherDetailsDelhi.feels_like}°C`;
	cityFourthHumidity.innerText = weatherDetailsDelhi.humidity;
	cityFourthMaxTemperature.innerText = `${weatherDetailsDelhi.max_temp}°C`;
	cityFourthMinTemperature.innerText = `${weatherDetailsDelhi.min_temp}°C`;
	cityFourthSunrise.innerText = formatEpochTimeToHumanTime(weatherDetailsDelhi.sunrise);
	cityFourthSunset.innerText = formatEpochTimeToHumanTime(weatherDetailsDelhi.sunset);
	cityFourthTemperature.innerText = `${weatherDetailsDelhi.temp}°C`;
	cityFourthWindDegrees.innerText = weatherDetailsDelhi.wind_degrees;
	cityFourthWindSpeed.innerText = `${weatherDetailsDelhi.wind_speed} km/hr`;
	console.log(`------Fetching Delhi Weather Details ends------`);
	console.log(`------getWeatherDetailsOfDifferentPlaces start------`);
}
/**
 * function to convert epoch time to human time. 
 * @param {*} timeInMilliSeconds 
 * @returns 
 */
function formatEpochTimeToHumanTime(timeInMilliSeconds) {
	let dateObject = new Date(timeInMilliSeconds * 1000);
	let hour = dateObject.getHours();
	let timeZone = `AM`;
	let minutes = dateObject.getMinutes();
	if (12 < hour && hour <= 24) {
		timeZone = `PM`;
		hour = hour % 12;
	}
	return `${hour}: ${minutes} ${timeZone}`;
}
/**
 * function to display deafult weather Info. 
 */
async function displayDefaultWeatherInfo() {
	console.log(`------displayDefaultWeatherInfo start------`);
	let defaultCityName = `Indore`;
	console.log(`Logging Searched City Name: ${defaultCityName}`);
	/**
	 * Fetching Weather Details: 
	 */
	console.log(`------Fetching Lucknow Weather Details start------`);
	let weather = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${defaultCityName}`, options)
		.then(response => response.json())
		.then(response => { return response })
		.catch(err => console.error(err));
	let displayDefaultWeatherCity = document.querySelector(`#display-default-weather-city`);
	let temperatureHeading = document.querySelector(`#temp-heading`);
	let temperatureDisplay = document.querySelector(`#temp-display-actual`);
	let temperatureMinimum = document.querySelector(`#temp-minimum`);
	let temperatureMaximum = document.querySelector(`#temp-maximum`);
	let humidityHeading = document.querySelector(`#humidity-heading`);
	let humidityDisplay = document.querySelector(`#humidity-display-actual`);
	let windDegrees = document.querySelector(`#wind-degree`);
	let feelsLike = document.querySelector(`#feels-like`);
	let windHeading = document.querySelector(`#wind-heading`);
	let windDisplay = document.querySelector(`#wind-display-actual`);
	let sunriseTime = document.querySelector(`#sunrise-time`);
	let sunsetTime = document.querySelector(`#sunset-time`);
	displayDefaultWeatherCity.innerText = `Weather for ${defaultCityName}`;
	temperatureHeading.innerText = `${weather.temp}°C`;
	temperatureDisplay.innerText = `Temperature is: ${weather.temp}°C`;
	temperatureMinimum.innerText = `Minimum Temperature is: ${weather.min_temp}°C`;
	temperatureMaximum.innerText = `Maximum Temperature is: ${weather.max_temp}°C`;
	humidityHeading.innerText = `${weather.humidity}%`;
	humidityDisplay.innerText = `Humididity is: ${weather.humidity}`;
	windDegrees.innerText = `Wind Degree is: ${weather.wind_degrees}`;
	feelsLike.innerText = `Feels like: ${weather.feels_like}`;
	windHeading.innerText = `${weather.wind_speed} km/hr`;
	windDisplay.innerText = `Wind Speed is: ${weather.wind_speed}`;
	sunriseTime.innerText = `Sunrise Time is: ${formatEpochTimeToHumanTime(weather.sunrise)}`;
	sunsetTime.innerText = `Sunset Time is: ${formatEpochTimeToHumanTime(weather.sunset)}`;
	console.log(`------displayDefaultWeatherInfo ends------`);
}
getWeatherDetailsOfDifferentPlaces();
displayDefaultWeatherInfo();