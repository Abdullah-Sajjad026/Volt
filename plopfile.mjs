import { camelCase, pascalCase } from "change-case";
import path from "path";

/**
 * Generates a new module.
 *
 * The generator uses `plop` to create a new module with a predefined structure based on the Domain-Driven Design (DDD) architecture.
 * This was introduced as an effort to introduce a more organized structure and consistency across the codebase.
 * The following function is a Plop generator that creates a new module based on the templates provided in the `plop-templates` directory.
 *
 * To run the generator, execute the following command:
 * npm|yarn|pnpm|bun run generate module [moduleName] [targetDirectory]
 *
 * The generator prompts the user for the module name and target directory if not provided.
 *
 * The generator then creates the following files:
 * - `${modulePath}/index.js`
 * - `${modulePath}/docs/README.md`
 * - `${modulePath}/apis/index.js`
 * - `${modulePath}/apis/query/query.api.js`
 * - `${modulePath}/apis/query/query.api.test.js`
 * - `${modulePath}/apis/mutation/mutation.api.js`
 * - `${modulePath}/apis/mutation/mutation.api.test.js`
 * - `${modulePath}/context/index.js`
 * - `${modulePath}/context/${moduleName}/${moduleName}.context.js`
 * - `${modulePath}/context/${moduleName}/${moduleName}.context.test.js`
 * - `${modulePath}/hocs/index.js`
 * - `${modulePath}/hocs/${moduleName}/${moduleName}.hoc.js`
 * - `${modulePath}/hocs/${moduleName}/${moduleName}.hoc.test.js`
 * - `${modulePath}/hooks/index.js`
 * - `${modulePath}/hooks/${moduleName}/${moduleName}.hook.js`
 * - `${modulePath}/hooks/${moduleName}/${moduleName}.hook.test.js`
 * - `${modulePath}/models/index.js`
 * - `${modulePath}/models/${moduleName}/${moduleName}.js`
 * - `${modulePath}/models/${moduleName}/${moduleName}.test.js`
 * - `${modulePath}/models/${moduleName}/${moduleName}.dumps.js`
 * - `${modulePath}/layouts/index.js`
 * - `${modulePath}/layouts/${moduleName}/${moduleName}.layout.js`
 * - `${modulePath}/layouts/${moduleName}/${moduleName}.layout.test.jsx`
 * - `${modulePath}/components/index.js`
 * - `${modulePath}/components/${moduleName}/${moduleName}.component.js`
 * - `${modulePath}/components/${moduleName}/${moduleName}.component.test.jsx`
 * - `${modulePath}/${moduleName}.routes.js`
 * - `${modulePath}/${moduleName}.context.js`
 * - `${modulePath}/${moduleName}.config.js`
 * - `${modulePath}/${moduleName}.utils.js`
 *
 * Modification of any of the templates should be done in the `plop-templates` directory.
 * Furthermore, the generator can be extended to include more templates or actions as needed.
 *
 * @version 0.0.1
 * Added the module generator to create a new module with a predefined structure based on the Domain-Driven Design (DDD) architecture.
 *
 * @version 0.0.2
 * Updated the module generator to render the modules at any custom directory.
 *
 * @version 0.0.3
 * Added custom helpers to convert text to camelCase and pascalCase.
 *
 * @version 0.0.4
 * Added the `example` module as a blueprint of the current version.
 *
 * @version 0.0.5
 * Updated the generated hooks to include a blueprint on how to handle the hook.
 *
 * @version 0.0.6
 * Updated the generated HOCs to include a blueprint on how to handle error, loading, and context states.
 *
 * @version 0.0.7
 * Added version info to all templates to introduce tracability.
 *
 * @version 0.0.8
 * Added queryResult to the generated context and HOCs for the consumers to use.
 *
 * @version 0.0.9
 * Removed mutationKey and generateOriginalData from the mutations as they are not needed.
 *
 * @version 0.0.10
 * Added a playground.jsx file for the generated module to showcase all of its components.
 *
 * @version 0.0.11
 *
 * @version 0.0.12
 * Added `@ts-check` directive to all generated files to enable TypeScript type checking.
 *
 * @version 0.0.13
 * Renamed models to include a `.model` suffix.
 *
 * @version 0.0.14
 * Migrated the contexts to a separate directory named `contexts` since most modules end up needing a context for every model.
 *
 * @param {Object} plop - The plop object to register the generator.
 */
