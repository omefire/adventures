/**
 * @param rootValue The value of the root node - Integer
 * @param leftSubtree The left subtree - could be null or could be a Tree object
 * @param rightSubtree The right subtree - could be null or could be a Tree object
 */
var Tree = function Tree(leftSubtree, rootValue, rightSubtree) {
    this.Root = rootValue;
    this.Left = leftSubtree;
    this.Right = rightSubtree;
};

// Checks two trees for equality
var AreTreesEqual = function areTreesEqual(firstTree, secondTree) {
    
    // both trees are equal if they are null/empty
    if(!firstTree && !secondTree) {
	return true;
    }

    // if only one of the trees is empty, they aren't equal
    if(!firstTree || !secondTree) {
	return false;
    }

    // For two trees to be equal, their roots have to be equal,
    //   ... their left subtrees have to be equal
    //   ... and right subtrees also have to be equal
    return (firstTree.Root === secondTree.Root)
        && (AreTreesEqual(firstTree.Left, secondTree.Left))
        && (AreTreesEqual(firstTree.Left, secondTree.Left));
};

// Test cases
var tree1, tree2;

tree1 = null;
tree2 = null;
console.log(AreTreesEqual(tree1, tree2)); // True

tree1 = null;
tree2 = new Tree(null, 3, new Tree(null, 2, null));
console.log(AreTreesEqual(tree1, tree2)); // False


tree1 = new Tree(null, 3, new Tree(null, 2, null));
tree2 = null;
console.log(AreTreesEqual(tree1, tree2)); // False


tree1 = new Tree(null, 3, new Tree(null, 2, null));
tree2 = new Tree(null, 3, new Tree(null, 2, null));
console.log(AreTreesEqual(tree1, tree2)); // True

