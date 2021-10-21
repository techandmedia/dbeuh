import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Button } from './Button';
import { Tooltip } from './helpers';
import { SearchOutlined } from './icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Button',
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

export const Children = Template.bind({});
Children.args = {
  children: <div>Children</div>,
};

export const Sizes: ComponentStory<typeof Button> = (args) => (
  <>
    <Primary {...args} size="large">
      Large
    </Primary>
    <Primary {...args} size="middle">
      Middle
    </Primary>
    <Primary {...args} size="small" label="Small" />
  </>
);

export const AllButtonTypes: ComponentStory<typeof Button> = (args) => (
  <>
    <Button type="primary" label="Primary" />
    <Button type="primary" label="Primary Disabled" disabled />
    <Button type="dashed" label="Dashed" />
    <Button type="default" label="Default" />
    <Button type="ghost" label="Ghost" />
    <Button type="link" label="Link" />
    <Button type="text" label="Text" />
    <Button type="text" label="Text disabled" disabled />
  </>
);

export const BlockButton: ComponentStory<typeof Button> = (args) => (
  <>
    <Button type="primary" label="Primary" block />
    <Button type="dashed" label="Dashed" block />
  </>
);

export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <>
    <Tooltip title="Find something...">
      <Button shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Tooltip title="Find something...">
      <Button
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
        size="large"
        label="With Label"
      />
    </Tooltip>
    <Tooltip title="Search something...">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large">
        With Children
      </Button>
    </Tooltip>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />} size="large">
      Search
    </Button>
  </>
);
