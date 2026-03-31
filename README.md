# firefly-iii-sdk

A TypeScript SDK for [Firefly III](https://www.firefly-iii.org/), automatically generated from the [official OpenAPI specification](https://github.com/firefly-iii/api-docs).

## Installation

```bash
npm install @billos/firefly-iii-sdk@6.5.1-sdk.5
```

## Usage

```typescript
import { createClient } from "firefly-iii-sdk/client";
import { AboutService } from "firefly-iii-sdk";

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
