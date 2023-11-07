import { expect, it, describe } from "vitest";
import { makeShuffler } from "./utils";

describe("makeShuffler", function () {
  it("returns function", () => {
    const shuffle = makeShuffler(10);
    expect(shuffle).toBeTypeOf("function");
  });
  it("shuffle works correctly", () => {
    const max = 1000;
    const shuffle = makeShuffler(max - 1);
    const indexesExpected = [];
    const indexesFromShuffle = [];

    for (let i = 0; i < max; i++) {
      indexesExpected.push(i);
    }

    for (let i = 0; i < max; i++) {
      indexesFromShuffle.push(shuffle());
    }

    expect(indexesFromShuffle.sort((a, b) => a - b)).toEqual(indexesExpected);
  });
});
