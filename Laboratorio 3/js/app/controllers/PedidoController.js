class PedidoController {
    
    

    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#nome');
        this._inputN1 = $('#n1');
        this._inputN2 = $('#n2');
        this._inputN3 = $('#n3');
        this._inputFreq = $('#freq' );
        this._labelSitu= $('#situacao');
        this._labelMedia= $('#media');


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
        media = this._calculaMedia();
        this._atualizaSituaçao(media);
        let item = this._criaboletimAluno();
      
        
       
        this._pedido.adiciona(item ); 
        this._pedidoView.update(this._pedido );
     

    

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
            this._labelMedia.value,  
            this._labelSitu.value,    
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputN1.value ="";
        this._inputN2.value = "";
        this._inputN3.value = "";
        this._inputFreq.value = "";
        this._labelSitu.value ="";
        this._labelMedia.value = "";


        this._inputNome.focus();
    }

    _atualizaSituaçao(media){
        
    
        if( media >= 70 && this._inputFreq.value >= 75){
        this._labelSitu.value = "Aprovado";
        }else if (this.media < 30){
            this._labelSitu.value = "Reprovado";
        }else{
            this._labelSitu.value = "Prova Final";
        }

    }

  
    _calculaMedia(){
        let media = (parseFloat(this._inputN1.value) +parseFloat(this._inputN2.value) + parseFloat(this._inputN3.value))/3
       
        console.log(media);
        this._labelMedia.value = media;
    
       return media;
        }


}