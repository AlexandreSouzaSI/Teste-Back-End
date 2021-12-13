"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupServer = void 0;
require("./util/module-alias");
const core_1 = require("@overnightjs/core");
const body_parser_1 = __importDefault(require("body-parser"));
class SetupServer extends core_1.Server {
    constructor(port = 4000) {
        super();
        this.port = port;
    }
    init() {
        this.setupExpress();
    }
    setupExpress() {
        this.app.use(body_parser_1.default.json());
    }
}
exports.SetupServer = SetupServer;
//# sourceMappingURL=server.js.map