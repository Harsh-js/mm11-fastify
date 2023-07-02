import models from "@models/index";
import Joi from "joi";
import Yup from "yup";
import { Model, DataTypes } from "sequelize";
import * as fs from "fs";

const sequelizeToJoi = (model: any) => {
	const attributes = model.getAttributes();

	let joiSchema = ``;

	const typeMapping = {
		[DataTypes.STRING.key]: `string()`,
		[DataTypes.TEXT.key]: `string()`,
		[DataTypes.CHAR.key]: `string()`,
		[DataTypes.INTEGER.key]: `number().integer()`,
		[DataTypes.TINYINT.key]: `number().integer()`,
		[DataTypes.BIGINT.key]: `number().integer()`,
		[DataTypes.FLOAT.key]: `number()`,
		[DataTypes.REAL.key]: `number()`,
		[DataTypes.DOUBLE.key]: `number()`,
		[DataTypes.DECIMAL.key]: `number()`,
		[DataTypes.DATE.key]: `date()`,
		[DataTypes.DATEONLY.key]: `date()`,
		// [DataTypes.BOOLEAN.key]: `boolean()`,
		[DataTypes.BOOLEAN.key]: `number().integer()`,
		[DataTypes.ENUM.key]: `mixed()`,
		[DataTypes.JSON.key]: `mixed()`,
		[DataTypes.JSONB.key]: `mixed()`,
		[DataTypes.UUID.key]: `string().guid({ version: ["uuidv4"] })`,
	};
	for (const entry of Object.entries(attributes)) {
		const [key, value]: any = entry;
		const type = value.type.key;

		let joiType = typeMapping[type];

		if (!joiType) {
			throw new Error(`Unhandled Sequelize data type: ${type}`);
		}

		const isRequired = value.allowNull === false;

		if (type == DataTypes.ENUM.key) {
			joiType =
				joiType +
				`.oneOf([${[...value.values].map((m) => `"${m}"`).join(",")}])`;
		}

		if (isRequired) {
			joiSchema = joiSchema + `${key}:` + joiType + `.required(),\n`;
		} else {
			joiSchema = joiSchema + `${key}:` + joiType + `.nullable(),\n`;
		}
	}

	console.log("joiSchema: ", joiSchema);
	return `{${joiSchema}}`;
};

export default sequelizeToJoi;
let content = ``;
for (let key in models) {
	const joiSchema = sequelizeToJoi((models as any)[key]);
	// console.log("userSchema: ", joiSchema);

	content = content + `${key}:` + joiSchema + ",\n";
}

// console.log("userSchema: ", joiSchema);

fs.writeFileSync(
	`${process.cwd()}/src/models/json/modelSchema.ts`,
	`import { object, string, array, tuple, date, boolean, number, mixed, } from "yup";\n\n // @Auto Generated Schema please don't edit any\n\n export default {${content}};\n`,
);
// console.log("userSchema: ", userSchema);
