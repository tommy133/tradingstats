"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const app = (0, express_1.default)();
app.use((0, compression_1.default)());
const projection_1 = __importDefault(require("./routes/projection"));
// Configuring express server
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Expose routes
app.use('/projections', projection_1.default);
exports.default = app;
