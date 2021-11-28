const mUtil = require('./utils.js');

const mat1 = [
    [1, 2, 4],
    [4, 5, 6],
    [3, 2, 9]
]

const mat2 = [
    [9, 7, 1],
    [3, 5, 6],
    [6, 7, 8]
]

console.log(mUtil.matrixProduct(mat1, mat2))
console.log(mUtil.sumOfMatrices(mat1, mat2))
console.log(mUtil.sumOfEachRow(mat1))
