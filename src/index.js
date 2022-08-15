const arr = [50, 17, 76, 9, 23, 54, 72, 14, 19];

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    // Level Order
    this[Symbol.iterator] = function* rowWise() {
      const queue = [];
      queue.push(this);
      while (queue.length !== 0) {
        const poppedNode = queue.shift();
        yield poppedNode.val;
        if (poppedNode.left) {
          queue.push(poppedNode.left);
        }
        if (poppedNode.right) {
          queue.push(poppedNode.right);
        }
      }
    };
    // Preorder
    this[Symbol.iterator] = function* depthFirst() {
      yield this.val;
      if (this.left) yield* this.left;
      if (this.right) yield* this.right;
    };
  }
}

class RedBlackTree {
  insertBst(root, val) {
    if (root === null) {
      root = new TreeNode(val);
      return root;
    }
    if (root.val > val) {
      root.left = this.insertBst(root.left, val);
    } else root.right = this.insertBst(root.right, val);
    return root;
  }
  rotateRight() {
    let root = this.rootNode;
    const prevRoot = this.rootNode;
    if (root.left) {
      const rightSubtree = root.left.right;
      root = root.left;
      prevRoot.left = rightSubtree;
      root.right = prevRoot;
    }
    this.rootNode = root;
  }

  rotateLeft() {
    let root = this.rootNode;
    const prevRoot = this.rootNode;
    if (root.right) {
      const leftSubtree = root.right.left;
      root = root.right;
      prevRoot.right = leftSubtree;
      root.left = prevRoot;
    }
    this.rootNode = root;
  }

  constructor() {
    this.rootNode = null;
    arr.forEach((el) => {
      this.rootNode = this.insertBst(this.rootNode, el);
    });
  }
}

const rbTree = new RedBlackTree();
console.log([...rbTree.rootNode]);
rbTree.rotateRight();
console.log([...rbTree.rootNode]);
rbTree.rotateRight();
console.log([...rbTree.rootNode]);
rbTree.rotateLeft();
console.log([...rbTree.rootNode]);
