let string1 = "madam";
let string2 = "aAmmd"

let string3 = "madam";
let string4 = "aammd  ";

let string5 = "madam";
let string6 = "aammd";

console.log(arePermutations(string1, string2)); //False
console.log(arePermutations(string3, string4)); //False
console.log(arePermutations(string5, string6)); //True

function arePermutations(oneStr, twoStr) {
    //Convert stings to same case (s.toUpperCase()) if need to ignore case
    let one = [...oneStr];
    let two = [...twoStr];

    if (one.length != two.length)
        return false;

    return verifyPermutations(one, two);
    //return anotherWay(one, two);
}

//More efficient way
function verifyPermutations (one, two) {
    //Running only one loop since both arrays are of same length
    for (let i=0; i < one.length; i++) {
        if (two.indexOf(one[i]) == -1)
            return false;

        if (one.indexOf(two[i]) == -1)
            return false;
    }
    return true;
}

function anotherWay (one, two) {
    let firstStr = one.sort().toString();
    let secStr = two.sort().toString();
    return firstStr == secStr;
}