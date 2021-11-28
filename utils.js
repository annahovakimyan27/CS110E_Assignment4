module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
}

function matrixProduct(mat1, mat2) {
    if (mat1[0].length !== mat2.length) {
        console.log("The columns of the first need to be equal to the rows of the second.")
        return O;
    }

    let result = new Array(mat1.length);

    for (let i = 0; i < result.length; i++) {

        result[i] = new Array(mat2[i].length);
        for (let j = 0; j < mat2[i].length; j++) {

            result[i][j] = 0;
            for (let k = 0; k < mat2.length; k++) {

                result[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }
    
    return result;
}

function sumOfMatrices(mat1, mat2) {
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
        console.log("The cols and the rows need to be equal.")
        return 0;
    }

    let result = [];

    result = new Array(mat1.length);
    for (let i = 0; i < result.length; i++) {
        
        result[i] = new Array(mat1[i].length);
        for (let j = 0; j < result[i].length; j++) {

            result[i][j] = mat1[i][j] + mat2[i][j];

        }
    }
    return result;
}

function sumOfArray(mat) {
    let result = 0;
    for (let i = 0; i < mat.length; i++) {
       result += mat[i];
    }
    return result;
 }

 function sumOfEachRow(mat) {
    let result = [];
    for (let i = 0; i < mat.length; i++) {
       result.push(sumOfArray(mat[i]))
    }
    return result;
 }