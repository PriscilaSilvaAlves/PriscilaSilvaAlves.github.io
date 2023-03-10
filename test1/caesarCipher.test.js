const caesarCipher = require('./caesarCipher.js');

test("Check de Caesar Cipher", ()=>{
    expect(caesarCipher("amor",1)).toBe("bnps");
    expect(caesarCipher("amor, amor",1)).toBe("bnps, bnps");
    expect(caesarCipher("amor, amor",25)).toBe("zlnq, zlnq");
    expect(() => caesarCipher("amor",26)).toThrow();
    expect(caesarCipher("zeus",25)).toBe("ydtr");
    expect(caesarCipher("ZEus",25)).toBe("YDtr");
})