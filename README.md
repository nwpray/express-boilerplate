# Express Boilerplate

An opinionated boilerplate for building Express applications with modern tooling: Webpack, Babel, ESLint, Prettier, and Jest.

## Features

- **Express 5.x**: Modern Express server setup
- **Webpack**: Bundles server code for development and production
- **Babel**: ESNext syntax, decorators, and class properties support
- **ESLint & Prettier**: Enforced code style and formatting
- **Jest**: Out-of-the-box unit testing
- **Husky & Commitlint**: Git hooks for linting, formatting, and commit message validation
- **Path Aliases**: Use `@` as an alias for the `src` directory

## Getting Started

### Installation

```bash
git clone https://github.com/nwpray/express-boilerplate.git
cd express-boilerplate
npm install
```

### Development

```bash
npm run build:watch   # Rebuild on file changes
npm run start:watch   # Restart server on changes (nodemon)
```

### Production

```bash
npm run build
npm start
```

### Linting & Formatting

```bash
npm run lint      # Lint and auto-fix code
npm run format    # Format code with Prettier
```

### Testing

```bash
npm test
```

## Project Structure

```
.
├── src/
│   ├── controllers/
│   │   └── Info.js
│   ├── core/
│   │   └── Controller/
│   └── index.js
├── dist/
├── .babelrc
├── .eslintrc
├── .prettierrc
├── webpack.config.js
├── package.json
└── README.md
```

## Example

A simple controller using decorators:

```js
// src/controllers/Info.js
import Controller from '@/core/Controller';

@Controller()
export default class InfoController {
  @Controller.Method('get', '/')
  static read(req, res) {
    res.send('express-boilerplate');
  }
}
```

## Scripts

- `npm run build` – Bundle source files with Webpack
- `npm run build:watch` – Watch and rebuild on changes
- `npm run start` – Start the compiled server
- `npm run start:watch` – Start server with nodemon
- `npm run lint` – Lint and fix code
- `npm run format` – Format code with Prettier
- `npm test` – Run tests

## License

ISC

---

Made by [Nick Pray](mailto:nicholasdigit@gmail.com)
