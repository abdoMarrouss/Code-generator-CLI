import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';

const controllerTemplate = fs.readFileSync('src/templates/controllers/controller.hbs', 'utf8');



export class ControllerTemplate {


    generateController(schema:any) {
        Handlebars.registerHelper('toLowerCase', function(str) {
            return str.toLowerCase();
          });

        const compiledTemplate = Handlebars.compile(controllerTemplate);
        const generatedCode = compiledTemplate(schema);

        fs.outputFileSync(`targetApp/static-app/src/${schema.labels.code}/controllers/${schema.labels.code}.controller.ts`, generatedCode);


    }



}