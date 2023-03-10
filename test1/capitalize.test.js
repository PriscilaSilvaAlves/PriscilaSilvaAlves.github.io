const capitalize = require('./capitalize');

test('Check if the function returns the first letter in uppercase', () => {
    expect(capitalize("maiúsculo")).toBe("Maiúsculo");
    expect(capitalize("maiúsculo")).not.toBe("maiúsculo");
    expect(capitalize("maiúsculo")).toMatch(/Maiúsculo/);
});

