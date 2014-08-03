describe("wu.asyncEach", () => {
  it("should iterate over each item", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let n = 0;

    return wu
      .asyncEach(x => {
        n++;
        const start = Date.now();
        while (Date.now() - start <= 3) {
          // Kill time.
        }
      }, 3, arr)
      .then(() => {
        assert.equal(n, arr.length);
      });
  });
});
