const radius = [3, 1, 2, 4];

// outputArrayGen is a higher-order function
function outputArrayGen(radiusArray, callbackFn) {
    const output = [];
    for(let index = 0; index < radiusArray.length; index++) {
        output[index] = (callbackFn(radiusArray[index]));
    }

    return output;
}

area = function(radius) {
    return (Math.PI * radius * radius);
}

circumfrence = function(radius) {
    return (2 * Math.PI * radius);
}

diameter = function(radius) {
    return (2 * radius);
}


console.log(outputArrayGen(radius, area));
console.log(outputArrayGen(radius, circumfrence));
console.log(outputArrayGen(radius, diameter));