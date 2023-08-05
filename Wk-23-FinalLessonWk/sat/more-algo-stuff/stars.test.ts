import stars from "./stars";

describe("stars", ()=>{
  test("simple values only", ()=>{
    console.log = jest.fn();  // mute console.logs
    expect(stars(10)).toBe(18);
    expect(stars(100)).toBe(197);
  })

  test("console logs", ()=>{
    const logSpy = jest.spyOn(global.console, 'log');
    logSpy.mockRestore();
    stars(10);
    expect(logSpy.mock.calls).toStrictEqual([
      ['**********'],
      ['*****'],
      ['**'],
      ['*']
    ]);
  })
})
