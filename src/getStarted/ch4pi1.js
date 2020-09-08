function range(start, end) {
    function generateRange(endPoint) {
        const iterations = endPoint - start + 1;
        if (iterations === 1) {
            return [start];
        } else if (iterations < 1) {
            return [];
        }
        const rangeArray = [...Array(iterations).keys()];
        return rangeArray.map((number) => number + start);
    }

    return end === undefined ? generateRange : generateRange(end);
}

console.log('[3]', range(3, 3));
console.log('[3,4,5,6,7,8]', range(3, 8));
console.log('[]', range(3, 0));

var start3 = range(3);
var start4 = range(4);

console.log('[3]', start3(3));
console.log('[3,4,5,6,7,8]', start3(8));
console.log('[]', start3(0));
console.log('[4,5,6]', start4(6));
