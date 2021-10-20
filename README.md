# Getting Started with Storybook

Step By Step Storybook

[Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers).

1. [Architecture](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/architecture/)

```bash
# Clone the example repo
npx degit chromaui/learnstorybook-design-system-template your-local-folder

# Or if prefer typescript template
npx create-react-app your-local-folder --template typescript
# Make sure to move unnecessary package to devDependencies

# Manually add typecript to existing project
# Make sure it is the officialy support version for Storybook
yarn add --dev typescript@4.3.1
# Add tsconfig.json
cd your-local-folder

# Install the dependencies
yarn install
```

tsconfig.json

```js
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

INSTALL Ant Design

```bash
yarn add antd
```

2. Commit the code to github

3. [Build UI components](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/build/)

```bash
# Code formatting and linting for hygiene
yarn add --dev prettier

# Enable the Format on Save editor.formatOnSave if you haven’t done so already. Once you’ve installed Prettier, you should find that it auto-formats your code whenever you save a file.
```

Install Storybook

```bash
# Install and run Storybook
npx -p @storybook/cli sb init
# Jika sebelumnya sudah pernah install storybook, gunakan option -f
npx -p @storybook/cli sb init -f

# buka file .storybook\preview.js
# import file css ant design
import 'antd/dist/antd.css';
```

```js
// modifikasi file contoh Button.tsx
import './button.css';
import { Button, ButtonProps } from 'antd';

interface IButtonProps extends ButtonProps {
  label: string;
}

export default function NewButton(props: IButtonProps) {
  return <Button {...props}>{props.label ? props.label : props.children}</Button>;
}

// dan file Button.stories.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  label: 'Default',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Children = Template.bind({});
Children.args = {
  size: 'small',
  children: <div>Children</div>,
};



```

```bash
# jalankan storybook
yarn storybook

# pastikan untuk melakukan refresh storybook setiap kali melakukan perubahan story
# karena kadang error component return wrong type
```
