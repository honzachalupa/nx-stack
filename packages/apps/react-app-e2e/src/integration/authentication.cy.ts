import { ERoutePaths } from "@nx-stack/types";
import { user } from "../fixtures/user";

const { inputs, buttons } = {
    inputs: {
        emailAddress: '[name="emailAddress"]',
        password: '[name="password"]',
        firstName: '[name="firstName"]',
        lastName: '[name="lastName"]',
        izo: '[name="izo"]',
        schoolName: '[name="schoolName"]',
    },
    buttons: {
        signUp: '[data-test-id="Button_SignUp"]',
        signIn: '[data-test-id="Button_SignIn"]',
        signOut: '[data-test-id="Button_SignOut"]',
        saveAccountDetails: '[data-test-id="Button_SaveAccountDetails"]',
    },
};

const values = {
    validationMessage_isRequired: "formValidationMessage_isRequired",
    validationMessage_incorrectPassword: "auth/user-not-found",
};

describe("Authentication - Sign Up", () => {
    beforeEach(() => cy.visit(ERoutePaths.AUTHENTICATION_SIGN_UP));

    it("Case: Empty form", () => {
        cy.get(buttons.signUp).click();

        cy.get(inputs.emailAddress)
            .siblings("p")
            .should("have.text", values.validationMessage_isRequired);

        cy.get(inputs.password)
            .siblings("p")
            .should("have.text", values.validationMessage_isRequired);
    });

    it("Case: Filled form", () => {
        cy.get(inputs.emailAddress).type(user.emailAddress);
        cy.get(inputs.password).type(user.password);
        cy.get(buttons.signUp).click();
        cy.location("pathname").should("eq", ERoutePaths.INDEX);
    });
});

describe("Authentication - Sign In", () => {
    beforeEach(() => cy.visit(ERoutePaths.AUTHENTICATION_SIGN_IN));

    it("Case: Empty form", () => {
        cy.get(buttons.signIn).click();

        cy.get(inputs.emailAddress)
            .siblings("p")
            .should("have.text", values.validationMessage_isRequired);

        cy.get(inputs.password)
            .siblings("p")
            .should("have.text", values.validationMessage_isRequired);
    });

    it("Case: Filled form", () => {
        cy.get(inputs.emailAddress).type(user.emailAddress);
        cy.get(inputs.password).type(user.password);
        cy.get(buttons.signIn).click();
        cy.location("pathname").should("eq", ERoutePaths.INDEX);
    });
});

describe("Authentication - Sign Out", () => {
    beforeEach(() => cy.visit(ERoutePaths.INDEX));

    it("Case: Sign Out", () => {
        cy.get("button").contains("Sign Out").click();
    });
});
