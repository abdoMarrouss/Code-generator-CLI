import * as fs from 'fs-extra';
import Handlebars from "handlebars";
import schema from '../../inputs/models/model1.json';
import { HandlebarsHelpers } from '../handlebarsHelpers/handlebars.helper';

const createSchemaDtoTemplate = fs.readFileSync('src/templates/dto/create-schema.dto.hbs', 'utf8');
const handleBarsHelpers = new HandlebarsHelpers();

export class CreateSchemaeDto {


    generateCreateSchemaeDto() {

        // Handlebars.registerHelper('equalTo', function (str) {
        //     if(str === 'String'){
        //         str = 'isToString';
        //         console.log(str);
        //     }
        // });
        // const primitiveTypes = ['string', 'number', 'boolean', 'Date']; //we can add other primitive data types
        // const isNotAPrimitiveType = (value: any, options: any) => {
        //     for (let i = 0; i < primitiveTypes.length; i++) {
        //         if (value === primitiveTypes[i]) {
        //             return options.inverse();
        //         }
        //     }
        //     return options.fn();
        // }

        // const isPrimitiveType = (value: any): boolean => {
        //     const primitiveTypes = ['string', 'number', 'boolean', 'Date'];
        //     return primitiveTypes.includes(value);
        //   };
          
        //   // Register the isPrimitiveType expression with Handlebars
        //   Handlebars.registerHelper('isPrimitiveType', isPrimitiveType);




        // const isStringHelper = (value: any, options: any) => {
        //     if (value === 'string' || value === 'string') { // all odds
        //         return options.fn();
        //     } else {
        //         return options.inverse();
        //     }
        // };

        // const isNumberHelper = (value: any, options: any) => {
        //     if (value == 'number') {
        //         return options.fn();
        //     } else {
        //         return options.inverse();
        //     }
        // };
        // // 
        // const isBooleanHelper = (value: any, options: any) => {
        //     if (value == 'boolean') {
        //         return options.fn();
        //     } else {
        //         return options.inverse();
        //     }
        // };
        // const isDateHelper = (value: any, options: any) => {
        //     if (value == 'Date') {
        //         return options.fn();
        //     } else {
        //         return options.inverse();
        //     }
        // };

        // Handlebars.registerHelper('isString', isStringHelper);
        // Handlebars.registerHelper('isNotAPrimitiveType', isNotAPrimitiveType);
        // Handlebars.registerHelper('isNumber', isNumberHelper);
        // Handlebars.registerHelper('isBoolean', isBooleanHelper);
        // Handlebars.registerHelper('isDate', isDateHelper);





        handleBarsHelpers.handleBarsHelpers();
        const compiledTemplate = Handlebars.compile(createSchemaDtoTemplate);
        const generatedCode = compiledTemplate(schema);
        //
        fs.outputFileSync(`targetApp/static-app/src/${schema.labels.code}/dto/create-${schema.labels.code}.dto.ts`, generatedCode);

    }



}
