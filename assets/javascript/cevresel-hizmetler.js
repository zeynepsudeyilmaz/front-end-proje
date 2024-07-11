//json dosyasından veri çekip atık tesisleri tablosu oluşturma 
document.addEventListener('DOMContentLoaded', function() {
    fetch("waste_facility2.json")
      .then(response => response.json())
      .then(data => {
        const wasteFacilities = data; 
  
        const tableBody = document.querySelector('#waste-facilities-table tbody');
  
        wasteFacilities.forEach(facility => {
          const row = document.createElement('tr');
  
          row.innerHTML = `
            <td class="tablo-icerik">${facility.facility_name}</td>
            <td class="tablo-icerik">${facility.status}</td>
            <td class="tablo-icerik">${facility.address}</td>
            <td class="tablo-icerik">${facility.neighborhood_name}</td>
            <td class="tablo-icerik">${facility.county}</td>
            <td class="tablo-icerik">${facility.located_region_name}</td>
          `;
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error("Hata:", error));
  });


//hava durumu apisini çekip card içine yerleştirme
document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.getElementById("search-icon");
    var cityInput = document.getElementById("cityInput");
    var weatherInfo = document.getElementById("weatherInfo");

    searchIcon.addEventListener("click", function(e) {
        e.preventDefault();

        var city = cityInput.value;
        var apiKey = "6d1eaa77273747ba910111140240907";
        var apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("weather-location-name").textContent = data.location.name;
            document.getElementById("weather-current-temp_c").textContent = data.current.temp_c;
            document.getElementById("weather-current-humidity").textContent = data.current.humidity;
            document.getElementById("weather-current-wind_kph").textContent = data.current.wind_kph;
            
            
            fetch("icons.json")
              .then((response) => response.json())
              .then((iconData) => {
                var condition_code = parseInt(data.current.condition.code);
                var isDay = data.current.is_day;
                var iconUrl;
                if (isDay == 1) {
                    iconUrl = `https://cdn.weatherapi.com/weather/64x64/day/${iconData.find((icon) => icon.code === condition_code).icon}.png`;
                } else {
                    iconUrl = `https://cdn.weatherapi.com/weather/64x64/night/${iconData.find((icon) => icon.code === condition_code).icon}.png`;
                }
                
                var iconImg = document.getElementById("weather-current-condition-icon-img");
                iconImg.setAttribute("src", iconUrl);
              });
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});