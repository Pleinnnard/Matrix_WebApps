function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '[0]';
        }
        console.log(row);
    }
}
printMatrix(n);
