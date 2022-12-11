const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();    // Placeholder will reset after press submit btn so top stop that we use event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6f8b6f781b256da5383b22d4cef42241`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(data);

            temp_real_val.innerHTML = arrData[0].main.temp;
            // temp_status.innerHTML = arrData[0].weather[0].main;
            city_name.innerHTML = `${arrData[0].name} , ${arrData[0].sys.country}`;

            const tempMood = arrData[0].weather[0].main;
            // condition to check sunny or cloudy 
            if (tempMood == 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-sun' aria-hidden='true'; style='color:#eccc68;'></i>";
            } else if (tempMood == 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' aria-hidden='true'; style='color:#f1f2f6;'></i>";
            }
            else if (tempMood == 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' aria-hidden='true'; style='color:#a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' aria-hidden='true'; style='color:#f1f2f6;'></i>";

            }

            datahide.classList.remove('data_hide');
        }
        catch {
            city_name.innerText = `Plz Enter The City Name Properly`;
            datahide.classList.add('data_hide');
        }
    }


}


submitBtn.addEventListener('click', getInfo)