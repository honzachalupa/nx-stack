import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form_SignIn as Component } from "./SignIn";

export default {
    title: "Organisms/Forms",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const SignIn = Template.bind({});
SignIn.args = {};
