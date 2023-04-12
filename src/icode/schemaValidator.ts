import Ajv, {JSONSchemaType} from "ajv"
import jsonData from '../inputs/models/model2.json';




const ajv = new Ajv();


const schema = {
    type: 'object',
    properties: {
      name: { type: 'string' }
    },
    required: ['name']
  };

  const valid = ajv.validate(schema, jsonData);

  if (!valid) {
    console.log(ajv.errors);
  } else {
    console.log('JSON data is valid');
  }

//console.log(jsonData);