class game{
    constructor(){
        this.houses = document.querySelectorAll('input')
        this.btnRestart = document.querySelector('.resert')
        this.play = document.querySelector('.play')
        this.player = '_'
        this.toWinner = '_'
        this.toLuckPlayer()
        this.clickHouses()
        this.nextPlayer()
        this.conditionOfWinner()
        this.restart()
    }

   // função para clique nas this.houses
    clickHouses(){
      //Define a resposta ao evento de clique nas this.houses do "tabuleiro"
  for(var i=0;i<9;i++) {
    this.houses[i].addEventListener('click', element => {
        //se a casa estiver vazia e ninguém tiver vencido a partida
        if( (element.target.value=='_') && (this.toWinner=='_')) {
            element.target.value=this.player; //preenche a casa com X ou O
            element.target.style.color='black'; //torna o valor da casa visível

            this.nextPlayer(); //função que troca a vez do jogador, a ser definida depois

            this.toWinner = this.conditionOfWinner(); //Executa a função vitoria() que defineremos depois, ela retorna o this.toWinner da partida, caso exista.

            //se o this.toWinner existe, imprime
            if(this.toWinner!='_') {
                this.play.innerText=`${this.toWinner} venceu!`;
            }
        }
    });
}
    }
    restart(){
           //Define a resposta ao evento de clique no botão Reiniciar
   this.btnRestart.addEventListener('click', (event) => {
    for(var i=0;i<9;i++) {
        this.houses[i].value='_'; //Limpa todas as this.houses
        this.houses[i].style.color='white'; //Torna o valor _ invisível
        this.houses[i].style.backgroundColor='white'; //Torna o fundo branco
    }

    this.toWinner = '_'; //Reseta o vencedor

    this.toLuckPlayer(); //Escolhe aleatoriamente qual jogador irá começar
});
    }

    firstPlayerRandom(){
        
//Usa uma função que decide aleatoriamente o jogador a fazer a primeira jogada
   
    if(Math.floor(Math.random() * 2)==2) {
        this.player = "O"; //define o jogador O como atual
        this.play.innerText="O"; //exibe na página qual é o jogador atual
        this.play.style.color='#F00'; //deixa o texto na cor vermelha
    }else{
        this.player = "X";//define o jogador X como atual
        this.play.innerText="X"; //exibe na página qual é o jogador atual
        this.play.style.color='#00F'; //deixa o texto na cor azul
    }

    }
    nextPlayer(){
     //Alterna a vez entre os jogadores X e Y
    if(this.player=='X') {
        this.player='O';
        this.play.innerText='O';
        this.play.style.color='#F00';
    
    }else{
        this.player='X';
        this.play.innerText='X';
        this.play.style.color='#00F';
    }

}
aux(value1,index1,index2,index3){
    if((value1[index1].value == value1[index2].value) && (value1[index2].value == value1[index3].value) && value1[index1].value != '_'){
        value1[index1].style.backgroundColor='#0F0';
        value1[index2].style.backgroundColor='#0F0';
        value1[index3].style.backgroundColor='#0F0';
        return value1[index1].value
    }
    
}

    conditionOfWinner(){
        
    //Verifica se uma condição de vitória foi atingida e colore a linha da vitória
        this.aux(this.houses,0,1,2)
        this.aux(this.houses,3,4,5)
        this.aux(this.houses,6,7,8)
        this.aux(this.houses,0,3,6)
        this.aux(this.houses,1,4,7)
        this.aux(this.houses,2,5,8)
        this.aux(this.houses,0,4,8)
        this.aux(this.houses,2,4,6)
        return '_';
    }
    toLuckPlayer(){
         //Usa uma função que decide aleatoriamente o jogador a fazer a primeira jogada
    if(Math.floor(Math.random() * 2)==0) {
        this.player = "O"; //define o this.player O como atual
        this.play.innerText="O"; //exibe na página qual é o this.player atual
        this.play.style.color='#F00'; //deixa o texto na cor vermelha
    }else{
        this.player = "X";//define o jogador X como atual
        this.play.innerText="X"; //exibe na página qual é o jogador atual
        this.play.style.color='#00F'; //deixa o texto na cor azul
    }
}

    }


window.app = new game

