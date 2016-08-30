
// ToDO: 
//   - Cleanup 
//   - Edge cases
//   - Better comments + documentation
function Node(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}

// Prints all nodes in a tree using BFS, without using a Queue
// ... because trying to keep space constant
function BinaryTreeBFS(rootNode, height) {
    if (rootNode == null) return;

    let currentHeight = 0;
    while (currentHeight <= height) {
        let numOfNodesAtLevel = Math.pow(2, currentHeight);
        for (let i = 0; i < numOfNodesAtLevel; i++) {
            let n = getNodeAt(rootNode, currentHeight, i);
            if (n === null) continue;
            console.log(n.value);
        }
        currentHeight++;
    }

    return;
}

/*     1     (L0)
    /  \
   2   3    (L1)
  / \ / \ 
 4  5 6  7  (L2)
*/

// Given a rootNode, find the node that is located at level "level" and at index "index"
// e.g: from the above example tree, node 6 is at level 2, index 2
function getNodeAt(rootNode, level, index) {
    
    if (rootNode === null) return null;
    
    if(level === 0) return rootNode;

    function generateLeftRightCombinations(n) {

        if (n <= 0) throw new Error("Invalid value");

        let i = 0; // 0 -> [], 1 -> ["L", "R"], 2 -> ["LL", "LR"], 3 -> ["LLL", "LLR", "LRL", "LRR"]
        let result = []
        while (i < n) {
            result.push("L");
            result.push("R");
            i++;
        }

        return result;
    }

    let comb = generateLeftRightCombinations(level);
    let steps = comb[index];
    var currentNode = rootNode;
    for (let k = 0; k < steps.length; k++) {
        if (steps.charAt(k) === "L") {
            currentNode = currentNode.leftChild;
        } else if (steps.charAt(k) === "R") {
            currentNode = currentNode.rightChild;
        }
    }

    return currentNode;
}


// Test Code
// ... rootNode = node1. This encodes the above example tree

let node4 = new Node(4, null, null);
let node5 = new Node(5, null, null);
let node6 = new Node(6, null, null);
let node7 = new Node(7, null, null);

let node2 = new Node(2, node4, node5);
let node3 = new Node(3, node6, node6);

let node1 = new Node(1, node2, node3);

// Should output: 1, 2, 3, 4, 5, 6, 7
BinaryTreeBFS(node1, 2);