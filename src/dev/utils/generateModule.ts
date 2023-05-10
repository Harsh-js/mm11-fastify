import * as fs from "fs";

// Get the module name from command line arguments
const moduleName = process.argv[2];

// Define the folder structure
const folder = `${process.cwd()}/src/modules/${moduleName}`;

// Create the folder
if (!fs.existsSync(folder)) {
	fs.mkdirSync(folder);
}

// Create the files
const files: { path: string; content: string }[] = [
	{
		path: `${folder}/${moduleName}.controller.ts`,
		content: `import { R, asyncWrapper } from "@helpers/response-helpers";\nimport ${moduleName}Service from "./${moduleName}.service";\nimport models from "@models/index";\nimport apiError from "@helpers/errors";\n\nconst ${moduleName}Controller = {\n  test: asyncWrapper(async (req, res) => {\n      return R(true,"Hello from ${moduleName}");\n}),};\nexport default ${moduleName}Controller;`,
	},
	{
		path: `${folder}/${moduleName}.route.ts`,
		content: `import { FastifyInstance } from "fastify";\nimport cn from "./${moduleName}.controller";\nimport modelSchema from "@models/json/modelSchema";\nimport Joi from "joi";\nimport schema from "./${moduleName}.schema";\n\nconst ${moduleName}Route = async (app: FastifyInstance) => {\n\n       app.post("/test/:id", schema.test, cn.test);\n\n};\nexport default ${moduleName}Route;
        `,
	},
	{
		path: `${folder}/${moduleName}.schema.ts`,
		content: `import { schemaWrapper } from "@helpers/schemaWrapper";\nimport modelSchema from "@models/json/modelSchema";\nimport { RouteShorthandOptions } from "fastify";\nimport Joi from "joi";\n\nconst s = new schemaWrapper({\n       tags: ["${moduleName}"],\n});\n\nconst ${moduleName}Schema: { [key: string]: RouteShorthandOptions } = {\n\n      test: s.schema(null, null, { hi: Joi.string() }, { id: Joi.string() }),\n};\n\nexport default ${moduleName}Schema;
        `,
	},
	{
		path: `${folder}/${moduleName}.service.ts`,
		content: `import { customError } from "@helpers/AppErr";\nimport apiError from "@helpers/errors";\nimport models from "@models/index";\n\nconst ${moduleName}Service = {\n     test: async () => {},}\nexport default ${moduleName}Service;
        `,
	},

	// `${folder}/${moduleName}.service.ts`,
];

for (let file of files) {
	if (!fs.existsSync(file?.path)) {
		fs.writeFileSync(file?.path, file?.content);
	}
}

console.log(`Module ${moduleName} created successfully!`);
