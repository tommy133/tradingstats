"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const hostname = '0.0.0.0';
const port = 8080;
server_1.default.listen(port, hostname, () => console.log(`Server listening at http://${hostname}:${port}/`));
