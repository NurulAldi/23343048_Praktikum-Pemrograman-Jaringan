const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=baee5aa3e15d624b5252672fe011fee4&query=-0.8973321949224361,%20100.35076878342123'
request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' + 
        response.body.current.temperature +
        ' derajat celcius. Kemungkinan terjadinya hujan adalah ' +
        response.body.current.precip +'%'
    )
    console.log('deskripsi cuaca ' + response.body.current.weather_descriptions[0])
})