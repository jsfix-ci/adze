# 1. Install Adze

Adze is a logging library that exposes a user-friendly API that is similar to the JavaScript logging standard. Let's get started by first installing it into our project.

```bash
# NPM
npm install --save adze

# Yarn
yarn add adze

# pnpm
pnpm add adze
```

## Version Requirements

As with all libraries, there are some minimum requirements that must be met in order to use Adze.

| Dependency | Supported Versions | Notes                                    |
| ---------- | ------------------ | ---------------------------------------- |
| node       | >= 10.x            | When running Adze in a Node environment. |
| typescript | >= 4.1             | When using Adze with TypeScript          |

## TypeScript Configuration

Adze is built to be used with TypeScript and we highly encourage using it in this way.

When building your project with TypeScript, you need to make sure you use the `"DOM"` lib because Adze supports both the web browser and Node. Also, to support the dependencies of Adze, you'll need to add `"esModuleInterop": true` to your tsconfig as well.

For more information about configuring TypeScript, go to [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### Example

```json
{
  "compilerOptions": {
    // ...your other options
    "lib": ["DOM"],
    "esModuleInterop": true
  }
}
```
