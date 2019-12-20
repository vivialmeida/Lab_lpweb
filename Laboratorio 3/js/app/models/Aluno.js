class Aluno {
   
    constructor() {
        this._aluno = [];
    }

    adiciona (aluno ) {
        this._aluno.push(aluno );
    }

    getAlunos() {
       return [].concat(this._aluno );
    }

    



}