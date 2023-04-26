import Joi from 'joi-oid';

const schema = Joi.object({
    // seller_id: Joi
    //     .objectId()
    //     .required(),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),
    description: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    continent: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    country: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    cover_photo: Joi
        .string()
        .uri()
        .required(),
    packages: Joi

        .required()

        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
            'string.required': 'the description is required',
        }),
    category_id: Joi
        .objectId()
        .required(),
    pages: Joi
        .array()
        .required()

        .messages({
            "pages": "field must be a valid URL, separated by commas."
        }),

    stock: Joi
        .number()

        .messages({
            "price": "field must be a valid number."
        }),
})

export default schema