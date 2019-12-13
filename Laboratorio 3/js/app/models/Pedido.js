class Pedido {
   
    constructor() {
        this._aluno = [];
    }

    adiciona (aluno ) {
        this._aluno.push(aluno );
    }

    getAlunos() {
       // return this._itens;
       return [].concat(this._aluno );
    }

    



}