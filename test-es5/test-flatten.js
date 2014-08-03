"use strict";
describe("wu.flatten", (function() {
  it("should flatten iterables", (function() {
    assert.eqArray(["I", "like", "LISP"], wu.flatten(false, ["I", ["like", ["LISP"]]]));
  }));
  it("should shallowly flatten iterables", (function() {
    assert.eqArray([1, 2, 3, [[4]]], wu.flatten(true, [1, [2], [3, [[4]]]]));
  }));
}));
