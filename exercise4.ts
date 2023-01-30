function strLength(value:string):number{
    let myString = value.length;
    return myString;
}

console.log(strLength("test 1"));

function strLength_noSpaces(value:String):number{
    // let myString = value.replace(/\s/,"");
    return value.replace(/\s/,"").length;
}

console.log(strLength_noSpaces("test 1"));

function both_methods(value: string, spaces?:boolean):number{
    if(spaces){
        return value.length;
    } else{
        return value.replace(/\s/,"").length;
    }
}

console.log(both_methods("test 1"), true);