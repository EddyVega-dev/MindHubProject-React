const Activity = require('../models/Activity')

const ActivitiesController = {
    getListActivities: async (req, res) => {
        //Pedirle a la base de datos
        const listActivities = await Activity.find()

        //Devolver al frontend la lista que nos dió la base de datos
        res.json({
            success: true,
            activities: listActivities
        })
    },

    newActivity: (req, res) => {
        //Abro la petición que me llega del frontend y extraigo la información de la nueva ciudad
        const{title, imageActivity, itineraryId} = req.body

        //Valido los datos, que sean correctos, que no falte alguno, que no tenga caracteres raros,etc.

        //Le pido a la base de datos que grabe este nueva ciudad
        const newActivity = new Activity({
            title: title,
            imageActivity: imageActivity,
            itineraryId: itineraryId,
        })

        newActivity.save()
        .then(activity => {//Responderle al frontend que fue exitoso el grabado de la nueva ciudad o no
            res.json({
                success: true,
                city: activity,
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

module.exports = ActivitiesController