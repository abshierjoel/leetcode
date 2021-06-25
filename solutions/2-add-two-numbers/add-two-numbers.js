function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = (l1, l2, carry = 0) => {
  if (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const cr = carry ? carry : 0;

    const sum = v1 + v2 + cr;
    const ones = sum % 10;
    const tens = sum >= 10 ? 1 : 0;

    const next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, tens);
    return new ListNode(ones, next);
  }

  if (carry) return new ListNode(1);
};

export default addTwoNumbers;
export { ListNode };
