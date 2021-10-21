# Please finish README & DOCUMENTATION before moving here

Deploy to NPM

1. [Distribute](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/distribute/)

2. Modify index.js as entry point

3. [Build UI components](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/build/)

4. Pisahkan file stories dan file component dalam folder yang berbeda

- Jika ada error 'duplicate type', kemungkinan ada 2 source lib yang sama, coba tambahkan resolusi di file package.json
- Pastikan file2 yang tidak diperlukan dalam proses build, seperti asset gambar, icon, dihapus atau diexclude

```js
// package.json
  "resolutions": {
    "@types/react": "^17.0.0"
  },

// exclude file2 yang tidak digunakan ke dalam proses build

  "exclude": [
    "node_modules",
    "lib",
    ".storybook",
    "dist",
    "./src/stories/*.*"
  ]

// tambahkan key value berikut untuk keperluan build
// package.json
// cjs agar module dapat digunakan di browser dan server dan require
// esm adalah metode import file modern seperti React dan Ant Design
  "main": "./lib/cjs/index.js",
  "module": "./lib/esm/index.js",
  "types": "./lib/esm/index.d.ts",


// buat script build untuk typescript
  "build": "rimraf lib && yarn build:esm && yarn build:cjs",
  "build:esm": "tsc",
  "build:cjs": "tsc --module commonjs --outDir lib/cjs",
```

```bash
# login dengan akun npm
npm login
# pastikan version number selalu update
# misal
  "version": "0.1.8",
# menjadi
  "version": "0.1.9",

# build
yarn build
# publish
npm publish
```

5. CSS dari Ant Design harus disertakan agar component bawaan Ant Design benar secara styling
