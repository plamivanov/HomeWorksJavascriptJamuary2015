//Write a JavaScript function groupBy('criteria') that groups an array of people by age, first or last name.
// Create a Person constructor to add every person in the person array.
// The groupBy('criteria') function must return an object
// , with keys – the groups (age, firstName and lastName) and values – arrays with people \
// in this group. Print on the console every entry of the
// returned object. Use function overloading (i.e. just one function).
//You may need to find how to use constructors. Examples:

function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.writeInfo=stringPeople;
}
function stringPeople(){
    return this.firstName+" "+this.lastName+" ("+this.age+") ";
}

function groupBy(criteria){
    var criteriaSelected=new Array();
    for (var i = 0; i < people.length; i++) {
       // console.log(people[i][criteria]);
        if(criteriaSelected.indexOf(people[i][criteria])===-1){
            criteriaSelected.push(people[i][criteria]);
        }
    }

    for (var i = 0; i < criteriaSelected.length; i++) {
        var result="Group:"+criteriaSelected[i]+" :";
        var additional=[];
        for (var j = 0; j < people.length; j++) {
            if(people[j][criteria]===criteriaSelected[i]){
                additional.push(people[j].writeInfo());
            }

        }
        console.log(result+"["+additional.join(', ')+"]")
    }
    console.log(" ")
}


var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Handyman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

groupBy('firstName');
groupBy('lastName');
groupBy('age');