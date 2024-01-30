const btnPlayPause = document.getElementById('play-pause');
const audio = document.getElementById('audioCap');
const next = document.getElementById('next');
const preview = document.getElementById('preview');
const chapters = document.getElementById('chapters');

const numeroCapitulos = 10;
let taTocando = 0;
let capAtual = 1;

function tocarFaixa(){
    audio.play();
    btnPlayPause.classList.remove('bi-play-circle-fill');
    btnPlayPause.classList.add('bi-pause-circle-fill');
}
function pararFaixa(){
    audio.pause();
    btnPlayPause.classList.remove('bi-pause-circle-fill');
    btnPlayPause.classList.add('bi-play-circle-fill');
}
function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }
    else{
        pararFaixa();
        taTocando = 0
    }

}

function trocarTitle(){
    chapters.innerText ='Capitulo ' + capAtual;
}
function proximaFaixa(){
    if(capAtual === numeroCapitulos){
        capAtual = 1;
    }
    else{
        capAtual = capAtual + 1;
    }
    audio.src = "./books/dom-casmurro/" + capAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarTitle()
}
function voltarFaixa(){
    if(capAtual === 1){
        capAtual = numeroCapitulos;
    }
    else{
        capAtual = capAtual - 1;
    }
    audio.src = "./books/dom-casmurro/" + capAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarTitle()
}


btnPlayPause.addEventListener('click',tocarOuPausar);
next.addEventListener('click',proximaFaixa);
preview.addEventListener('click',voltarFaixa);
