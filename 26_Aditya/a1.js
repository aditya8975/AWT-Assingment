arr = [1, 2,8, 3, 4];
arr1 = [4, 3, 2, 1];
arr2 = [3, 7, 2, 1, 8];

function issort(arr) {
    let ace = true;
    let dec = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            ace = false;
        }
        else if (arr[i] < arr[i + 1]) {
            dec = false;
        }
    }
    if (ace) {
        console.log("Acending:");
        return 1;
    }
    else if (dec) {
        console.log("Dcending:");
        return -1;
    }
    else {
        console.log("Unsorted");
        return 0;
    }
}
console.log("array 1" ,issort(arr));
console.log("array 2" ,issort(arr1));
console.log("array 3" ,issort(arr2));
