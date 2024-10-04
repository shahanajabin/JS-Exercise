//  Check whether a given matrix is an identity matrix. 

function identityMatrix(array) {

    let diagonal = true;
    const squaredMatrix = array.every((matrix) =>
        array.length == matrix.length
    );
    // console.log(squaredMatrix);

    if (squaredMatrix == true) {

        for (let i = 0; i < array.length; i++) {
            let matrix = array[i];
            for (let j = 0; j < matrix.length; j++) {
                if (i == j) {
                    if (matrix[j] !== 1) {
                        diagonal = false;
                    }
                } else {
                    if (matrix[j] !== 0) {
                        diagonal = false;
                    }
                }
            }

        }
        if (diagonal) {
            console.log('This Matrix is a Unit Matrix or Identity Matrix');

        } else {
            console.log('This Matrix is Not a Unit Matrix or Identity Matrix');
        }


    } else {
        console.log('Matrix Should be a Square Matrix');

    }


}
identityMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]])