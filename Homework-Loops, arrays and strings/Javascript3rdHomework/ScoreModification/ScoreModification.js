function filterOut(arr){
    var validPoints=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>=0 && arr[i]<=400){
           arr[i]= arr[i]-(0.2*arr[i]);
            validPoints.push(arr[i]);
        }
    }
    validPoints.sort(function(a,b){return a - b})
    console.log(validPoints)
}

var arr1=[200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

filterOut(arr1);
