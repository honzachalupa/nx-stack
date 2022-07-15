const packageJson = require("../../package.json"); // Take root package.json
const fs = require("fs");
const deps = packageJson["firebase-functions-dependencies"];

const firebaseFunctionsPackageJson = {
    main: "src/index.js",
    dependencies: packageJson.dependencies,
};

const path = "dist/functions/package.json";

fs.writeFileSync(path, JSON.stringify(firebaseFunctionsPackageJson));

console.log(`Cloud Functions's package.json successfully generated (${path}).`);
