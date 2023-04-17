import Handlebars from "handlebars";



export class BooleanHelper {

    isBooleanHelper = (value: any, options: any) => {
        if (value == 'boolean') {
            return options.fn();
        } else {
            return options.inverse();
        }
    };


    getBooleanHelper() {
        Handlebars.registerHelper('isBoolean', this.isBooleanHelper);


    }



}