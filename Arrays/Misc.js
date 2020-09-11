var nonURL = "Some test string";
console.log(URLify(nonURL));

function URLify(str) {
    return str.replace(/ /g, "%20");
}

