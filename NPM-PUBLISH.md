https://sergiodxa.com/articles/github-actions-npm-publish

### Membuat action di github

Cari template bertuliskan npm-publish

Perhatikan file
.github\workflows\npm-publish.yml

```yml
# jika bertuliskan on release, maka harus release 'manual' melalui menu github.Jangan lupa untuk memberikan tag version number pada saat sebelum melakukan release
# Jika bertuliskan on push, maka perhatikan branch mana PR ini akan trigger
on:
  release:
    types: [created]
#
# build ini akan error karena tidak berada di folder tertentu
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: yarn
      - run: yarn build

  publish-npm:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          registry-url: https://registry.npmjs.org/
      - run: cd dist/libs/antd
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}

# Gabungkan step nya menjadi sperti ini
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          registry-url: https://registry.npmjs.org/
      - run: yarn && yarn build
      - run: cd dist/libs/antd && npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

## ERROR

npm ERR! 402 Payment Required
https://stackoverflow.com/questions/41981686/getting-error-402-while-publishing-package-using-npm

```bash
# For first time publishing a package
npm publish --access=public
```

MAKE SURE EVERYTIME YOU UPDATE THE PACKAGE, UPDATE THE VERSION NUMBER

```json
// Or add this to package.json on each library that you want to publish
{
  "publishConfig": {
    "access": "public"
  },
  "private": false
}
```

If there's seem the action on github not running the publish command; it's probably that the package is private OR the version number is not updated

When publishing a package to npm, make sure to add comment to make sure the correct package is published. For example, to publish a antd package, add "publish-antd" in the comment.
List of relevant comment. Add all of them if you make changes for all packages at the same time and want to publish them together

UPDATE: this must be put in the TITLE of the commit, not in the description to be able to trigger publishing command in npm-publish.yml file

```json
// From npm-publish.yml file
// Find a way to get the descrption message instead
// https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push
if: "contains(github.event.head_commit.message, 'publish-antd')"
```

- publish-antd
- publish-utils

If you dont want to publish the package, make sure to add this in the comment
SKIP SCRIPTS

How to publish manually

```bash
# From the root of your project, login to your npm account
# Usually the token expired after 1 year
npm login
# Enter your account credentials; npm will also send OTP to email
# Build the project then go to the dist of the lib you want to publish
cd dist/libs/antd && npm publish
```
