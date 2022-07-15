import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header as Component } from "./Header";

export default {
    title: "Molecules/Header",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
