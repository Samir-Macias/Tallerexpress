import Joi from "joi-oid";



const updatePropertySchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(100)
        .optional()
        .messages({
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LONG'
        }),

    type: Joi.string()
        .optional()
        .messages({
            'any.only': 'INVALID_TYPE'
        }),

    value: Joi.number()
        .greater(0)
        .optional()
        .messages({
            'number.base': 'INVALID_VALUE',
            'number.greater': 'VALUE_TOO_LOW'
        }),

    user: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .optional()
        .messages({
            'string.pattern.base': 'INVALID_USER_ID'
        })
}).min(1); 

export default updatePropertySchema;
