class boletimAluno {


    constructor(nome, n1, n2, n3, freq ) {
        
        this._nome = nome;
        this._n1 = n1;
        this._n2 = n2;
        this._n3 = n3;
        this._freq = freq;

        Object.freeze(this );
    }
    
    // get subTotal() {
    //     return this._quantidade * this._valor;
    // }

    get nome() {
        return this._nome;
    }
    
    get n1() {
        return this._n1;
    }

    get n2() {
        return this._n2;
    }

    get n3() {
        return this._n3;
    }
    
    get freq() {
        return this._freq;
    }
}