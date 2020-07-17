"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_controller_1 = __importDefault(require("./api.controller"));
const router = express_1.Router();
// Gives back the project preview data
router.get('/projects', api_controller_1.default.getMinifiedProjects);
// Gives back a project page, id should be the preview id
router.get('/projects/:id', api_controller_1.default.getProject);
// Add a new project preview
router.post('/projects/preview', api_controller_1.default.addProjectPreview);
// Add a new project page
router.post('/projects/extended', api_controller_1.default.addProjectPage);
module.exports = router;
