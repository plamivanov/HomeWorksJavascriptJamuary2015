var str1="<ul>\n<li>\n<a href=http://softuni.bg>SoftUni</a>\n</li>\n</ul>";

function replaceATag(str){
    str=str.replace('<a','[URL');
    str=str.replace('<\/a>','[/URL]');

    for(var i = 0; i < str.length-5; i++) {
        if(str[i] === '[' && str[i+1]==='U') {
            var j = i;
            while(true) {
                j++;
                if(str[j] === '>') {
                    str = replaceAt(str,j,']');
                    i = j + 1;
                    break;
                }
            }
        }
    }
    function replaceAt(str,index, character) {
        return str.substr(0, index) + character + str.substr(index+character.length);
    }
    console.log(str);
}
replaceATag(str1);