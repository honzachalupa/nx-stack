import { IModalRefProps } from "@nx-stack/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useRef } from "react";
import { Modal_PasswordReset as Component } from "./PasswordReset";

export default {
    title: "Organisms/Modals",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
    const modalRef = useRef<IModalRefProps>(null);

    useEffect(() => {
        modalRef.current?.show();
    }, [modalRef]);

    return <Component ref={modalRef} {...args} />;
};

export const PasswordReset = Template.bind({});
PasswordReset.args = {
    emailAddress: "",
};
