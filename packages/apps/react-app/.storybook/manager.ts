import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "light",
        brandTitle: "nx-stack/react-app",
        brandUrl: "https://github.com/honzachalupa/nx-stack",
    }),
});
