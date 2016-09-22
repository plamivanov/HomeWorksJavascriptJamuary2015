function findYoungestPerson(array) {
    var resultArray=[];
    for (var i = 0; i < array.length; i++) {
        if(array[i].hasSmartphone==true){
            resultArray.push(array[i]);
        }
    }
    var minAge=resultArray[0].age;
    var indexMinAge=0;
    for(var index in resultArray)
    {
        if(resultArray[index].age < minAge){
            minAge=resultArray[index].age;
            indexMinAge=index;
        }
    }

    console.log("The youngest person who's got a smartphone is: "+resultArray[indexMinAge].firstname +" "+resultArray[indexMinAge].lastname );

}
var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Yordan', lastname: 'Gadjev', age: 50, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 83, hasSmartphone: false },
    { firstname : 'Georgi', lastname: 'Georgiev', age: 28, hasSmartphone: true },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 25, hasSmartphone: true },
    { firstname : 'Emo', lastname: 'Kostadinov', age: 45, hasSmartphone: true }
]
findYoungestPerson(people);
