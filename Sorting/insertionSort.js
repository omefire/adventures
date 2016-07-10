
function insertionSort(array) {
    if (!array || array.length <= 1) {
        return array;
    }
    for (var i = 1; i < array.length; i++) {
        var j = i - 1;
        var elt = array[i];
        while (j >= 0 && elt < array[j]) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = elt;
    }

    return array;
}

var arrayToSort = [4, 2, 10, 90, -1]; 
var sortedArray = insertionSort(arrayToSort);


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
