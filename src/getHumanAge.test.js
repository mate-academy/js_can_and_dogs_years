'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0] when both catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  it(`should return [0, 0]
    when both catAge and dogAge are less than 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  it(`should return [1, 1]
    when both catAge and dogAge are 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it(`should return [1, 1]
    when both catAge and dogAge are between 15 and 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  it(`should return [2, 2]
    when both catAge and dogAge are 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  it(`should return [2, 2]
    when both catAge and dogAge are between 24 and 27`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  it(`should return [3, 2]
    when both catAge and dogAge are 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  it(`should return [21, 17]
    when both catAge and dogAge are 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
