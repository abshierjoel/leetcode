import { expect, test } from '@jest/globals';
import addTwoNumbers from './add-two-numbers';

test('two lists of equal lengths are added correctly', () => {
  const l1 = { val: 2, next: { val: 4, next: { val: 3 } } };
  const l2 = { val: 5, next: { val: 6, next: { val: 4 } } };
  const out = 807;

  const res = addTwoNumbers(l1, l2);

  expect(linkedListToNumber(res)).toBe(out);
});

test('two empty lists', () => {
  const l1 = { val: 0 };
  const l2 = { val: 0 };
  const out = 0;

  const res = addTwoNumbers(l1, l2);

  expect(linkedListToNumber(res)).toBe(out);
});

test('two lists of different lengths, and increase the significance', () => {
  const l1 = {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9 } } } },
      },
    },
  };
  const l2 = { val: 9, next: { val: 9, next: { val: 9, next: { val: 9 } } } };
  const out = 10009998;

  const res = addTwoNumbers(l1, l2);

  expect(linkedListToNumber(res)).toBe(out);
});

test('two lists of different lengths, and second is larger', () => {
  const l1 = { val: 9, next: { val: 0, next: { val: 2 } } };
  const l2 = { val: 1, next: { val: 3, next: { val: 4, next: { val: 2 } } } };
  const out = 2640;

  const res = addTwoNumbers(l1, l2);

  expect(linkedListToNumber(res)).toBe(out);
});

const linkedListToNumber = (cur, sig = 1) => {
  return cur ? cur.val * sig + linkedListToNumber(cur.next, sig * 10) : 0;
};
