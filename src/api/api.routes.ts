import { Router } from 'express';
import { checkValidation, validateSchema } from './api.middlewares';
import controller from './api.controller';
import { ProjectSchema, ProjectPreviewSchema, SkillSchema } from './api.schemas';

const router = Router();

// Gives back the project preview data
router.get('/projects', controller.getProjectsPreview);

// Gives back a project page, id should be the preview id
router.get('/projects/:id', controller.getProject);

// Gives back the skills
router.get('/skills', controller.getSkills);

// Add a new project preview
router.post(
    '/projects/preview',
    checkValidation,
    validateSchema(ProjectPreviewSchema),
    controller.addProjectPreview
);

// Add a new project page
router.post(
    '/projects/extended',
    checkValidation,
    validateSchema(ProjectSchema),
    controller.addProjectPage
);

// Add a new skill
router.post('/skills', checkValidation, validateSchema(SkillSchema), controller.addSkill);

module.exports = router;
