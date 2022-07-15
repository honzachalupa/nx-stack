import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form_PasswordReset as Component } from "./PasswordReset";

export default {
    title: "Organisms/Forms",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const PasswordReset = Template.bind({});
PasswordReset.args = {};
