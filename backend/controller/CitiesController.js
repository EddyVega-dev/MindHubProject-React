const CitiesController = {
    getListCities: (req, res) => {
        //Pedirle a la base de datos
        const listCities = [
            {nameImg: 'Lima', img: 'saraza'}
        ]

        //Devolver al frontend la lista que nos dió la base de datos
        res.json({
            success: true,
            response: listCities
        })
    },

    newCitie: (req, res) => {
        //Abro la petición que me llega del frontend y extraigo la información de la nueva ciudad
        const{nameImg, img} = req.body

        //Valido los datos, que sean correctos, que no falte alguno, que no tenga caracteres raros,etc.

        //Le pido a la base de datos que grabe este nueva ciudad

        //Responderle al frontend que fue exitoso el grabado de la nueva ciudad o no
    }
}

module.exports = CitiesController