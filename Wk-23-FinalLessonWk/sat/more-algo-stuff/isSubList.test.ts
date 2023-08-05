import isSubList from "./isSubList";

test("isSubList - simple", ()=>{
  expect(isSubList(["hello", "there", "the"], ["hello", "the"])).toBe(true);
  expect(isSubList(["the"], ["hello", "the"])).toBe(true);
  expect(isSubList(["the", "thing"], ["hello", "the", "cat"])).toBe(false);
  expect(isSubList(["the", "hello"], ["hello", "the"])).toBe(true);
})

test("isSubList - duplicates", ()=>{
  expect(isSubList(["hello", "something", "cat"], ["hello", "hello"])).toBe(false);
  expect(isSubList(["hello", "something", "cat", "hello"], ["hello", "hello"])).toBe(true);
})
