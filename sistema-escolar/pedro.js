function somaArray(array){
    let resultado = 0;
    array.forEach((numero)=>{
        resultado += numero;
    })
    return resultado
}

console.log(somaArray([1,2,3,4]))

function somaArrayRecursao(array){
    if(array.length === 1){
        return array[0]
    }
    return array[0] + somaArrayRecursao(array.slice(1))
}
console.log(somaArrayRecursao([1,2,3,4]))