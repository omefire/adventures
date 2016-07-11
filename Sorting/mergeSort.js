
function mergeSort(array) {

    if (!array || array.length <= 1) {
        return array;
    }

    var mid = Math.floor(array.length / 2);
    var left = mergeSort(array.slice(0, mid)); // include element at index 'mid' into the left array
    var right = mergeSort(array.slice(mid, array.length));

    function merge(left, right) {
        if (left.length === 0) {
            return right;
        }
        if (right.length === 0) {
            return left;
        }

        var i = 0, 
            j = 0,
            k = 0; // i is used for left, j for right, and k for the result array
        var result = [];
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result[k] = left[i];
                k++;
                i++;
            } else {
                result[k] = right[j];
                k++;
                j++;
            }
        }

        // Handle left overs
        if (i < left.length) {
            for (let l = i; l < left.length; l++) {
                result[k] = left[l];
                k++;
            }
        }

        // Handle left overs
        if (j < right.length) {
            for (let l = j; l < right.length; l++) {
                result[k] = right[l];
                k++;
            }
        }

        return result;
    }

    var r = merge(left, right);
    return r;
}

var arrayToSort = [10, 2, 8, -100];//[4, 2, 10, 90, -1];
var sortedArray = mergeSort(arrayToSort, 0, arrayToSort.length - 1);

for(let i = 0; i < sortedArray; i++) {
    console.log(sortedArray[i]);
}

//var arrayToSort = []; 
//var sortedArray = insertionSort(arrayToSort);


//var arrayToSort = [2]; 
//var sortedArray = insertionSort(arrayToSort);


//var arrayToSort = [2, 4]; 
//var sortedArray = insertionSort(arrayToSort);

/*
var arrayToSort = [10, 5, 3]; 
var sortedArray = insertionSort(arrayToSort);
*/