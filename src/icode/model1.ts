import * as fs from 'fs-extra';
import * as path from 'path';
import Handlebars from "handlebars";
import { NotAPrimitiveTypeHelper } from './handlebarsHelpers/notPrimitiveType.helper';

const interfaceTemplate = fs.readFileSync('src/templates/entities/model1.hbs', 'utf8');
const notAPrimitiveTypeHelper = new NotAPrimitiveTypeHelper();

export class Model {
    constructor() {}

    generateModel(schema: any) {
        notAPrimitiveTypeHelper.getNotAPrimitiveTypeHelper();
        const compiledTemplate = Handlebars.compile(interfaceTemplate);
        const generatedCode = compiledTemplate(schema);
        fs.outputFileSync(`targetApp/static-app/src/${schema.labels.code}/entities/${schema.labels.code}.entity.ts`, generatedCode);
    }

    // generateAllModels() {
    //     const modelsDir = path.join(__dirname, '../inputs/models/');
    //     fs.readdirSync(modelsDir)
    //         .filter((file) => file.endsWith('.json'))
    //         .forEach((file) => {
    //             const schema = fs.readJsonSync(path.join(modelsDir, file));
    //             this.generateModel(schema);
    //         });
    // }
}



