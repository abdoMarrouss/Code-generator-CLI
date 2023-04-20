import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../inputs/models/model1.json';
import { NotAPrimitiveTypeHelper } from './handlebarsHelpers/notPrimitiveType.helper';
import { not } from 'ajv/dist/compile/codegen';

const shcemaTemplate = fs.readFileSync('src/templates/schemas/schema.hbs', 'utf8');
const notAPrimitiveTypeHelper = new NotAPrimitiveTypeHelper();

export class SchemaCode {


    generateSchema(schema:any) {

    notAPrimitiveTypeHelper.getNotAPrimitiveTypeHelper();
    const compiledTemplate = Handlebars.compile(shcemaTemplate);
    const generatedCode = compiledTemplate(schema);
    //
    fs.outputFileSync(`targetApp/static-app/src/${schema.labels.code}/schemas/${schema.labels.code}.schema.ts`, generatedCode);
    //fs.ensureDirSync('src/person/dto');

    }
    
    
    
}

