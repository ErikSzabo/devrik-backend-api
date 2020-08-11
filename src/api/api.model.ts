import db from '../database';

/**
 * Collection for the project pages.
 */
export const projects = db.get('projects');

/**
 * Collection for the skills.
 */
export const skills = db.get('skills');
