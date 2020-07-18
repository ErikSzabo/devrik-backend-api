import monk from 'monk';

export const db = monk(process.env.MONGODB_URI || '127.0.0.1:27017/devrik-api');

export const projectsPreview = db.get('projects-preview');
export const projects = db.get('projects');
export const skills = db.get('skills');
