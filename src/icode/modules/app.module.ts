import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';
import { appName } from '../../../bin/test' ; 

const appModuleTemplate = fs.readFileSync('src/templates/modules/app.module.hbs', 'utf8');

export class AppModule {


    generateAppModule() {
    
    const compiledTemplate = Handlebars.compile(appModuleTemplate);
    const generatedCode = compiledTemplate(schema);
    //
    fs.outputFileSync(`targetApp/static-app/src/app.module.ts`, generatedCode);
    //fs.ensureDirSync('src/person/dto');
    

    }
    
    
    
}