const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const Joi = require('@hapi/joi')
const jwt = require('jsonwebtoken')

const UserController = {
    newUser: async(req, res) => {
        const {urlPic, userName, firstName, lastName, email, password, country} = req.body

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

            jwt.sign({...newUser}, process.env.SECRETORKEY, {}, (error, token) => {
                if(error) {
                    res.json({success: false, error: 'error Token'})
                }
                else{
                    res.json({success:true, token, urlPic: newUser.urlPic})
                }
            })
        }
    },

    validateData: (req, res, next) => {
        const schema = Joi.object({
            urlPic: Joi.string().required(),
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
            res.json({success:false, mensage: `${userName} not exists`})
        } else{
            const passwordHash = bcryptjs.compareSync(password, userExists.password)
            if(!passwordHash){
                res.json({success:false, mensage: 'incorrect username or password'})
            }else{
                //generar token
                jwt.sign({...userExists}, process.env.SECRETORKEY, {}, (error, token) => {
                    if(error) {
                        res.json({success: false, error: 'error Token'})
                    }
                    else{
                        res.json({success:true, token, urlPic: userExists.urlPic})
                    }
                })
            }
        }
    },

    veriftoken: (req, res) => {
        console.log(req)
        const {urlPic} = req.user
        res.json({success: true, urlPic})
    }

}

module.exports = UserController