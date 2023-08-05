import toComponentList from "./toComponentList";

test("toComponentList - simple",()=>{
  expect(toComponentList(["the", "the", "quick", "the"]))
    .toStrictEqual([
      {val: "the", reps: 3},
      {val: "quick", reps: 1}
    ])

  expect(toComponentList([1, 2, 3, 2]))
    .toStrictEqual([
      {val: 1, reps: 1},
      {val: 2, reps: 2},
      {val: 3, reps: 1}
    ])

})
