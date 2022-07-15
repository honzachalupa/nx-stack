import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CopyButton as Component } from "./CopyButton";

export default {
    title: "Molecules/CopyButton",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const CopyButton = Template.bind({});
CopyButton.args = {
    value: "Value",
};
