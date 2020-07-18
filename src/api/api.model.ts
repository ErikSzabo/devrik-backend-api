import monk from 'monk';

export const db = monk(process.env.MONGO_URI || '127.0.0.1:27017/devrik-api');

export const projectsPreview = db.get('projects-mini');
export const projects = db.get('projects');
