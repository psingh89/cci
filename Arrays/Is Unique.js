//Verify if a string has all unique characters (ASCII only and ignore spaces)

console.log(isUnique("ABC IS UN1QuE"));
console.log(isUnique("AABC IS NOT UNIQUE"));

function isUnique(str) {
    //Ignoring spaces
    let value = str.split(" ").join("");
    //Splitting string into char's array
    let valueArray = [...value];
    //There are only 128 unique ASCII chars. Unicode are more.
    if(valueArray.length > 128)
        return false;

    let uniqueChars=[];
    for (var i = 0; i<=valueArray.length; i++) {
        if (uniqueChars.indexOf(valueArray[i])> -1) {
            return false
        } else {
            uniqueChars.push(valueArray[i]);
        }
    }
    return true;
}