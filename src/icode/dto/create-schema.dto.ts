import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';
import { HandlebarsHelpers } from '../handlebarsHelpers/handlebars.helper';
import { NumberHelper } from '../handlebarsHelpers/number.helper';
import { DateHelper } from '../handlebarsHelpers/date.helper';
import { BooleanHelper } from '../handlebarsHelpers/boolean.helper';
import { NotAPrimitiveTypeHelper } from '../handlebarsHelpers/notPrimitiveType.helper';
import { StringHelper } from '../handlebarsHelpers/string.helper';


const createSchemaDtoTemplate = fs.readFileSync('src/templates/dto/create-schema.dto.hbs', 'utf8');
const stringHelper = new StringHelper()
const numberHelper = new NumberHelper(); 
const dateHelper = new DateHelper(); 
const booleanHelper = new BooleanHelper(); 
const notAPrimitiveTypeHelper = new NotAPrimitiveTypeHelper();

export class CreateSchemaeDto {


    generateCreateSchemaeDto(schema:any) {

        stringHelper.getStringHelper();
        numberHelper.getNumberHelper(); 
        dateHelper.getDaterHelper();
        booleanHelper.getBooleanHelper();
        notAPrimitiveTypeHelper.getNotAPrimitiveTypeHelper();
        const compiledTemplate = Handlebars.compile(createSchemaDtoTemplate);
        const generatedCode = compiledTemplate(schema);
        //
        fs.outputFileSync(`targetApp/static-app/src/${schema.labels.code}/dto/create-${schema.labels.code}.dto.ts`, generatedCode);

    }



}
