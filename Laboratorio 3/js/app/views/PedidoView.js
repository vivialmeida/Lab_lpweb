class PedidoView extends View {

    constructor(elemento) {
        super(elemento );
    }

    _template(aluno ) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>1° NOTA</th>
                    <th>2° NOTA</th>
                    <th>3° NOTA</th>
                    <th>MEDIA</th>
                    <th>SITUAÇÃO</th>
                    <th>FREQUENCIA</th>
                </tr>
            </thead>
        
            <tbody>
                ${aluno.getAlunos().map(aluno=> `
                    
                    <tr>
                        <td>${aluno.nome}</td>
                        <td>${aluno.n1}</td>
                        <td>${aluno.n2}</td>
                        <td>${aluno.n3}</td>
                        <td>${aluno.freq}</td>
                        <td>${aluno.situacao}</td>
                        <td>${aluno.subTotal}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>

           <tfoot>
                <td colspan="3"></td>
                <td>
                    ${aluno.getAlunos().reduce((total, item) => total + item.subTotal, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;
    }
}


