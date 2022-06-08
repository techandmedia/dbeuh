# TROUBLESHOOTING

## ERROR

- ['Error: Property Name Expected in tsconfig.base.json at position 532\n](https://github.com/nrwl/nx/issues/1462)
  - `Make sure no comma in any of the json file`

### Warning: React does not recognize the `subMenuIcon` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `submenuicon` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

```jsx
// change
subMenuIcon;
// to a lowercase
submenuicon;
```

## TEST-ERROR

TypeError: window.matchMedia is not a function

https://thewebdev.info/2022/02/24/how-to-fix-the-typeerror-window-matchmedia-is-not-a-function-error-in-jest-tests/

Add this for each test

```js
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

beforeAll(() => {
  cleanup();
});
```

DO NOT UPGRADE NX, causing lots of error during installation
To avoid error, just remove the node_modules folder and yarn.lock, and put the latest version in the package.json, and do yarn install
