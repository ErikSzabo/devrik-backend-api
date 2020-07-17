"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const middlewares = require('./middlewares');
const api = require('./api/api.routes');
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({
        message: 'devrik-net API/v1',
    });
});
app.use('/api/v1', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
exports.default = app;
