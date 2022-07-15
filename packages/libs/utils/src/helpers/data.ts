// TODO: Move to "common" package
export const removeDuplicatesFromArray = (
    array: Array<string | number | boolean>,
) => Array.from(new Set(array));

export const removeDuplicatesFromObject = (
    originalArray: any[],
    propertyKey: string,
) => {
    const newArray: any[] = [];
    const lookupObject: any = {};

    originalArray.forEach((item) => {
        lookupObject[item[propertyKey]] = item;
    });

    Object.keys(lookupObject).forEach((key) => {
        newArray.push(lookupObject[key]);
    });

    return newArray;
};
