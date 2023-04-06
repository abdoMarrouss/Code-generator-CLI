"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const model2_json_1 = __importDefault(require("./inputs/models/model2.json"));
const ajv = new ajv_1.default();
const schema = {
    type: 'object',
    properties: {
        name: { type: 'string' }
    },
    required: ['name']
};
const valid = ajv.validate(schema, model2_json_1.default);
if (!valid) {
    console.log(ajv.errors);
}
else {
    console.log('JSON data is valid');
}
//console.log(jsonData);
//# sourceMappingURL=schemaValidator.js.map