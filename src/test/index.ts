import interfaceToJsonSchema from "@helpers/serializer";
import * as ts from 'typescript';
import { generateSchema, buildGenerator } from 'typescript-json-schema';


interface statesAttributes {
  id: number;
  name: string;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
}


function generateSchemaFromInterface<T>(type: { new(): T }) {
  const program = ts.createProgram([], {});
  const generator = buildGenerator(program, {});
  const schema = generator?.getSchemaForSymbol(type.name, true);
  return schema;
}

// Example usage:
const mySchema = generateSchemaFromInterface(statesAttributes);
console.log(JSON.stringify(mySchema, null, 2));
