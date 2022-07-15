import faker from "@faker-js/faker";

export const user = {
    emailAddress: faker.internet.email(),
    password: "password",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
};
