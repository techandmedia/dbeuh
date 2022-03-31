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
