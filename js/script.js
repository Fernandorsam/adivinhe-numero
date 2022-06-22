'use strict';

//adicionar variaveis para armazenar dados
var numeroAleatorio = Math.floor(Math.random()*100)+1;//gerador de numeros aleatorios
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpites = 1;
var botaoReinicio;


// verificar se palpite do usuario está correto ou não

function conferirPalpite(){
    
    let palpiteUsuario = Number(campoPalpite.value);

   if(campoPalpite.value <= 0 || campoPalpite.value > 100){
    alert('DIGITE ENTRE 1 A 100 NO CAMPO ABAIXO');
    campoPalpite.value = '';
    return campoPalpite.focus();

   }

    else if(contagemPalpites === 1){
        palpites.textContent = 'Palpites Anteriores: ';
    }

   
    if(palpiteUsuario === numeroAleatorio){

        ultimoResultado.textContent = 'Parabéns! você aceeeertou';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimJogo();

    } 
   
    else if(contagemPalpites === 10){
        ultimoResultado.textContent='!!! FIM DE JOGO !!!';
        baixoOuAlto.textContent='';
        configFimJogo();
    }
    else{
        ultimoResultado.textContent = 'NÃO FOI DESTA VEZ';
        ultimoResultado.style.backgroundColor = 'red';

        if(palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'SEU PALPITE ESTÁ MUITO BAIXO';

        }else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'SEU PALPITE ESTÁ MUITO ACIMA';
        }
        
    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
    palpites.textContent += palpiteUsuario+ ' ';

} // fim conferirPalpites


//desativar inputs quando acabar tentivas do jogo >>'loop'<<
function configFimJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo Jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click',reniciarJogo);
}//fim configFimJogo


//jogo reiniciado após fim do jogo
function reniciarJogo(){

    contagemPalpites;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');

    for(var i = 0;i < reiniciarParas.length;i++){
        reiniciarParas[i].textContent = '';

    }

botaoReinicio.parentNode.removeChild(botaoReinicio);
campoPalpite.disabled = false;
envioPalpite.disabled = false;
campoPalpite.value = '';
campoPalpite.focus();

ultimoResultado.style.backgroundColor = 'white';
 numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}//fim reiniciarJogo


//eventos
envioPalpite.addEventListener('click',conferirPalpite);


