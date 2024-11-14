import Joi from "joi";



const updateRegistrationSchema = Joi.object({
    date: Joi.date()
        .optional()
        .messages({
            'date.base': 'INVALID_DATE'
        }),

    description: Joi.string()
        .min(3)
        .max(500)
        .optional()
        .messages({
            'string.min': 'DESCRIPTION_TOO_SHORT',
            'string.max': 'DESCRIPTION_TOO_LONG'
        }),

    value: Joi.number()
        .greater(0)
        .optional()
        .messages({
            'number.base': 'INVALID_VALUE',
            'number.greater': 'VALUE_TOO_LOW'
        }),

    active: Joi.boolean()
        .optional()
        .messages({
            'any.required': 'ACTIVE_STATUS_REQUIRED'
        }),

    user: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/) 
        .optional()
        .messages({
            'string.pattern.base': 'INVALID_USER_ID'
        })
}).min(1);

export default updateRegistrationSchema;
