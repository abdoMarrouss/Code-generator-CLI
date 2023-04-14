import { Model } from "./model1";
import { appName } from '../../bin/test';
import { SchemaCode } from "./shcema";
import { AppModule } from "./modules/app.module";
import { SchemaModule } from "./modules/schema.module";
import { CreateSchemaeDto } from "./dto/create-schema.dto";
import { UpdateSchemaeDto } from "./dto/update-schema.dto";
import { ServiceTemplate } from "../routes/services/service";
import { ControllerTemplate } from "../routes/controllers/controller";


const model = new Model();
const schemaCode = new SchemaCode();
const appModule = new AppModule();
const schemaModule = new SchemaModule();
const createSchemaeDto = new CreateSchemaeDto();
const updateSchemaeDto = new UpdateSchemaeDto();
const serviceTemplate = new ServiceTemplate();
const controllerTemplate = new ControllerTemplate();



model.generateModel();
schemaCode.generateSchema();
appModule.generateAppModule();
schemaModule.generateSchemaModule();
createSchemaeDto.generateCreateSchemaeDto();
updateSchemaeDto.generateUpdateSchemaeDto();
serviceTemplate.generateService();
controllerTemplate.generateController();
//console.log("here is the appName : ", appName);
// console.log("test");