import models from "@models/index";
import Joi from "joi";
import { Model, DataTypes } from "sequelize";
import * as fs from "fs";

const sequelizeToJoi = (model: any) => {
	const attributes = model.getAttributes();

	let joiSchema = ``;

	const typeMapping = {
		[DataTypes.STRING.key]: `Joi.string()`,
		[DataTypes.TEXT.key]: `Joi.string()`,
		[DataTypes.CHAR.key]: `Joi.string()`,
		[DataTypes.INTEGER.key]: `Joi.number().integer()`,
		[DataTypes.TINYINT.key]: `Joi.number().integer()`,
		[DataTypes.BIGINT.key]: `Joi.number().integer()`,
		[DataTypes.FLOAT.key]: `Joi.number()`,
		[DataTypes.REAL.key]: `Joi.number()`,
		[DataTypes.DOUBLE.key]: `Joi.number()`,
		[DataTypes.DECIMAL.key]: `Joi.number()`,
		[DataTypes.DATE.key]: `Joi.date()`,
		[DataTypes.DATEONLY.key]: `Joi.date()`,
		[DataTypes.BOOLEAN.key]: `Joi.boolean()`,
		[DataTypes.ENUM.key]: `Joi.any()`,
		[DataTypes.JSON.key]: `Joi.any()`,
		[DataTypes.JSONB.key]: `Joi.any()`,
		[DataTypes.UUID.key]: `Joi.string().guid({ version: ["uuidv4"] })`,
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
				joiType + `.valid(${[...value.values].map((m) => `"${m}"`).join(",")})`;
		}

		if (isRequired) {
			joiSchema = joiSchema + `${key}:` + joiType + `.required(),\n`;
		} else {
			joiSchema = joiSchema + `${key}:` + joiType + `.allow(null),\n`;
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
	`import * as Joi from 'joi';\n\n // @Auto Generated Schema please don't edit any\n\n export default {${content}};\n`,
);
// console.log("userSchema: ", userSchema);
