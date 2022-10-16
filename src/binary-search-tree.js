const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while(currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
      if (newNode.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
      if (newNode.data === currentNode.data) {
        throw new Error('This value is already in the tree');
      }
    }
  }

  traverseBFS(callback) {
    const queue = [this.rootNode];

    while(queue.length) {
      const node = queue.shift();
      
      callback(node);
      
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  has(data) {
    const values = [];
    this.traverseBFS(node => {
      values.push(node.data)
    })
    return values.includes(data);
  }

  find(data) {
    const nodes = [];
    this.traverseBFS(node => {
      nodes.push(node)
    })
    const searchingNode = nodes.find(node => node.data === data);
    return searchingNode ? searchingNode : null;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');

    // const nodes = [];
    // this.traverseBFS(node => {
    //   nodes.push(node)
    // })
    // const searchingNodeParent = nodes.find(node => {
    //   if (node.left) {
    //     if (node.left.data === data) {
    //       return true;
    //     }
    //   }
    //   if (node.right) {
    //     if (node.right.data === data) {
    //       return true;
    //     }
    //   }
    //   if (!node.left && !node.right) {
    //     return false;
    //   }
    // })

    // if (searchingNodeParent) {
    //   if (searchingNodeParent.left && searchingNodeParent.left.data === data) {
    //     searchingNodeParent.left = null
    //   }
    //   if (searchingNodeParent.right && searchingNodeParent.right.data === data) {
    //     searchingNodeParent.right = null
    //   }
    // }
  }

  min() {
    const values = [];
    this.traverseBFS(node => {
      values.push(node.data)
    })
    const min = Math.min(...values);
    return min ? min : null;
  }

  max() {
    const values = [];
    this.traverseBFS(node => {
      values.push(node.data)
    })
    const max = Math.max(...values);
    return max ? max : null;
  }
}

const tree = new BinarySearchTree;
tree.add(10);
tree.add(5);
tree.add(20);
tree.add(25);
tree.add(3);
console.log(tree);
// console.log(tree);
// console.log(tree.has(1));
// console.log(tree.find(10));
// console.log(tree.min());
// console.log(tree.max());
// tree.remove(3);
// console.log(tree);





module.exports = {
  BinarySearchTree
};