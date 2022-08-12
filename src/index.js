const arr = [50, 17, 76, 9, 23, 54, 72, 14, 19];

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this[Symbol.iterator] = function* depthFirst() {
      if (this.left) yield* this.left;
      yield this.val;
      if (this.right) yield* this.right;
    };
  }
}

class RedBlackTree {
  paintInsertBST(root, val) {
    if (root === null) {
      root = new TreeNode(val);
      return root;
    }
    if (root.val > val) {
      root.left = this.paintInsertBST(root.left, val);
    } else root.right = this.paintInsertBST(root.right, val);
    return root;
  }

  constructor() {
    this.rootNode = null;
    arr.forEach((el) => {
      this.rootNode = this.paintInsertBST(this.rootNode, el);
    });
  }
}

const rbTree = new RedBlackTree();
console.log(rbTree.rootNode);
console.log([...rbTree.rootNode]);
