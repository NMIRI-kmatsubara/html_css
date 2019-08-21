function tendigit(i) {
    var str = "0" + i;
    return str.slice(-2, str.length - 1);
}


for (var i=0; i<12; i++) {
    console.log(i + ":" + tendigit(i))
}

