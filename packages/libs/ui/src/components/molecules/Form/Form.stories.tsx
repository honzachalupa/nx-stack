import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form as Component } from "./Form";

export default {
    title: "Molecules/Form",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Form = Template.bind({});
Form.args = {
    inputs: [
        {
            controlType: "input",
            id: "input-01",
            label: "Input 1",
            inputType: "text",
        },
        {
            controlType: "select",
            id: "input-01",
            label: "Select 1",
            options: [
                {
                    id: "option-1",
                    label: "Option 1",
                },
            ],
        },
    ],
};
