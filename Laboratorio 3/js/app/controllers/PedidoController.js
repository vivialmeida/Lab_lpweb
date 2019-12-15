class PedidoController {
    
    

    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#nome' );
        this._inputN1 = $('#n1');
        this._inputN2 = $('#n2');
        this._inputN3 = $('#n3');
        this._inputFreq = $('#freq' );
        this._LabelSitu= $('#situ');
        this._Labelmedia= $('#media');


        this._pedido = new Pedido(); 

        this._pedidoView = new PedidoView($('#js-pedidoVendaView') );
        this._pedidoView.update(this._pedido );
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );

    }
    
    adiciona(event ) {
        let media = 0;
        
        event.preventDefault();
      
        let item = this._criaboletimAluno();
        this._pedido.adiciona(item ); 
        this._pedidoView.update(this._pedido );
        this._calculaMedia(item.n1,item.n2,item.n3);
           this._atualizaSituaçao();

    

        this._mensagem.texto = `Aluno(a) ${item.nome} foi adicionado com sucesso.`;
        this._mensagemView.update(this._mensagem );
        this._limpaFormulario();
    }

    _criaboletimAluno() {
        return new boletimAluno(
            this._inputNome.value,
            this._inputN1.value,
            this._inputN2.value , 
            this._inputN3.value,
            this._inputFreq.value,
            // this._LabelSitu.value,
            // this._Labelmedia.value

            
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

    
        if( this.media >= 70 && this._inputFreq > 75){
        this._inputSituacao.value = "Aprovado";
        }else if (this.media < 30){
            this._inputSituacao.value = "Reprovado";
        }else{
            this._inputSituacao.value = "Prova Final";
        }

    }

  
    _calculaMedia(a, b, c){
        let media = (parseFloat(a) +parseFloat(b) + parseFloat(c))/3
       
        console.log(media);
    
       return media;
        }


}