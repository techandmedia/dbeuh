Error #1
There might be a problem with the project dependency tree

1. Problem dari salah satu dependency library yang dipakai React dan Storybook tidak match
2. Ketik salah satu dari ini, atau tergantung lib apa yang bermasalah

```bash
npm ls webpack
ATAU
npm ls babel-loader
```

3. Akan muncul daftar lib yang dipakai di masing-masing React dan Storybook
4. Buat object resolutions di package.json, dan tambahkan library di dalamnya, dan gunakan versi yang paling kecil yang dipakai

```json
"resolutions": {
  "babel-loader": "8.1.0"
},
```

### Publishing to NPM

https://storybook.js.org/tutorials/design-systems-for-developers/react/en/distribute/
