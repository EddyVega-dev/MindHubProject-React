const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const Joi = require('@hapi/joi')

const UserController = {
    newUser: async(req, res) => {
        const {urlPic, userName, firstName, lastName, email, password, country} = req.body

        //validación

        //Hash
        const passwordHash = bcryptjs.hashSync(password, 10)

        //verificar que no exista ya el usuario
        const userExists = await User.findOne({userName: userName})

        if(userExists){
            res.json({
                success: false,
                error: 'userName Exists'
            })
        } else {
            const newUser = new User({
                urlPic, userName, firstName, lastName, email, password: passwordHash, country,
            })
            
            var user = await newUser.save()

            res.json({
                success: true,
                user: user,
            })
        }
    },

    validateData: (req, res, next) => {
        const schema = Joi.object({
            urlPic: Joi.string().trim().alphanum().min(0).max(100).required(),
            userName: Joi.string().trim().alphanum().min(5).max(100).required(),
            firstName: Joi.string().trim().alphanum().min(5).max(100).required(),
            lastName: Joi.string().trim().alphanum().min(5).max(100).required(),
            email: Joi.string().trim().email().required(),
            password: Joi.string().trim().pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!@#$%^&*()[\]]).{5,}/, 'password').required(),
            country: Joi.string().trim().alphanum().min(0).max(100).required()
        })

        const validation = schema.validate(req.body)

        if(validation.error!==undefined){
            return res.json({
                success:false,
                error: 'data validation error',
                message: validation.error,
            })
        }

        next()
    },

    loginUser: async(req, res) => {
        const {userName, password} = req.body

        const userExists = await User.findOne({userName})

        if(!userExists){
            res.json({success:false, mensage: `${userName} exists`})
        } else{
            const passwordHash = bcryptjs.compareSync(password, userExists.password)
            if(!passwordHash){
                res.json({success:false, mensage: 'incorrect username or password'})
            }else{
                res.json({success:true, user: userExists})
            }
        }

    }
}

module.exports = UserController