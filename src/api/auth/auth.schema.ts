import * as Joi from '@hapi/joi';

const shcema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .min(6)
    .required(),
});

export default shcema;
