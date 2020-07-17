"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_model_1 = require("./api.model");
const api_schemas_1 = require("./api.schemas");
const getMinifiedProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield api_model_1.projectMini.find({});
    res.json(projects);
});
const getProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield api_model_1.projects.findOne({
        connectId: req.params.id,
    });
    if (project) {
        res.json(project);
    }
    else {
        res.status(404);
        next(new Error('Project not found'));
    }
});
const addProjectPreview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = api_schemas_1.ProjectPreviewSchema.validate(req.body);
    if (validation.error) {
        next(validation.error);
        return;
    }
    const inserted = yield api_model_1.projectMini.insert(req.body);
    res.json(inserted);
});
const addProjectPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = api_schemas_1.ProjectSchema.validate(req.body);
    if (validation.error) {
        next(validation.error);
        return;
    }
    const inserted = yield api_model_1.projects.insert(req.body);
    res.json(inserted);
});
exports.default = {
    getMinifiedProjects,
    getProject,
    addProjectPreview,
    addProjectPage,
};
