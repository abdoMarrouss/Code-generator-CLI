import Handlebars from "handlebars";



export class NumberHelper {

    isNumberHelper = (value: any, options: any) => {
        if (value == 'number') {
            return options.fn();
        } else {
            return options.inverse();
        }
    };


    getNumberHelper(){
        
        Handlebars.registerHelper('isNumber', this.isNumberHelper);

    }



}