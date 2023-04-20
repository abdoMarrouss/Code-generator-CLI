import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';

const schemaModuleTemplate = fs.readFileSync('src/templates/modules/schema.module.hbs', 'utf8');

export class SchemaModule {


    generateSchemaModule(schema:any) {
    
    const compiledTemplate = Handlebars.compile(schemaModuleTemplate);
    const generatedCode = compiledTemplate(schema);
    //
    fs.outputFileSync(`targetApp/static-app/src/${schema.labels.code}/${schema.labels.code}.module.ts`, generatedCode);
    //fs.ensureDirSync('src/person/dto');
    

    }
    
    
    
}