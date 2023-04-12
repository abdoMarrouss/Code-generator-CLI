import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';

const updateSchemaDtoTemplate = fs.readFileSync('src/templates/dto/update-schema.dto.hbs', 'utf8');

export class UpdateSchemaeDto {


    generateUpdateSchemaeDto() {
    
    const compiledTemplate = Handlebars.compile(updateSchemaDtoTemplate);
    const generatedCode = compiledTemplate(schema);
    //
    fs.outputFileSync(`targetApp/static-app/src/${schema.name}/dto/update-${schema.name}.dto.ts`, generatedCode);

    }
    
    
    
}
