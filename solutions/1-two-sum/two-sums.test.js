import { expect, test } from '@jest/globals';
import twoSum from './two-sum';

test('if result is found in first two indices of array', () => {
  const nums = [2, 7, 11, 15];
  const answer = [0, 1];
  const target = 9;

  const res = twoSum(nums, target);

  expect(res).toStrictEqual(answer);
});

test('if result is found in the last two indices', () => {
  const nums = [3, 2, 4];
  const answer = [1, 2];
  const target = 6;

  const res = twoSum(nums, target);

  expect(res).toStrictEqual(answer);
});

test('if result is found with only two elements in array', () => {
  const nums = [3, 3];
  const answer = [0, 1];
  const target = 6;

  const res = twoSum(nums, target);

  expect(res).toStrictEqual(answer);
});

test('if result is found with space inbetween elements', () => {
  const nums = [3, 1, 11, 7, 5];
  const answer = [2, 4];
  const target = 16;

  const res = twoSum(nums, target);

  expect(res).toStrictEqual(answer);
});
