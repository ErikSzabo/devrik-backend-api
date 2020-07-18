import { Router } from 'express';
import { checkValidation } from './api.middlewares';
import controller from './api.controller';

const router = Router();

// Gives back the project preview data
router.get('/projects', controller.getMinifiedProjects);

// Gives back a project page, id should be the preview id
router.get('/projects/:id', controller.getProject);

// Add a new project preview
router.post('/projects/preview', checkValidation, controller.addProjectPreview);

// Add a new project page
router.post('/projects/extended', checkValidation, controller.addProjectPage);

module.exports = router;
