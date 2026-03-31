import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://raw.githubusercontent.com/firefly-iii/api-docs/main/dist/firefly-iii-6.5.5-v1.yaml",
  output: "./src",
  plugins: [
    { enums: true, name: "@hey-api/typescript" },
    {
      client: "@hey-api/client-axios",
      name: "@hey-api/sdk",
      operations: {
        containerName: "{{name}}Service",
        strategy: "byTags",
      },
    },
  ],
});
