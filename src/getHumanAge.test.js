"use strict";

describe("getHumanAge", () => {
  const { getHumanAge } = require("./getHumanAge");

  test("should be declared", () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test("should be [0, 0] for age less than 15", () => {
    expect(getHumanAge(14, 0)).toEqual([0, 0]);
  });

  test("should be [1, 1] for age 15", () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test("should be [1, 1] for age more than 15", () => {
    expect(getHumanAge(16, 23)).toEqual([1, 1]);
  });

  test("should be [1, 1] for age 23", () => {
    expect(getHumanAge(16, 23)).toEqual([1, 1]);
  });

  test("should be [2, 2] for age 24", () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test("should be [2, 2] for age more than 24", () => {
    expect(getHumanAge(26, 27)).toEqual([2, 2]);
  });

  test("should be [2, 2] for age 27", () => {
    expect(getHumanAge(26, 27)).toEqual([2, 2]);
  });

  test("should be [3, 2] if cat age 28 and dog age 28", () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test("should be [3, 3] if cat age 29 and dog age 29", () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test("should be [3, 3] for age more than 29", () => {
    expect(getHumanAge(30, 31)).toEqual([3, 3]);
  });

  test("should be [21, 17] if cat age is 100 and dog age is 100", () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
