function Heap() {

    this.elts = [];
    var heap = this;

    var bubbleUp = function(array, childIndex) {

	if(childIndex === 0) {
	    return;
	}

	var parentIndex = getParentIndex(index);
	if(array[parentIndex] > array[childIndex]) {
	    var temp = array[parentIndex];
	    array[parentIndex] = array[childIndex];
	    array[childIndex] = temp;
	    bubbleUp(array, parentIndex);
	}

	return;
    };

    var bubbleDown = function(array, index) {
	var leftChild = getLeftChild(array, index);
	var rightChild = getRightChild(arary, index);
	
	if(array[index] > array[leftChildIndex]) {
	    bubbleDown(array, leftChildIndex);
	    return;
	}
    };

    var getParentIndex = function(childIndex) {
	childIndex -= childIndex % 2; // sub 1 if odd or 2 if even
	return childIndex / 2;
    };

    return {
	insert = function(data) {
	    this.elts.push(data);
	    bubbleUp(this.elts, this.elts.length - 1);
	    return heap;
	}

	extractMin = function() {
	    if(this.elts.length === 0) {
		return null; // nothing to see here, move along
	    }
	    var min = this.elts[0];
	    this.elts[0] = this.elts.pop();
	    bubbleDown(this.elts, 0);
	    return min;
	};
    };
};

var main = function() {

    var heap = new Heap();

    heap.insert(4);
    var a = heap.extractMin();

    heap.insert(5)
        .insert(6)
        .insert(10)
        .insert(90)
        .insert(55);

    a = heap.extractMin();
};

main();
