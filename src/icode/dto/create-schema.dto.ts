import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';

const createSchemaDtoTemplate = fs.readFileSync('src/templates/dto/create-schema.dto.hbs', 'utf8');

export class CreateSchemaeDto {


    generatCreateSchemaeDto() {
    
    const compiledTemplate = Handlebars.compile(createSchemaDtoTemplate);
    const generatedCode = compiledTemplate(schema);
    //
    fs.outputFileSync(`targetApp/static-app/src/${schema.name}/dto/create-${schema.name}.dto.ts`, generatedCode);

    }
    
    
    
}
