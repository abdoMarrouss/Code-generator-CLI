import * as fs from 'fs';
import Handlebars from "handlebars";

const template = Handlebars.compile(`
Your App Here {{someHelper foo}}
`);


const schema = {
  className: 'Person',
  properties: [
    { propertyName: 'firstName', propertyType: 'string' },
    { propertyName: 'lastName', propertyType: 'string' },
    { propertyName: 'age', propertyType: 'number' },
  ],

};

try {
  const interfaceTemplate = fs.readFileSync('src/templates/interface.hbs', 'utf8');
  const compiledTemplate = Handlebars.compile(interfaceTemplate);
  const generatedCode = compiledTemplate(schema);
  //
  fs.writeFileSync('./interfaces.ts', generatedCode);

}
catch (error) {
  console.log(error);
}


