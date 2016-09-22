function findRoots(aeq,beq,ceq){
    var a=aeq;
    var b=beq;
    var c=ceq;

    var d=Math.sqrt((b*b)-(4*a*c));
    if(d>0){
        var x1=(-b+d)/(2*a);
        var x2=(-b-d)/(2*a);
        console.log("x1 = "+x1 +", x2 = "+x2);
    }else if(d===0){
        var x=-b/(2*a);
        console.log("x = "+x);
    }else{
        console.log("no roots")
    }
}

findRoots(2,5,-3);
findRoots(2,-4,2);
findRoots(4,2,1);
