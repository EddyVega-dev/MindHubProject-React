const City = require('../models/City')

const CitiesController = {
    getListCities: async (req, res) => {
        //Pedirle a la base de datos
        const listCities = await City.find()

        //Devolver al frontend la lista que nos dió la base de datos
        res.json({
            success: true,
            cities: listCities
        })
    },

    newCity: (req, res) => {
        //Abro la petición que me llega del frontend y extraigo la información de la nueva ciudad
        const{city, country, image} = req.body

        //Valido los datos, que sean correctos, que no falte alguno, que no tenga caracteres raros,etc.

        //Le pido a la base de datos que grabe este nueva ciudad
        const newCity = new City({
            city: city,
            country: country,
            image: image,
        })

        newCity.save()
        .then(city => {//Responderle al frontend que fue exitoso el grabado de la nueva ciudad o no
            res.json({
                success: true,
                city: city,
            })
        })
        .catch(error => {
            res.json({
                success: false,
                error: error,
            })
        })
    },
} 

module.exports = CitiesController