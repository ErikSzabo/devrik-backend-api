import Joi, { Schema } from 'joi';

export interface loginData {
    username: string;
    password: string;
}

export const loginSchema: Schema = Joi.object({
    username: Joi.string().min(3).max(15).alphanum().required(),
    password: Joi.string().min(8).required(),
});
