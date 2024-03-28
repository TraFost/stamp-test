const API_KEY = "90b1a8f723eca584bd55b26dc0394a14";

const fetchWeather = async (city) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
	);

	const data = await response.json();
	return data;
};

fetchWeather("Jakarta")
	.then((data) => {
		const { list } = data;

		const dailyWeather = list.filter((item) => {
			return item.dt_txt.includes("12:00:00");
		});

		for (const day of dailyWeather) {
			const dateObj = new Date(day.dt_txt);

			const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });

			const date = dateObj.toLocaleDateString("en-US", {
				day: "numeric",
				month: "short",
				year: "numeric",
			});

			const celcius = Math.round(day.main.temp - 273.15);

			console.log(`${dayName}, ${date}: ${celcius}°C`);
		}
	})
	.catch((error) => console.error("Error:", error));
