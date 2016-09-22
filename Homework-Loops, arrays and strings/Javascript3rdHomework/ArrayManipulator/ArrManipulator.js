function arrManipulator(arr) {
    var arrNum=[];
//function isNumber(obj) { return !isNaN(parseFloat(obj)) }//gets all numbers
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            arrNum.push(arr[i]);
        }
    }
    arrNum.sort(function (a, b) {
        return a - b
    })//sorting in a

    var min = arrNum[0];
    var max = arrNum[arrNum.length - 1];

    var freq = 1;
    var currNum = arrNum[0];
    var topfreq = 1;
    var result = arrNum[0];

    for (var i = 1; i < arrNum.length; i++) { //most frequent
        if (currNum == arrNum[i]) {
            freq++;
        }
        else if (currNum != arrNum[i]) {
            freq = 1;
            currNum = arrNum[i];
        }
        if (freq > topfreq) {
            topfreq = freq;
            result = currNum;
        }
    }

    console.log("Min number :" + arrNum[0]);
    console.log("Max number :" + arrNum[arrNum.length - 1]);
    console.log("Most frequent number is: " + result + " Frequent : " + topfreq + " times.")//if there're several numbers with equal frequency we get the first in the row

}
//var arr1=["Pesho",,3,-3.6,3,-7.08,5,3,, 2, "Gosho", 12, 2.4, "true", 9,8,,89, undefined, 0, "Penka", 4,5,4,4,{ bunniesCount : 10},3,10,4,4,8,8,8,240,34,54545,2,12,455,565,232,45,22,1,2,0, [10, 20, 30, 40]];
//var arr2=["Pesho",3,10,10,10,3,3,3,3, 2, "Gosho", 12, 2, "true", 100000, undefined, 49, "Penka", { bunniesCount : 10},3,10,2,34,54545,2,68,455,565,232,45,22,1,2,0, [10, 20, 30, 40]];
var arr3=["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

//arrManipulator(arr1);
//arrManipulator(arr2);
arrManipulator(arr3);





