class PedidoView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(alunos ) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${alunos.getAlunos().map(aluno => `
                    
                    <tr>
                        <td>${aluno.nome}</td>
                        <td>${aluno.quantidade}</td>
                        <td>${aluno.valor}</td> 
                        <td>${aluno.subTotal}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>

           <tfoot>
                <td colspan="3"></td>
                <td>
                    ${aluno.alunos.reduce((total, item) => total + item.subTotal, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;
    }

    update(aluno ) {
        this._elemento.innerHTML = this._template(aluno );
    }
}


/*           <tfoot>
              <td colspan="3"></td>
                 <td>${
                      (function calculaTotal() {
                         let total = 0.0;
                         pedido.itens.forEach(item => total += item.subTotal );
                         return total;
                      })()
                      
                    }
             </td>
            </tfoot>

<tfoot>
<td colspan="3"></td>
<td>
   ${pedido.itens
          .reduce(function(total, item) {
               return total + item.subTotal;
          }, 0.0)
     }
</td>
</tfoot>

 */