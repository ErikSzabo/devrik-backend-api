import Joi, { Schema } from 'joi';

type contentType = 'text' | 'list';

export interface ProjectElement {
    title: string;
    content: string;
    contentType: contentType;
    listItems?: string[];
}

export interface Project {
    _id: string;
    connectId: string;
    name: string;
    description: string;
    githubUrl: string;
    images: string[];
    elements: ProjectElement[];
}

export interface ProjectPreview {
    _id: string;
    name: string;
    description: string;
    img: string;
    tags: string[];
    filterTags: string[];
}

export interface Skill {
    _id: string;
    name: string;
    description: string;
    progress: number;
    icon: string;
}

export const ProjectPreviewSchema: Schema = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    description: Joi.string().min(20).required(),
    img: Joi.string().required().min(15),
    tags: Joi.array().required().min(1),
    filterTags: Joi.array().required(),
});

export const ProjectSchema: Schema = Joi.object({
    connectId: Joi.string().required().min(10),
    name: Joi.string().min(3).max(40).required(),
    description: Joi.string().min(3).required(),
    githubUrl: Joi.string().required().min(15),
    images: Joi.array().required().min(1),
    elements: Joi.array().required().min(1),
});

export const SkillSchema: Schema = Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(10).required(),
    progress: Joi.number().required().min(0).max(100).integer(),
    icon: Joi.string().min(10),
});
