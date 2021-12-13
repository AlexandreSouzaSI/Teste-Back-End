"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
describe('Beach forecast fuctional test', () => {
    it('should return a forecast with just a few times', async () => {
        const { body, status } = await (0, supertest_1.default)(app).get('/forecast');
        expect(status).toBe(200);
        expect(body).toBe("expected");
    });
});
//# sourceMappingURL=forecast.test.js.map