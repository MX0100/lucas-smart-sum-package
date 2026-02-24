# lucas-smart-sum-package

A simple npm package for learning purposes. This project demonstrates how to create, test, and publish an npm package with GitHub Actions CI/CD.

## Features

- Simple sum function
- Postinstall welcome message
- Automated testing
- GitHub Actions workflow for publishing

## Installation

```bash
npm install lucas-smart-sum-package
```

## Usage

```javascript
const { magicSum } = require('lucas-smart-sum-package');

console.log(magicSum(2, 3)); // 5
console.log(magicSum(-1, 1)); // 0
```

## Development

```bash
# Run tests
npm test
```

## Publishing

This package uses GitHub Actions for automated publishing. To release a new version:

1. Update the version: `npm version patch`
2. Push with tags: `git push --follow-tags`
3. Create a GitHub Release with the matching tag (e.g., `v0.0.5`)

The workflow will automatically verify the version, run tests, and publish to npm.

## Learning Purpose

This is a learning project to understand:

- npm package structure
- package.json configuration
- npm publishing workflow
- GitHub Actions CI/CD
- Semantic versioning

## License

MIT
