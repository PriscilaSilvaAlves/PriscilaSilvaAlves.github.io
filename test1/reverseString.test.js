const reverseString = require('./reverseString.js');

test('Check if the function returns the reverse word', () => {
    expect(reverseString("reverse")).toBe("esrever");
    expect(reverseString("reverse")).not.toBe("reverse");
    expect(reverseString("reverse")).toMatch(/esrever/);
})