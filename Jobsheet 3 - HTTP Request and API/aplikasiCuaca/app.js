const request = require('postman-request')
// const url = 'http://api.weatherstack.com/current?access_key=baee5aa3e15d624b5252672fe011fee4&query=-0.8973321949224361,%20100.35076878342123'
// request({ url: url }, (error, response) => {
//     // console.log(response)
//     const data = JSON.parse(response.body)
//     // console.log(data)
//     // console.log(data.current)
//     console.log(data.current.temperature)
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Padang.json?limit=1&access_token=pk.eyJ1IjoiYWxkaTEyMzEyMyIsImEiOiJjbWdhOGMxbXcwaHU1MmlxNDVzdDJ0OTc5In0.7MgK0dUTdwzaariwBbj_eQ'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Koordinat lokasi anda adalah '+ latitude + ', ' + longitude)

    console.log('Data yang anda cari adalah : ' + response.body.query)
    console.log('Data yang ditemukan adalah : ' + response.body.features[0].place_name)
    console.log('Tipe lokasi : ' + response.body.features[0].place_type[0])
    const urlCuaca = `http://api.weatherstack.com/current?access_key=baee5aa3e15d624b5252672fe011fee4&query=${latitude},${longitude}`
    request({ url: urlCuaca, json: true }, (error, response) => {
        console.log( `Saat ini suhu di ${response.body.location.name} mencapat ${response.body.current.temperature} derajat celcius`)
        console.log(`Kemungkinan terjadinya hujan adalah ${response.body.current.precip}%`)
    })
})
