import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';

const serviceTemplate = fs.readFileSync('src/templates/services/service.hbs', 'utf8');



export class ServiceTemplate {


    generateService() {
        Handlebars.registerHelper('toLowerCase', function(str) {
            return str.toLowerCase();
          });

        const compiledTemplate = Handlebars.compile(serviceTemplate);
        const generatedCode = compiledTemplate(schema);

        fs.outputFileSync(`targetApp/static-app/src/${schema.name}/services/${schema.name}.service.ts`, generatedCode);


    }



}