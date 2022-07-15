import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer as Component } from './Footer';

export default {
    title: 'Molecules/Footer',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
