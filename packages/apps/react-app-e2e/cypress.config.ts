import { defineConfig } from "cypress";

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder: "../../../dist/cypress/react-app-e2e/videos",
    screenshotsFolder: "../../../dist/cypress/react-app-e2e/screenshots",
    e2e: {
        baseUrl: "https://localhost:8080/",
        fixturesFolder: "./src/fixtures",
        specPattern: "./src/integration/**",
    },
});
