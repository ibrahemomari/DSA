"use strict";

const validateBrackets = require("../bracket");

describe("balanced bracket", () => {
  it("balanced", () => {
    let string1 = "{}(){}";
    let string2 = "()[[Extra Characters]]";
    
    expect(validateBrackets(string1)).toEqual(true);
    expect(validateBrackets(string2)).toEqual(true);
  });

  it("not balanced", () => {
    let string1 = "{}(){";
    let string2 = "()[[Extra Characters]";
    
    expect(validateBrackets(string1)).toEqual(false);
    expect(validateBrackets(string2)).toEqual(false);
  });
});
