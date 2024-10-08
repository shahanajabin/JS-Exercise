// Check whether a given matrix is lower triangular or not.

function lowerTriangularCheck(array) {

    let lowerTriangle = true;
    const squareMatrix = array.every(matrix =>
        array.length == matrix.length);

    if (squareMatrix == true) {
        for (let i = 0; i < array.length; i++) {
            let matrix = array[i]
            for (let j = 0; j < matrix.length; j++) {
                if (i < j && matrix[j] !== 0) {
                    lowerTriangle = false;
                }

            }

        }
    }

    console.log(lowerTriangle);
}
lowerTriangularCheck([[1, 0, 0], [1, 1, 0], [0, 2, 0]]);

