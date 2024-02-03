








function menorMayor (lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++ ) {
        suma += lista[i];
    }
    return suma;
}

let numero = [10,20,30,40,50];
let suma = menorMayor(numero);
console.log("suma", suma);
