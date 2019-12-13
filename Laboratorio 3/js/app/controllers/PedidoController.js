class PedidoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#nome' );
        this._inputN1 = $('#n1');
        this._inputN2 = $('#n2');
        this._inputN3 = $('#n3');
        this._inputFreq = $('#freq' );
        this.LabelSitu

        this._pedido = new Pedido(); 

        this._pedidoView = new PedidoView($('#js-pedidoVendaView') );
        this._pedidoView.update(this._pedido );
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );

    }
    
    adiciona(event ) {
        
        event.preventDefault();
      
        let item = this._criaboletimAluno();
        this._pedido.adiciona(item ); 
        this._pedidoView.update(this._pedido );

        this._limpaFormulario();


        this._mensagem.texto = `Aluno(a) ${item.nome} foi adicionado com sucesso.`;
        this._mensagemView.update(this._mensagem );
    }

    _criaboletimAluno() {
        return new boletimAluno(
            this._inputNome.value,
            this._inputN1.value,
            this._inputN2.value , 
            this._inputN3.value,
            this._inputFreq.value,
            
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputN1.value ="";
        this._inputN2.value = "";
        this._inputN3.value = "";
        this._inputFreq.value = "";


        this._inputNome.focus();
    }

    _atualizaSituaçao(){

        let media = (this._inputN1.value + this._inputN2.value + this._inputN3.value)/3;
        this.in
        if( media >= 70 && this._inputFreq > 75){
        this._inputSituacao.value = "Aprovado";
        }else if (media < 30){
            this._inputSituacao.value = "Reprovado";
        }else{
            this._inputSituacao.value = "Prova Final";
        }

    }


}