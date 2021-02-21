import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import Button, { Props } from "./index";

// This default export determines where your story goes in the story list

export default {
  title: "All Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["default", "primary", "warning", "success", "info", "light", "dark", "plain", "text"],
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

// Each story then reuses that template
export const BasicButton = Template.bind({});
BasicButton.args = { size: "small" } as Props;
BasicButton.storyName = "Basic button";

export const ViewButton = Template.bind({});
ViewButton.args = { label: "View product", transparent: true, size: "large" } as Props;

export const SaveButton = Template.bind({});
SaveButton.args = { label: "Save product", type: "primary", outline: true } as Props;

export const CancelButton = Template.bind({});
CancelButton.args = { label: "Cancel", plain: true, type: "info" } as Props;

export const LoadingButton = Template.bind({});
LoadingButton.args = { loading: true } as Props;

//const Template: Story<ComponentProps<typeof Button>> = (args) => <Button />;

/*
export const FirstStory = Template.bind({});
FirstStory.args = {

};
*/
