import titularise from "./titularise"

test("Basic test for titularise", ()=>{
  expect(titularise("The quick brown fox jumps over the lazy dog"))
    .toBe("The Quick Brown Fox Jumps Over the Lazy Dog");
})
