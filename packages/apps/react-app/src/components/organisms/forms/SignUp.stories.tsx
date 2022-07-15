import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form_SignUp as Component } from "./SignUp";

export default {
    title: "Organisms/Forms",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const SignUp = Template.bind({});
SignUp.args = {};
