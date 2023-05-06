import { JSONSchema7 } from 'json-schema';


export default function interfaceToJsonSchema<T>(intf: T): JSONSchema7 {
    const schema: JSONSchema7 = {
        type: 'object',
        properties: {},
        required: [],
    };

    for (const key in intf) {
        if (Object.prototype.hasOwnProperty.call(intf, key)) {
            const prop = intf[key];
            schema.properties[key] = {
                type: typeof prop,
            };
            if (typeof prop === 'string') {
                schema.properties[key].minLength = 1;
            }
            if (typeof prop === 'number') {
                schema.properties[key].minimum = 0;
            }
            schema.required.push(key);
        }
    }

    return schema;
}
