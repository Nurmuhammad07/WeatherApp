const api = {
    key: '093ebc7626cca2f295563e16e061fe89',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}

const apiKey = 'FiUM6jDKVa1s/o25IDCgww==14qTIBKmQHAcr9by'
let url = 'https://api.api-ninjas.com/v1/worldtime?city='
const api2 = {
    method: 'GET',
    headers:{'X-Api-Key': apiKey}
}

async function options() {
    const res = await fetch(url + searchBox.value, api2)
    const data = await res.json()
    document.querySelector('.time').innerHTML = `${data.datetime.slice(11,)}`
    console.log(data);
}

const searchBox = document.querySelector('.search_box')

searchBox.addEventListener('keyup', setQuery)

function setQuery(e) {
    if (e.keyCode == 13) {
        options()
        getResults(searchBox.value)
        console.log(searchBox.value)
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json()
        }).then(displayRuslts)
}

function displayRuslts(weather) {
    console.log(weather);
    let error = document.querySelector('.error')
    if(weather.message != undefined)
    {
        error.style.color = '#fe4b4b'
        error.innerHTML = `${weather.message}`
    }else
    {
        error.style.color = 'rgb(153, 255, 0, 0.9)'
        error.innerHTML = `successfully find`
    }

    let city = document.querySelector('.city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date()
    let date = document.querySelector('.date')
    date.innerHTML = dateBuilder(now)

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}&#8451;`

    let weatherEl = document.querySelector('.weather')
    weatherEl.innerHTML = weather.weather[0].main

    let hiLow = document.querySelector('.hi_low')
    hiLow.innerHTML = `Min ${Math.round(weather.main.temp_min)}<span>&#8451;</span> / Max ${Math.round(weather.main.temp_max)}<span>&#8451;</span>`
    
}

function dateBuilder(n) {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    let day = days[n.getDay()]
    let date = n.getDate()
    let month = months[n.getMonth()]
    let year = n.getFullYear()

    return `${day} ${date} ${month} ${year}`
}

var totn_number = 123.456789;
