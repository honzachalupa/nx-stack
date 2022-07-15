import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button as Component } from "./Button";

export default {
    title: "Atoms/Button",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Button = Template.bind({});
Button.args = {
    label: "Label",
};
