"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projects = exports.projectMini = exports.db = void 0;
const monk_1 = __importDefault(require("monk"));
exports.db = monk_1.default(process.env.MONGO_URI || '127.0.0.1:27017/devrik-api');
exports.projectMini = exports.db.get('projects-mini');
exports.projects = exports.db.get('projects');
