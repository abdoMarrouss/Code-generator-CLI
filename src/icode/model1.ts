import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../inputs/models/model1.json';
import { appName } from '../../bin/test' ; 

const interfaceTemplate = fs.readFileSync('src/templates/entities/model1.hbs', 'utf8');

export class Model {


    generateModel() {
    
    const compiledTemplate = Handlebars.compile(interfaceTemplate);
    const generatedCode = compiledTemplate(schema);
    //
    fs.outputFileSync(`targetApp/static-app/src/${schema.labels.code}/entities/${schema.labels.code}.entity.ts`, generatedCode);
    //fs.ensureDirSync('src/person/dto');
    console.log(appName);

    }
    
    
}

