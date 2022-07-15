import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navigation as Component } from './Navigation';

export default {
    title: 'Molecules/Navigation',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
