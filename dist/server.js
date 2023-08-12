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
const symbol_1 = __importDefault(require("./routes/symbol"));
const status_1 = __importDefault(require("./routes/status"));
const pcomment_1 = __importDefault(require("./routes/pcomment"));
const file_1 = __importDefault(require("./routes/file"));
const operation_1 = __importDefault(require("./routes/operation"));
const opcomment_1 = __importDefault(require("./routes/opcomment"));
// Configuring express server
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Expose routes
app.use('/projections', projection_1.default);
app.use('/symbols', symbol_1.default);
app.use('/statuses', status_1.default);
app.use('/pcomment', pcomment_1.default);
app.use('/file', file_1.default);
app.use('/operations', operation_1.default);
app.use('/opcomment', opcomment_1.default);
exports.default = app;
