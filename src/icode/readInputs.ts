import * as fs from 'fs-extra';
import * as path from 'path';
import schema from '../inputs/models/model1.json';


export class ReadInputs {

    getInputsDirectory() {
        const modelsDir = path.join(__dirname, '../inputs/models/');
        let schemas : any [] = [];
      
        fs.readdirSync(modelsDir)
          .filter((file) => file.endsWith('.json'))
          .forEach((file) => {
            const schema = fs.readJsonSync(path.join(modelsDir, file));
            schemas.push(schema);
          });
      
        return schemas;
        }

}

