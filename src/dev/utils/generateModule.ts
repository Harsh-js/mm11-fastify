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
const files = [
    `${folder}/${moduleName}.controllers.ts`,
    `${folder}/${moduleName}.routes.ts`,
    `${folder}/${moduleName}.schemas.ts`,
    `${folder}/${moduleName}.services.ts`,
    `${folder}/${moduleName}.errors.ts`,
]

for (let file of files) {


    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, "");
    }

}

console.log(`Module ${moduleName} created successfully!`);
