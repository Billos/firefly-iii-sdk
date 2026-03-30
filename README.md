# firefly-iii-typescript-sdk

A TypeScript SDK for [Firefly III](https://www.firefly-iii.org/), automatically generated from the [official OpenAPI specification](https://github.com/firefly-iii/api-docs).

## Installation

```bash
npm install firefly-iii-typescript-sdk @hey-api/client-axios axios
```

## Usage

```typescript
import { createClient } from "@hey-api/client-axios";
import { AboutService } from "firefly-iii-typescript-sdk";

const client = createClient({
  baseUrl: "https://your-firefly-instance/api/v1",
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  },
});

const { data } = await AboutService.getAbout({ client });
console.log(data);
```

## SDK Generation

This SDK is generated using [@hey-api/openapi-ts](https://heyapi.dev/) from the Firefly III OpenAPI specification.

To regenerate the SDK:

```bash
npm install
npm run generate
```

To build:

```bash
npm run build
```
