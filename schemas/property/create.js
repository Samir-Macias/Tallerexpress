import Joi from 'joi-oid'

const createPropertySchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LONG'
        }),

    type: Joi.string()
        .required()
        .messages({
            'any.required': 'TYPE_REQUIRED',
            'string.empty': 'TYPE_REQUIRED',
            'any.only': 'INVALID_TYPE'
        }),

    value: Joi.number()
        .greater(0)
        .required()
        .messages({
            'any.required': 'VALUE_REQUIRED',
            'number.base': 'INVALID_VALUE',
            'number.greater': 'VALUE_TOO_LOW'
        }),

    user: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/) 
        .required()
        .messages({
            'any.required': 'USER_REQUIRED',
            'string.pattern.base': 'INVALID_USER_ID'
        })
});

export default createPropertySchema


