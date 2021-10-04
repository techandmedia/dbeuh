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
yarn storybook
```

Add GlobalStyle if using styled-components

```js
// src/shared/global.js
import { createGlobalStyle, css } from 'styled-components';

import { color, typography } from './styles';

// Add this line
export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  /* Same as before */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
```

Use the GlobalStyle “component”

```js
// .storybook/preview.js
+ import React from 'react';

+ import { GlobalStyle } from '../src/shared/global';

+ // Global decorator to apply the styles to all stories
+ export const decorators = [
+   Story => (
+     <>
+       <GlobalStyle />
+       <Story />
+     </>
+   ),
+ ];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
```

Add Global Font

```js
// .storybook/preview-head.html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900" />
```

4. [Build UI components](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/build/)

```bash
# Code formatting and linting for hygiene
yarn add --dev prettier

# Enable the Format on Save editor.formatOnSave if you haven’t done so already. Once you’ve installed Prettier, you should find that it auto-formats your code whenever you save a file.
```
