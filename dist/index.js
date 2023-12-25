"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const server_1 = __importDefault(require("./server"));
const hostname = "0.0.0.0";
const port = (_a = process_1.env.PORT) !== null && _a !== void 0 ? _a : "8080";
server_1.default.listen(parseInt(port), hostname, () => console.log(`Server listening at http://${hostname}:${port}/`));
