const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    const arr = [];
  
    if (l.value) arr.push(l.value);
    let currentEl = l;
    while (currentEl.next) {
      currentEl = currentEl.next;
      arr.push(currentEl.value);
    }

    const filteredArr = arr.filter(el => el !== k);

    function convertArrayToList(arr) {
      return arr.reverse().reduce((acc, cur) => {
        if (acc) {
          const node = new ListNode(cur);
          node.next = acc;
          return node;
        }
    
        return new ListNode(cur);
      }, null);
    }

    return convertArrayToList(filteredArr);
}

module.exports = {
  removeKFromList
};
