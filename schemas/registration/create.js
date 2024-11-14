import Joi from "joi";


const createRegistrationSchema = Joi.object({
    date: Joi.date()
        .required()
        .messages({
            'any.required': 'DATE_REQUIRED',
            'date.base': 'INVALID_DATE'
        }),

    description: Joi.string()
        .min(3)
        .max(300)
        .required()
        .messages({
            'any.required': 'DESCRIPTION_REQUIRED',
            'string.empty': 'DESCRIPTION_REQUIRED',
            'string.min': 'DESCRIPTION_TOO_SHORT',
            'string.max': 'DESCRIPTION_TOO_LONG'
        }),

    value: Joi.number()
        .greater(0)
        .required()
        .messages({
            'any.required': 'VALUE_REQUIRED',
            'number.base': 'INVALID_VALUE',
            'number.greater': 'VALUE_TOO_LOW'
        }),

    active: Joi.boolean()
        .required()
        .messages({
            'any.required': 'ACTIVE_STATUS_REQUIRED'
        }),

    user: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/) 
        .required()
        .messages({
            'any.required': 'USER_REQUIRED',
            'string.pattern.base': 'INVALID_USER_ID'
        })
});

export default createRegistrationSchema;
