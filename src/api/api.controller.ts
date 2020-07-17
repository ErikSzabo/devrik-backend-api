import { Request, Response, NextFunction } from 'express';
import { projectMini, projects } from './api.model';
import {
    Project,
    ProjectPreview,
    ProjectSchema,
    ProjectPreviewSchema,
} from './api.schemas';

const getMinifiedProjects = async (req: Request, res: Response) => {
    const projects: ProjectPreview[] = await projectMini.find({});
    res.json(projects);
};

const getProject = async (req: Request, res: Response, next: NextFunction) => {
    const project: Project | undefined = await projects.findOne({
        connectId: req.params.id,
    });

    if (project) {
        res.json(project);
    } else {
        res.status(404);
        next(new Error('Project not found'));
    }
};

const addProjectPreview = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const validation = ProjectPreviewSchema.validate(req.body);
    if (validation.error) {
        next(validation.error);
        return;
    }

    const inserted: ProjectPreview = await projectMini.insert(req.body);
    res.json(inserted);
};

const addProjectPage = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const validation = ProjectSchema.validate(req.body);
    if (validation.error) {
        next(validation.error);
        return;
    }

    const inserted: Project = await projects.insert(req.body);
    res.json(inserted);
};

export default {
    getMinifiedProjects,
    getProject,
    addProjectPreview,
    addProjectPage,
};
