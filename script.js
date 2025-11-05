const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const spinner = document.getElementById('spinner');
const errorMsg = document.getElementById('errorMsg');
const weatherCard = document.getElementById('weatherCard');

// Replace with your actual Weatherbit API key
const API_KEY = '9ef8f0686ca24904b403b353e582cb0c';
const city = 'Satsuma';
const country = 'US';
const url = `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${API_KEY}`;

searchBtn.addEventListener('click', async () => {
 

  spinner.classList.remove('d-none');
  errorMsg.classList.add('d-none');
  weatherCard.innerHTML = '';

  try {
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`;
    const response = await axios.get(url);
    const data = response.data.data[0];

    const cardHTML = `
      <div class="card mx-auto" style="width: 22rem;">
        <div class="card-body">
          <h5 class="card-title">${data.city_name}, ${data.country_code}</h5>
          <p class="card-text">
            <strong>Temperature:</strong> ${data.temp}°C<br>
            <strong>Weather:</strong> ${data.weather.description}<br>
            <strong>Time:</strong> ${data.datetime}<br>
            <strong>Coordinates:</strong> Lat ${data.lat}, Lon ${data.lon}
          </p>
        </div>
      </div>
    `;
    weatherCard.innerHTML = cardHTML;
  } catch (error) {
    errorMsg.textContent = 'City not found or API error.';
    errorMsg.classList.remove('d-none');
  } finally {
    spinner.classList.add('d-none');
  }
});

