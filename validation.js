//Validation
const joi = require('@hapi/joi');

//Regiser validation
const registerValidation = () => {
    const schema = {
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    }
}