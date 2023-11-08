import { Coords } from "../../types";

function randomNumberFromMax(num: number) {
  return Math.floor(Math.random() * (num + 1));
}

export function makeShuffler(maxNumber: number) {
  let prevIndexes: number[] = [];
  return function shuffle() {
    let shuffledValue = randomNumberFromMax(maxNumber);
    if (prevIndexes.length === maxNumber + 1) {
      prevIndexes = [shuffledValue];
      return shuffledValue;
    }
    while (prevIndexes.includes(shuffledValue)) {
      shuffledValue = randomNumberFromMax(maxNumber);
    }
    prevIndexes.push(shuffledValue);
    return shuffledValue;
  };
}

export const coordsToBounds = (coords: Coords[], addMargins: boolean = false) => {
    if (coords.length === 0) {
      return undefined
    }
    const nonNormalizedBounds = coords.reduce(
      (acc, [longitude, latitude]) => [
        [Math.min(acc[0][0], longitude!), Math.max(acc[0][1], latitude!), 0.5],
        [Math.max(acc[1][0], longitude!), Math.min(acc[1][1], latitude!), 0.5],
      ],
      [
        //top      left
        [130, -Infinity],
        //bottom   right
        [-Infinity, Infinity],
      ],
    )
    const lngAmplitude = nonNormalizedBounds[1][0] - nonNormalizedBounds[0][0]
    const latAmplitude = nonNormalizedBounds[0][1] - nonNormalizedBounds[1][1]
    const k = 0.2 * Number(addMargins)
    return [
      [nonNormalizedBounds[0][0] - k * lngAmplitude, nonNormalizedBounds[0][1] + k * latAmplitude],
      [nonNormalizedBounds[1][0] + k * lngAmplitude, nonNormalizedBounds[1][1] - k * latAmplitude],
    ]
  }