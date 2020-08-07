import { Router } from 'express';
import { skills, projects, projectsPreview } from './api.model';
import { ProjectSchema, ProjectPreviewSchema, SkillSchema } from './api.schemas';
import controller from './api.controller';
import { validateSchema } from '../middlewares';
import { checkValidation } from './api.middlewares';

const router = Router();

// @route    GET /projects
// @desc     Gets all the project list items
// @access   Public
router.get('/projects', controller.getAllHandler(projectsPreview));

// @route    GET /project-pages
// @desc     Gets all of the project pages
// @access   Public
router.get('/project-pages', controller.getAllHandler(projects));

// @route    GET /skills
// @desc     Gets all of the skills
// @access   Public
router.get('/skills', controller.getAllHandler(skills));

// @route    GET /projects/:id
// @desc     Gets a specific project list item
// @access   Public
router.get('/projects/:id', controller.getSpecificHandler(projectsPreview));

// @route    GET /project-pages/:id
// @desc     Gets a specific project page
// @access   Public
router.get('/project-pages/:id', controller.getSpecificHandler(projects));

// @route    GET /project-page/:id
// @desc     Gets a specific project page by its connection ID
//           which is bounded to a project list item
// @access   Public
router.get('/project-page/:id', controller.getProjectByConnectId);

// @route    GET /skills/:id
// @desc     Gets a specific skill
// @access   Public
router.get('/skills/:id', controller.getSpecificHandler(skills));

// @route    POST /projects/preview
// @desc     Adds a new project list item
// @access   Private
router.post(
  '/projects/preview',
  checkValidation,
  validateSchema(ProjectPreviewSchema),
  controller.addHandler(projectsPreview)
);

// @route    POST /projects/extended
// @desc     Adds a new project page
// @access   Private
router.post(
  '/projects/extended',
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

// @route    PUT /projects/preview/:id
// @desc     Updates a project list item
// @access   Private
router.put(
  '/projects/preview/:id',
  checkValidation,
  validateSchema(ProjectPreviewSchema),
  controller.updateHandler(projectsPreview)
);

// @route    PUT /projects/extended/:id
// @desc     Updates a project page
// @access   Private
router.put(
  '/projects/extended/:id',
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

// @route    DELETE /projects/preview/:id
// @desc     Deletes a project list item
// @access   Private
router.delete(
  '/projects/preview/:id',
  checkValidation,
  controller.deleteHandler(projectsPreview)
);

// @route    DELETE /projects/extended/:id
// @desc     Deletes a project page
// @access   Private
router.delete(
  '/projects/extended/:id',
  checkValidation,
  controller.deleteHandler(projects)
);

// @route    DELETE /skills/:id
// @desc     Deletes a skill
// @access   Private
router.delete('/skills/:id', checkValidation, controller.deleteHandler(skills));

export default router;