export default function generator(plop) {
  const generatorVersion = "0.0.14";

  // Casing helpers
  plop.setHelper("pascalCase", (text) => pascalCase(text));
  plop.setHelper("camelCase", (text) => camelCase(text));

  // Helper that writes the header of the generated files
  plop.setHelper(
    "writeHeader",
    () =>
      `// @ts-check
		
/*
 * Auto-Generated using the module generator v${generatorVersion}
 * Refer to the generator (plopfile.mjs) for more information.
 */`
  );

  // Module generator
  plop.setGenerator("module", {
    description: "Generate a new module",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "Module name (e.g., user, product):",
      },
      {
        type: "input",
        name: "targetDirectory",
        message:
          "Target directory (e.g., modules/user, leave empty to generate a root-level module):",
        default: ".",
      },
    ],
    actions: function (data) {
      const { moduleName, targetDirectory } = data;
      const modulePath = path.join(targetDirectory, moduleName);

      const actions = [
        {
          type: "add",
          path: `${modulePath}/index.js`,
          templateFile: "plop-templates/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/docs/README.md`,
          templateFile: "plop-templates/docs/README.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/apis/index.js`,
          templateFile: "plop-templates/apis/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/apis/query/query.api.js`,
          templateFile: "plop-templates/apis/query/query.api.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/apis/query/query.api.test.js`,
          templateFile: "plop-templates/apis/query/query.api.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/apis/mutation/mutation.api.js`,
          templateFile: "plop-templates/apis/mutation/mutation.api.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/apis/mutation/mutation.api.test.js`,
          templateFile: "plop-templates/apis/mutation/mutation.api.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/contexts/index.js`,
          templateFile: "plop-templates/contexts/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/contexts/${moduleName}/${moduleName}.context.js`,
          templateFile: "plop-templates/contexts/template/template.context.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/contexts/${moduleName}/${moduleName}.context.test.js`,
          templateFile:
            "plop-templates/contexts/template/template.context.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/hocs/index.js`,
          templateFile: "plop-templates/hocs/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/hocs/${moduleName}/${moduleName}.hoc.js`,
          templateFile: "plop-templates/hocs/template/template.hoc.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/hocs/${moduleName}/${moduleName}.hoc.test.js`,
          templateFile: "plop-templates/hocs/template/template.hoc.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/hooks/index.js`,
          templateFile: "plop-templates/hooks/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/hooks/${moduleName}/${moduleName}.hook.js`,
          templateFile: "plop-templates/hooks/template/template.hook.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/hooks/${moduleName}/${moduleName}.hook.test.js`,
          templateFile: "plop-templates/hooks/template/template.hook.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/models/index.js`,
          templateFile: "plop-templates/models/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/models/${moduleName}/${moduleName}.model.js`,
          templateFile: "plop-templates/models/template/template.model.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/models/${moduleName}/${moduleName}.model.test.js`,
          templateFile:
            "plop-templates/models/template/template.model.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/layouts/index.js`,
          templateFile: "plop-templates/layouts/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/layouts/${moduleName}/${moduleName}.layout.jsx`,
          templateFile: "plop-templates/layouts/template/template.layout.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/layouts/${moduleName}/${moduleName}.layout.test.jsx`,
          templateFile:
            "plop-templates/layouts/template/template.layout.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/components/index.js`,
          templateFile: "plop-templates/components/index.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/components/${moduleName}/${moduleName}.component.jsx`,
          templateFile:
            "plop-templates/components/template/template.component.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/components/${moduleName}/${moduleName}.component.test.jsx`,
          templateFile:
            "plop-templates/components/template/template.component.test.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/${moduleName}.utils.js`,
          templateFile: "plop-templates/template.utils.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/${moduleName}.routes.js`,
          templateFile: "plop-templates/template.routes.hbs",
        },
        {
          type: "add",
          path: `${modulePath}/${moduleName}.config.js`,
          templateFile: "plop-templates/template.config.hbs",
        },
      ];

      return actions;
    },
  });
}
