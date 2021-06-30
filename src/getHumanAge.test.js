'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return type of 'number' in array`, () => {
    const array = (getHumanAge(25, 4));

    for (const element of array) {
      expect(typeof element).toBe('number');
    }
  });

  it(`should return an array: [0, 0] if catAge = 9, dogAge = 8`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array: [1, 2] if catAge = 15, dogAge = 24`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array: [3, 6] if catAge = 28, dogAge = 44`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
