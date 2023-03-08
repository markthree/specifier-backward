# specifier-backward

"node:any" to "any"

<br />

## README 🦉

[简体中文](./README_CN.md) | English

<br />

## Motivation

兼容老版本 `node` 👉 [Error: Cannot find module 'node:buffer'](https://github.com/markthree/go-get-folder-size/issues/2)

<br />

## Usage

### install

```shell
npm i specifier-backward -D
```

### vite

```ts
// vite.config.ts
import { vitePlugin } from 'specifier-backward'

export default {
	plugins: [vitePlugin()]
}
```

### rollup

```ts
// rollup.config.ts
import { rollupPlugin } from 'specifier-backward'

export default {
	plugins: [rollupPlugin()]
}
```

### webpack

```ts
// webpack.config.ts
import { webpackPlugin } from 'specifier-backward'

export default {
	plugins: [webpackPlugin()]
}
```

### esbuild

```ts
import { build } from 'esbuild'
import { esbuildPlugin } from 'specifier-backward'

build({
	plugins: [esbuildPlugin()]
})
```

<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
