# Please finish README before moving here

Publish Storybook

1. [Sign Up to Chromatic](https://www.chromatic.com//)

We need a way to share our design development, either by [converting to static site](https://storybook.js.org/docs/react/workflows/publish-storybook) or hosting in chromatic.

```bash
# build to static
# replace everything with -o
yarn build-storybook -o ./dist

# default build to public
build-storybook -s public


# run the app with any web server
npx http-server ./dist
```

2. SKIP TESTING

3. [Documentations](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/document/)

```js
// di file button.stories.tsx
export default {
  title: 'Design System/Button',
  component: Button,
  // tambahkan ini
  parameters: {
    componentSubTitle:'Displays an image that represents a user or organization',
  },
} as ComponentMeta<typeof Button>;


// Di file button.tsx, buat comment dengan format seperti ini
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export function NewButton(props: IButtonProps) {
  return <Button {...props}>{props.label ? props.label : props.children}</Button>;
}

// Adding description to specific component
export const Children = Template.bind({});
Children.args = {
  children: <div>Children</div>,
};
Children.parameters = {
  docs: {
    storyDescription: 'You can render a React element as children',
  },
};
```

2. Stories juga dapat dibuat dengan file mdx instead of js
<!-- Nngga bisa2 anjim T_T -->
3. SKIP Custom mdx
4. Publish documentation -- SKIP jika menggunakan custom mdx, tidak perlu build, dengan setup yang sekarang sudah cukup
