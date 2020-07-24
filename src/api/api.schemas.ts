import Joi, { Schema } from 'joi';

// Interfaces that I don't use anywhere 😆

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

// Create -- POST/PUT schemas

export const ProjectPreviewSchema: Schema = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    description: Joi.string().min(20).required(),
    img: Joi.string().min(15).required(),
    tags: Joi.array().items(Joi.string()).min(1).required(),
    filterTags: Joi.array().items(Joi.string()).required(),
});

export const ProjectSchema: Schema = Joi.object({
    connectId: Joi.string().min(12).required(),
    name: Joi.string().min(3).max(40).required(),
    description: Joi.string().min(3).required(),
    githubUrl: Joi.string().min(15).required(),
    images: Joi.array().items(Joi.string()).min(1).required(),
    elements: Joi.array()
        .items(
            Joi.object({
                title: Joi.string().min(3).max(40).required(),
                content: Joi.string().min(20).required(),
                contentType: Joi.string().allow('text', 'list').required(),
                listItems: Joi.array().items(Joi.string()),
            })
        )
        .required()
        .min(1),
});

export const SkillSchema: Schema = Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(10).required(),
    progress: Joi.number().min(0).max(100).integer().required(),
    icon: Joi.string().min(10).required(),
});
