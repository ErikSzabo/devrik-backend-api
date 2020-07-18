import { Request, Response, NextFunction } from 'express';
import { projectsPreview, projects, skills } from './api.model';
import { Project, ProjectPreview, Skill } from './api.schemas';

const getProjectsPreview = async (req: Request, res: Response) => {
    const projects: ProjectPreview[] = await projectsPreview.find({});
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

const getSkills = async (req: Request, res: Response, next: NextFunction) => {
    const qSkills: Skill[] = await skills.find({});
    res.json(qSkills);
};

const addProjectPreview = async (req: Request, res: Response, next: NextFunction) => {
    const inserted: ProjectPreview = await projectsPreview.insert(req.body);
    res.json(inserted);
};

const addProjectPage = async (req: Request, res: Response, next: NextFunction) => {
    const inserted: Project = await projects.insert(req.body);
    res.json(inserted);
};

const addSkill = async (req: Request, res: Response, next: NextFunction) => {
    const inserted: Skill = await skills.insert(req.body);
    res.json(inserted);
};

export default {
    getProjectsPreview,
    getProject,
    addProjectPreview,
    addProjectPage,
    addSkill,
    getSkills,
};
