import { Router } from 'express';
import controller from './api.controller';

const router = Router();

// Gives back the project preview data
router.get('/projects', controller.getMinifiedProjects);

// Gives back a project page, id should be the preview id
router.get('/projects/:id', controller.getProject);

// Add a new project preview
router.post('/projects/preview', controller.addProjectPreview);

// Add a new project page
router.post('/projects/extended', controller.addProjectPage);

module.exports = router;
