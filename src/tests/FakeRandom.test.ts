import { FakeRand } from "./FakeRandom";

describe("fake random", () => {
  const fakeRandom = new FakeRand();
  test("One call", () => {
    const res = fakeRandom.nextInt(10);
    expect(res).toBe(7);
  });
  test("One call With BIG MAX", () => {
    const res = fakeRandom.nextInt(500);
    expect(res).toBe(6);
  });
  test("One call With LITTLE MAX", () => {
    const res = fakeRandom.nextInt(5);
    expect(res).toBe(4);
  });
  test("a full loop", () => {
    const expecteds = [7, 6, 5, 0, 4, 8, 1, 2, 3, 7, 6, 9];
    expecteds.forEach((expected) => {
      const res = fakeRandom.nextInt(20);
      expect(res).toBe(expected);
    });
  });
});
