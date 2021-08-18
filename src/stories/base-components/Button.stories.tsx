import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./index";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  type: "primary",
  // size: '';
};

export const Dashed = Template.bind({});
Dashed.args = {
  children: "Dashed",
  type: "dashed",
};

export const Text = Template.bind({});
Text.args = {
  children: "Text",
  type: "text",
};

export const Link = Template.bind({});
Link.args = {
  children: "Link",
  type: "link",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
  size: "small",
};
