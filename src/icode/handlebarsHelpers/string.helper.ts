import Handlebars from "handlebars";



export class StringHelper {

    isStringHelper = (value: any, options: any) => {
        if (value === 'string' || value === 'string') { // all odds
            return options.fn();
        } else {
            return options.inverse();
        }
    };


    getStringHelper() {
        Handlebars.registerHelper('isString', this.isStringHelper);

    }



}