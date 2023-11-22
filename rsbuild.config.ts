import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import { pluginVue2Jsx } from '@rsbuild/plugin-vue2-jsx';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { webpackProvider } from '@rsbuild/webpack';

export default defineConfig({
  provider: webpackProvider,
  plugins: [pluginVue2(), pluginBabel(), pluginNodePolyfill(), pluginVue2Jsx()],
  tools: {
    rspack: {
      output: {
        filename: 'js/[name][contenthash:9].js',
        chunkFilename: 'js/[name][contenthash:9].js',
        libraryTarget: 'umd',
        globalObject: 'window',
        hotUpdateChunkFilename: 'hot-reload/[id].[hash].hot-update.js',
        hotUpdateMainFilename: 'hot-reload/[hash].hot-update.json',
      },
    }
  },
});
