class TableView extends View {
    constructor(elemento) {
        super(elemento);
    }
    _template(aluno) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>1° NOTA</th>
                    <th>2° NOTA</th>
                    <th>3° NOTA</th>
                    <th>FREQUENCIA</th>
                    <th>MEDIA</th>
                    <th>PROVA FINAL</th>
                    <th>SITUACAO</th>

                </tr>
            </thead>
        
            <tbody>
                ${aluno.getAlunos().map(aluno => `
                    
                    <tr>
                        <td>${aluno.nome}</td>
                        <td>${aluno.n1}</td>
                        <td>${aluno.n2}</td>
                        <td>${aluno.n3}</td>
                        <td>${aluno.freq}</td>
                        <td>${aluno.media}</td>
                        <td>${aluno.pfinal}</td>
                        <td>${aluno.situacao}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>

                <tfoot >
                <tr>
                <td colspan="7"  align="center" >Alunos Aprovados</td>
                <td>
                 ${aluno.getAlunos().reduce((total, aluno)=>total + aluno.aprovados, 0)}
                </td>
                </tr>
                <tr>
                <td colspan="7"  align="center" >Alunos Reprovados</td>
                <td>
                 ${aluno.getAlunos().reduce((total, aluno)=>total + aluno.reprovados,0)}
                </td>
                </tr>
                   
                </td>
            </tfoot>
        </table>
        `;
       
    }
}
