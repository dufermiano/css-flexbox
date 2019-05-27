function orderArray(a, b) {
  return a - b;
}

function minimumTime(num, files) {
  files = files.sort(orderArray);
  const tempoMinimo = [];

  files.reduce((total, numero) => {
    console.log(`Acumulador: ${total}, Número atual: ${numero}`);

    tempoMinimo.push(total + numero);
    console.log(tempoMinimo);

    return total + numero;

  });

  const tempoTotal = tempoMinimo.reduce((total, numero) => total + numero);

  console.log(tempoTotal);

}

// minimumTime(4, [8, 4, 6, 12]);

function removeObstacle(numRows, numColumns, lot) {
    if (numRows < 1 || numColumns > 1000 || numColumns < 1){
        return -1
    }
    
  for(let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColumns; col ++){
        if (lot[row][col] == 9) {
            return row + col
        }
    }
  }
    
  return -1

}

const lot = [
    [1, 0, 0], [1, 0, 0], [1, 9, 1]
]

console.log(removeObstacle(3, 3, lot));

// console.log([8, 4, 6, 12].sort(orderArray));
