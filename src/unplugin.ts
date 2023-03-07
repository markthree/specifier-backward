import { transform } from './core'
import { createUnplugin } from 'unplugin'

function transformInclude(id: string) {
	return /.[j|t]s/g.test(id)
}

export const unplugin = createUnplugin(() => {
	return {
		name: 'unplugin-specifier-backward',
		transformInclude(id) {
			return transformInclude(id)
		},
		transform(code, id) {
			if (transformInclude(id)) {
				return transform(code)
			}
			return code
		}
	}
})

export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const webpackPlugin = unplugin.webpack
export const esbuildPlugin = unplugin.esbuild
