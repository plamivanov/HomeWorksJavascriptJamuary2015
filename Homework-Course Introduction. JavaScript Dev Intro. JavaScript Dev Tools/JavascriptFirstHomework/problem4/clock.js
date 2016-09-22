function printTime()
{
    var now=new Date()

    var hours=now.getHours();
    if(hours<10){hours="0"+hours}
    var minutes=now.getMinutes();
    if(seconds<10){minutes="0"+minutes}
    var seconds=now.getSeconds();
    if(seconds<10){seconds="0"+seconds}

    document.getElementById("clock24").innerHTML = hours+":"+minutes+": "+ seconds ;
    setTimeout("printTime()",1000)
}

