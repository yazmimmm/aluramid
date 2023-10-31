

function tocaSomPom  (idEementoAudio) {
    document.querySelector(idEementoAudio).play();

}

const listaDeTeclas=document.querySelectorAll('.tecla')
listaDeTeclas[0].onclick=querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {
   const efeito=listaDeTeclas[contador].classList[1];
   const idAudio="#som_"+efeito;
   listaDeTeclas  [contador].onclick=function()
{
 tocaSom(idAudio);   
}
 contador=contador+1;
 console.log(contador);
}







//Essa funçao consegue  selecionar  e ler o arquivo, mas nao conseguimos
//manipular o elemento
document.querySelector('.tecla_pom');

