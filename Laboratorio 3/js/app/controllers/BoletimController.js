class BoletimController {

    

    constructor() {
        
        let $ = document.querySelector.bind(document);
        let labelProvaF = document.getElementById('pFinal');
       
        this._inputNome = $('#nome');
        this._inputN1 = $('#n1');
        this._inputN2 = $('#n2');
        this._inputN3 = $('#n3');
        this._inputFreq = $('#freq' );
        this._labelMedia= $('#media');
        this._labelPFinal= $('#pFinal');
        this._labelSitu= $('#situacao');


        this.aluno = new Aluno(); 

        this.tableView = new TableView($('#js-boletimView') );
        this.tableView.update(this.aluno );
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );

    }
    
    adiciona(event ) {
        let media = 0;
        event.preventDefault();
        media = this._calculaMedia();
        this._atualizaSituaçao(media, this._labelPFinal);
        let item = this._criaboletimAluno();
      
        
       
        this.aluno.adiciona(item ); 
        this.tableView.update(this.aluno );
     

    

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
            this._labelPFinal.value,
            this._labelSitu.value,
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputN1.value ="";
        this._inputN2.value = "";
        this._inputN3.value = "";
        this._inputFreq.value = "";
        this._labelMedia.value = "";
        this._labelPFinal.value="";
        this._labelSitu.value ="";
        this.labelProvaF.setAttribute("type", "number");


        this._inputNome.focus();
    }

    _atualizaSituaçao(media, final){
        
    
        if( media >= 70 && this._inputFreq.value >= 75){
        this._labelSitu.value = "Aprovado";
        // this._labelPFinal.setAttribute("type", "hidden");
        }else if (this.media < 30 || this._inputFreq.value < 75){
            this._labelSitu.value = "Reprovado";
        }else if(media + parseFloat(final.value) >= 50){
            this._labelPFinal.setAttribute("type", "number");
            this._labelSitu.value= "Aprovado com exame final"
         }else {
              this._labelSitu.value = "Reprovado";
         }  

    }

  
    _calculaMedia(){
        let media = (parseFloat(this._inputN1.value) +parseFloat(this._inputN2.value) + parseFloat(this._inputN3.value))/3
       
        console.log(media);
        this._labelMedia.value = media;
    
       return media;
        }
campoPF(event){

    if (this._calculaMedia() < 70 && this._inputFreq.value < 70){
            console.log("teste")
        
        this.labelProvaF.setAttribute("type", "number");
    }
}

}