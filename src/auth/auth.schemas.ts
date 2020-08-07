import Joi, { Schema } from 'joi';

/**
 * Used to validate the incoming login requests.
 */
export const loginSchema: Schema = Joi.object({
  username: Joi.string().min(3).max(15).alphanum().required(),
  password: Joi.string().min(8).required(),
});

/**
 * Used to validate an auth request token.
 */
export const tokenSchema: Schema = Joi.object({
  token: Joi.string().required(),
});
