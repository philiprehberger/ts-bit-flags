# @philiprehberger/bit-flags

[![CI](https://github.com/philiprehberger/ts-bit-flags/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-bit-flags/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/bit-flags.svg)](https://www.npmjs.com/package/@philiprehberger/bit-flags)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-bit-flags)](https://github.com/philiprehberger/ts-bit-flags/commits/main)

Type-safe bitwise flag operations for permissions, features, and options.

## Installation

```bash
npm install @philiprehberger/bit-flags
```

## Usage

```ts
import { defineFlags } from '@philiprehberger/bit-flags';

const permissions = defineFlags({
  read: 1,
  write: 2,
  execute: 4,
});

let flags = permissions.set(0, 'read', 'write'); // 3
permissions.has(flags, 'read'); // true
permissions.has(flags, 'execute'); // false

flags = permissions.toggle(flags, 'execute'); // 7
permissions.toArray(flags); // ['read', 'write', 'execute']
```

## API

### `defineFlags<F>(definition: F): FlagSet<F>`

Creates a type-safe flag set from a record of flag names to bit values.

### `FlagSet<F>`

- **`has(flags, flag)`** — Check if a flag is set
- **`set(flags, ...flagNames)`** — Set one or more flags
- **`unset(flags, ...flagNames)`** — Unset one or more flags
- **`toggle(flags, flag)`** — Toggle a flag on/off
- **`toArray(flags)`** — Get active flag names as an array
- **`fromArray(flagNames)`** — Combine flag names into a number
- **`all`** — All flags combined
- **`none`** — Zero value

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-bit-flags)

🐛 [Report issues](https://github.com/philiprehberger/ts-bit-flags/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-bit-flags/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
