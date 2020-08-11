import Joi, { Schema } from 'joi';

/**
 * Used to validate a mini project list item.
 */
export const ProjectPreviewSchema: Schema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  description: Joi.string().min(20).required(),
  img: Joi.string().min(15).required(),
  tags: Joi.array().items(Joi.string()).min(1).required(),
  filterTags: Joi.array().items(Joi.string()).required(),
});

/**
 * Used to validate a whole project page.
 */
export const ProjectSchema: Schema = Joi.object({
  connectId: Joi.string().min(12).required(),
  name: Joi.string().min(3).max(40).required(),
  description: Joi.string().min(3).required(),
  githubUrl: Joi.string().min(15).required(),
  images: Joi.array().items(Joi.string()).min(1).required(),
  content: Joi.string().min(3).required(),
});

/**
 * Used to validate a skill
 */
export const SkillSchema: Schema = Joi.object({
  name: Joi.string().min(2).required(),
  description: Joi.string().min(10).required(),
  progress: Joi.number().min(0).max(100).integer().required(),
  icon: Joi.string().min(10).required(),
});
