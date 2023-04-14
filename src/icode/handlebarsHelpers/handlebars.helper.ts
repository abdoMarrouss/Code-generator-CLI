import Handlebars from "handlebars";


export class HandlebarsHelpers {


    //     const primitiveTypes = ['string', 'number', 'boolean', 'Date']; //we can add other primitive data types
    //     const isNotAPrimitiveType = (value: any, options: any) => {
    //     for (let i = 0; i < primitiveTypes.length; i++) {
    //         if (value === primitiveTypes[i]) {
    //             return options.inverse();
    //         }
    //     }
    //     return options.fn();
    // }


    isPrimitiveType = (value: any): boolean => {
        const primitiveTypes = ['string', 'number', 'boolean', 'Date'];
        return primitiveTypes.includes(value);
    };


    isStringHelper = (value: any, options: any) => {
        if (value === 'string' || value === 'string') { // all odds
            return options.fn();
        } else {
            return options.inverse();
        }
    };

    isNumberHelper = (value: any, options: any) => {
        if (value == 'number') {
            return options.fn();
        } else {
            return options.inverse();
        }
    };
    // 
    isBooleanHelper = (value: any, options: any) => {
        if (value == 'boolean') {
            return options.fn();
        } else {
            return options.inverse();
        }
    };
    isDateHelper = (value: any, options: any) => {
        if (value == 'Date') {
            return options.fn();
        } else {
            return options.inverse();
        }
    };

    handleBarsHelpers() {
        // Register the isPrimitiveType expression with Handlebars
        Handlebars.registerHelper('isPrimitiveType', this.isPrimitiveType);
        Handlebars.registerHelper('isString', this.isStringHelper);
        //Handlebars.registerHelper('isNotAPrimitiveType', this.isNotAPrimitiveType);
        Handlebars.registerHelper('isNumber', this.isNumberHelper);
        Handlebars.registerHelper('isBoolean', this.isBooleanHelper);
        Handlebars.registerHelper('isDate', this.isDateHelper);

    }

}
