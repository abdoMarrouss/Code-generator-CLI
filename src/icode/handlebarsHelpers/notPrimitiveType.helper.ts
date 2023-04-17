import Handlebars from "handlebars";



export class NotAPrimitiveTypeHelper {

    isPrimitiveType = (value: any): boolean => {
        const primitiveTypes = ['string', 'number', 'boolean', 'Date'];
        return primitiveTypes.includes(value);
    };


    getNotAPrimitiveTypeHelper() {
        Handlebars.registerHelper('isPrimitiveType', this.isPrimitiveType);


    }



}