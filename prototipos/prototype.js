const numeros = [1, 2, 3, 4, 5];


Array.prototype.Map = function(fCallback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const resultado = fCallback(this[i], i, this);
        newArray.push(resultado);
    }

    return newArray;
};


Array.prototype.Filter = function(fCallback) {
    const arrayFiltrado = [];

    for (let i = 0; i < this.length; i++) {
        const condicao = fCallback(this[i], i, this);
        if (condicao) {
            arrayFiltrado.push(this[i]);
        }
    }

    return arrayFiltrado;
};


Array.prototype.Reduce = function(fCallback, valorInicial) {
    let acumulador;
    let indiceInicial;

    if (valorInicial !== undefined) {
        acumulador = valorInicial;
        indiceInicial = 0;
    } else {
        acumulador = this[0];
        indiceInicial = 1;
    }

    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = fCallback(acumulador, this[i], i, this);
    }

    return acumulador;
};


Array.prototype.ForEach = function(fCallback) {
    for (let i = 0; i < this.length; i++) {
        fCallback(this[i], i, this);
    }
};

