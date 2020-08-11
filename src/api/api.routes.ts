import { Router } from 'express';
import { skills, projects } from './api.model';
import { ProjectSchema, SkillSchema } from './api.schemas';
import { checkValidation } from './api.middlewares';
import controller from './api.controller';
import { validateSchema } from '../middlewares';

const router = Router();

// @route    GET /projects
// @desc     Gets all the project list items
// @access   Public
router.get('/projects', controller.getAllHandler(projects));

// @route    GET /skills
// @desc     Gets all of the skills
// @access   Public
router.get('/skills', controller.getAllHandler(skills));

// @route    GET /projects/:id
// @desc     Gets a specific project list item
// @access   Public
router.get('/projects/:id', controller.getSpecificHandler(projects));

// @route    GET /skills/:id
// @desc     Gets a specific skill
// @access   Public
router.get('/skills/:id', controller.getSpecificHandler(skills));

// @route    POST /projects
// @desc     Adds a new project
// @access   Private
router.post(
  '/projects',
  checkValidation,
  validateSchema(ProjectSchema),
  controller.addHandler(projects)
);

// @route    POST /skills
// @desc     Adds a new skill
// @access   Private
router.post(
  '/skills',
  checkValidation,
  validateSchema(SkillSchema),
  controller.addHandler(skills)
);

// @route    PUT /projects/:id
// @desc     Updates a project
// @access   Private
router.put(
  '/projects/:id',
  checkValidation,
  validateSchema(ProjectSchema),
  controller.updateHandler(projects)
);

// @route    PUT /skills/:id
// @desc     Updates a skill
// @access   Private
router.put(
  '/skills/:id',
  checkValidation,
  validateSchema(SkillSchema),
  controller.updateHandler(skills)
);

// @route    DELETE /projects/:id
// @desc     Deletes a project
// @access   Private
router.delete('/projects/:id', checkValidation, controller.deleteHandler(projects));

// @route    DELETE /skills/:id
// @desc     Deletes a skill
// @access   Private
router.delete('/skills/:id', checkValidation, controller.deleteHandler(skills));

export default router;
