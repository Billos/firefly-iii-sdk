import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://raw.githubusercontent.com/firefly-iii/api-docs/main/dist/firefly-iii-6.5.5-v1.yaml",
  output: "./src",
  plugins: [
    { enums: true, name: "@hey-api/typescript" },
    {
      name: "@hey-api/sdk",
      client: "@hey-api/client-fetch",
      operations: {
        containerName: "{{name}}Service",
        strategy: "byTags",
      },
    },
    {
      name: "@hey-api/client-fetch",
      throwOnError: true,
    },
  ],
});
