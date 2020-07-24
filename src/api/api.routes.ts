import { Router } from 'express';
import { skills, projects, projectsPreview } from './api.model';
import { checkValidation, validateSchema } from './api.middlewares';
import { ProjectSchema, ProjectPreviewSchema, SkillSchema } from './api.schemas';
import controller from './api.controller';

const router = Router();

// Get the project previews
router.get('/projects', controller.getAllHandler(projectsPreview));

// Get all the big projects
router.get('/project-pages', controller.getAllHandler(projects));

// Get all the skills
router.get('/skills', controller.getAllHandler(skills));

// Get a specific project preview
router.get('/projects/:id', controller.getSpecificHandler(projectsPreview));

// Get a specific project
router.get('/project-pages/:id', controller.getSpecificHandler(projects));

// Get a specific skill
router.get('/skills/:id', controller.getSpecificHandler(skills));

// Add a new project preview
router.post(
    '/projects/preview',
    checkValidation,
    validateSchema(ProjectPreviewSchema),
    controller.addHandler(projectsPreview)
);

// Add a new project page
router.post(
    '/projects/extended',
    checkValidation,
    validateSchema(ProjectSchema),
    controller.addHandler(projects)
);

// Add a new skill
router.post(
    '/skills',
    checkValidation,
    validateSchema(SkillSchema),
    controller.addHandler(skills)
);

// Update project preview
router.put(
    '/projects/preview/:id',
    checkValidation,
    validateSchema(ProjectPreviewSchema),
    controller.updateHandler(projectsPreview)
);

// Update project
router.put(
    '/projects/extended/:id',
    checkValidation,
    validateSchema(ProjectSchema),
    controller.updateHandler(projects)
);

// Update skill
router.put(
    '/skills/:id',
    checkValidation,
    validateSchema(SkillSchema),
    controller.updateHandler(skills)
);

// Delete project preview
router.delete(
    '/projects/preview/:id',
    checkValidation,
    controller.deleteHandler(projectsPreview)
);

// Delete project
router.delete(
    '/projects/extended/:id',
    checkValidation,
    controller.deleteHandler(projects)
);

// Delete skill
router.delete('/skills/:id', checkValidation, controller.deleteHandler(skills));

export default router;
