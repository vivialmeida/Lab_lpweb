class boletimAluno {


    constructor(nome, n1, n2, n3, freq, media, pfinal, situacao) {
        
        this._nome = nome;
        this._n1 = n1;
        this._n2 = n2;
        this._n3 = n3;
        this._freq = freq;
        this._media = media;
        this._pfinal = pfinal;
        this._situacao = situacao;



        Object.freeze(this );
    }
    

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
    get media() {
        return this._media;
    }
    get situacao() {
        return this._situacao;
    }

    get pfinal() {
        return this._pfinal;
    }

    get aprovados(){
        if(this._situacao.includes("Aprovado")){
            return 1;
        }
        return 0;
    }

    get reprovados(){
        if(this._situacao.includes("Reprovado")){
            return 1;
        }
        return 0;
    }
}