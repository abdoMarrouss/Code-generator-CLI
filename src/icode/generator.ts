import { Model } from "./model1";
import { appName } from '../../bin/test';
import { SchemaCode } from "./shcema";
import { AppModule } from "./modules/app.module";
import { SchemaModule } from "./modules/schema.module";
import { CreateSchemaeDto } from "./dto/create-schema.dto";
import { UpdateSchemaeDto } from "./dto/update-schema.dto";
import { ServiceTemplate } from "../routes/services/service";
import { ControllerTemplate } from "../routes/controllers/controller";
import { ReadInputs } from "./readInputs";
//import * as schema from '../inputs/models/model1.json';
import * as fs from 'fs-extra';


const model = new Model();
const schemaCode = new SchemaCode();
const appModule = new AppModule();
const schemaModule = new SchemaModule();
const createSchemaeDto = new CreateSchemaeDto();
const updateSchemaeDto = new UpdateSchemaeDto();
const serviceTemplate = new ServiceTemplate();
const controllerTemplate = new ControllerTemplate();
const readInputs = new ReadInputs();


//  for(let i=0; i<readInputs.getInputsDirectory().length; i++) {
//      console.log(readInputs.getInputsDirectory()[i]);
//      model.generateModel(readInputs.getInputsDirectory()[i]); 
//      schemaCode.generateSchema(readInputs.getInputsDirectory()[i]);
//      appModule.generateAppModule(readInputs.getInputsDirectory()[i]);
//      schemaModule.generateSchemaModule(readInputs.getInputsDirectory()[i]);
//      createSchemaeDto.generateCreateSchemaeDto(readInputs.getInputsDirectory()[i]);
//      updateSchemaeDto.generateUpdateSchemaeDto(readInputs.getInputsDirectory()[i]);
//      serviceTemplate.generateService(readInputs.getInputsDirectory()[i]);
//      controllerTemplate.generateController(readInputs.getInputsDirectory()[i]);


//  }
 

const filePath = 'targetApp/static-app/src/app.module.ts';

fs.promises.readFile(filePath, 'utf-8')
  .then(existingContent => {
    const newModules = ['UserModule', 'ProjectModule'];

    let updatedContent = existingContent.replace(
      /imports:\s*\[(.*?)\]/s,
      (match, imports) => {
        const existingModules = imports.trim();
        const updatedModules = [...existingModules.split(','), ...newModules]
          .map((module) => module.trim())
          .filter((module) => module !== '');
        return `imports: [\n${updatedModules.join(',\n')}\n]`;
      },
    );

    return fs.promises.writeFile(filePath, updatedContent);
  })
  .catch(error => {
    console.error(error);
  });