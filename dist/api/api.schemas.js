"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = exports.ProjectPreviewSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ProjectPreviewSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
    description: joi_1.default.string().min(20).required(),
    img: joi_1.default.string().required().min(15),
    tags: joi_1.default.array().required().min(1),
    filterTags: joi_1.default.array().required(),
});
exports.ProjectSchema = joi_1.default.object({
    connectId: joi_1.default.string().required().min(10),
    name: joi_1.default.string().min(3).max(40).required(),
    githubUrl: joi_1.default.string().required().min(15),
    images: joi_1.default.array().required().min(1),
    elements: joi_1.default.array().required().min(1),
});
