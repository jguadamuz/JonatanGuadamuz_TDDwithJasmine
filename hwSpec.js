//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr) {
    return arr[0] + arr[arr.length-1];
}

function largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

describe("Sum1toN", function () {
    it("should return 3 when we pass 2 as an argument", function () {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function () {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function () {
        expect(Sum1toN(4)).toEqual(10);
    });
    it("should return 5050 when we pass 4 as an argument", function () {
        expect(Sum1toN(100)).toEqual(5050);
    });
    it("should return 45 when we pass 9 as an argument", function () {
        expect(Sum1toN(9)).toEqual(45);
    });
});

describe("sumFirstLast", function () {
    it("should return 3 when we pass [1,2] as an argument", function () {
        expect(sumFirstLast([1, 2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function () {
        expect(sumFirstLast([2, 3, 8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function () {
        expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10);
    });
    it("should return -10 when we pass [-6,23,-4] as an argument", function () {
        expect(sumFirstLast([-6,23,-4])).toEqual(-10);
    });
    it("should return 17 when we pass [-6,23] as an argument", function () {
        expect(sumFirstLast([-6, 23])).toEqual(17);
    });
});

describe("largest", function () {
    it("should return 10 when we pass [1,3]10 as an argument", function () {
        expect(largest([1,3,10])).toEqual(10);
    });
    it("should return -2 when we pass returnLargest([-2,-5,-10])", function () {
        expect(largest([-2,-5,-10])).toEqual(-2);
    })
});