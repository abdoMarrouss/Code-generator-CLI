import * as fs from 'fs';
import Handlebars from "handlebars";
import schema from './inputs/models/model1.json';


 
  
  const interfaceTemplate = fs.readFileSync('src/templates/model1.hbs', 'utf8');

  console.log(interfaceTemplate);
  const compiledTemplate = Handlebars.compile(interfaceTemplate);
   const generatedCode = compiledTemplate(schema);
  //
   fs.writeFileSync(`src/${schema.name}.ts`, generatedCode);

  
  