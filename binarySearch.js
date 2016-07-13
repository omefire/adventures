
function find(array, elt) {
    if (!array || array.length === 0) {
        return -1;
    }
    var mid = Math.floor(array.length / 2);
    if (elt === array[mid]) {
        return mid;
    } else if (elt < array[mid]) {
        return find(array.slice(0, mid), elt);
    } else {
        return find(array.slice(mid + 1), elt);
    }
}

array = [1, 3, 4, 5, 10, 100, 200, 250];
var result = find(array, 8);
var result = find(array, 3);
var a = 10;