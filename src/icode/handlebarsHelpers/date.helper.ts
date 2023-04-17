import Handlebars from "handlebars";



export class DateHelper {

    isDateHelper = (value: any, options: any) => {
        if (value == 'Date') {
            return options.fn();
        } else {
            return options.inverse();
        }
    };



    getDaterHelper() {

        Handlebars.registerHelper('isDate', this.isDateHelper);

    }



}