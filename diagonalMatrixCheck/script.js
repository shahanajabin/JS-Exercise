//  Check whether a matrix is a diagonal matrix or not. 

function diagonalMatrixCheck(array) {

    let diagonal = true;
    let squareMatrix = array.every((matrix) =>
        array.length == matrix.length
    );

    if (squareMatrix == true) {
        for (let i = 0; i < array.length; i++) {

            let matrix = array[i];
            for (let j = 0; j < matrix.length; j++) {
                if (i == j) {
                    if (matrix[j] == 0) {
                        diagonal = false;
                        break
                    }
                } else {
                    if (matrix[j] !== 0) {
                        diagonal = false
                        break
                    }
                }

            }

        }

    }

    if (diagonal == true) {
        console.log('This Matrix is a Diagonal Matrix.');

    } else {
        console.log('This Matrix is not a Diagonal Matrix.');

    }

}
diagonalMatrixCheck([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
