import getLongestWordLength from "./getLongestWordLength";

test("Basic test for getLongestWordLength", ()=>{
  expect(getLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
})
