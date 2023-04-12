import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../inputs/models/model1.json';

const shcemaTemplate = fs.readFileSync('src/templates/schemas/schema.hbs', 'utf8');

export class SchemaCode {


    generateSchema() {
    
    const compiledTemplate = Handlebars.compile(shcemaTemplate);
    const generatedCode = compiledTemplate(schema);
    //
    fs.outputFileSync(`targetApp/static-app/src/${schema.name}/schema/${schema.name}.schema.ts`, generatedCode);
    //fs.ensureDirSync('src/person/dto');

    }
    
    
    
}

