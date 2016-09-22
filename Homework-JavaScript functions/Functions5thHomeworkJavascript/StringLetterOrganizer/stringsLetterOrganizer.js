function sortLetters(string,boolean){
    var a=[];
    var b=[];
    var result='';
    a=string.toLowerCase().split('');
    b=string.split('');
    if(boolean===true){
        a.sort();
    }
    if(boolean===false){
        a.sort();
        a.reverse();
    }
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if(a[i].charCodeAt(0)-b[j].charCodeAt(0)==32){
                a[i]=b[j];
                break;
            }
        }

    }
    /*console.log();
    console.log(typeof(a[0].charCodeAt(0)));
    console.log(b)*/
    result= a.join('');
    console.log(result);

}
sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);
