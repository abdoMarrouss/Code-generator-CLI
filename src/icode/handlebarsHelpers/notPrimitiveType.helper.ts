import Handlebars from "handlebars";



export class NotAPrimitiveTypeHelper {

    isPrimitiveType = (value: any): boolean => {
        const primitiveTypes = ['string', 'number', 'boolean', 'Date'];
        return primitiveTypes.includes(value);
    };

    isArrayType = (value: any): boolean => {
        const array = 'array';
        return array.includes(value);
    };




    getNotAPrimitiveTypeHelper() {
        Handlebars.registerHelper('isPrimitiveType', this.isPrimitiveType);
        Handlebars.registerHelper('isArrayType', this.isArrayType);

    }



}