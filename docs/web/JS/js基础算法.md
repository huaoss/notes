# js基础算法
## 一、排序
### 1、冒泡
```
var arr = [3,6,1,2,5];
var temp;
for(var i= 0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
```
### 2、快排
```
function quicksort (arr){
    if(arr.length<=1){
        return arr;
    }
    var left = [];
    var right = [];
    var middle = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<middle){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat([middle],quicksort(right));
}
```
==ps:可以用快排就不用冒泡，因为冒泡涉及递归==
## 二、去重
```
Array.prototype.unique = function(){
    var res = [];
    var json = {};
    for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}
var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];
alert(arr.unique());
```
## 三、取最大值、最小值、总分
```
var arr = new Array(80,70,86,58,90,35,89,67,50,100);
var sum = 0;
var maxd = 0;
var mind = 100;  //想要查最小数最好用满分最大数做可以比较的基数
for(var i=0;i<arr.length;i++){
    sum = sum +arr[i];
    if(arr[i]>maxd){
      maxd = arr[i];
    }
    if(arr[i]<mind){
      mind = arr[i];
    }
}
alert(sum);
alert(maxd);
alert(mind);
```
## 四、二分法查找
```
    // 二分-非递归
    function binarySearch(arr, item) {
      var len = arr.length,
        start = 0,
        end = len - 1;
      while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (item == arr[mid]) {
          return mid;
        } else if (item > arr[mid]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
      return arr;
    };

    // 二分-递归
    function binarySearch(arr, item, start, end) {
      var start = start || 0;
      var end = end || arr.length - 1;
      if (start > end) {
        return false;
      }
      var mid = Math.floor((start + end) / 2);
      if (item == arr[mid]) {
        return mid;
      } else if (item < arr[mid]) {
        return binarySearch(arr, item, start, mid - 1);
      } else {
        return binarySearch(arr, item, mid + 1, end);
      }
    };

    var array = [1, 3, 4, 8, 10, 33, 66, 88, 90, 110];
    console.log(binarySearch(array, 66));//6
    var index = binarySearch(array, 66);
    console.log(array[index]);
```
