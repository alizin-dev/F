const body = document.querySelector("body");
const swalst = Swal.mixin({
    timer: 2300, 
    allowOutsideClick: false, 
    showConfirmButton: false, 
    timerProgressBar: true, 
    imageHeight: 90,
}); 

audio = new Audio('' + linkmp3.src); 
ftganti = 0;
fungsi = 0;
fungsiAwal = 0;
deffotostiker = fotostiker.src;
Content.style = "opacity:1;margin-top:35vh"; 

const swals = Swal.mixin({
    allowOutsideClick: false, 
    cancelButtonColor: '#FF0040', 
    imageHeight: 80,
}); 

var sudahKlik = true;
document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
        if(fungsiAwal == 0){
            audio.play();
            fungsiAwal = 1;
            loveIn.style = "transition:all .8s ease;transform:scale(15);opacity:0";
            wallpaper.style = "transform: scale(1.5);";
            ket.style = "display:none";
            setTimeout(initengahan, 300);
            setTimeout(inipesan, 500);
        }
    } else {
        sudahKlik = true;
        document.getElementById('loveIn').innerHTML = '<a href="#" class="lovein">&#10084;</a>';
    }
}

async function inipesan(){
    // Mensagem mais romântica e intensa
    vketikutama = "QUER SER MINHA PARA SEMPRE, MEU AMOR? ❤️🔥";
    mulainama();
}

function initengahan(){
    loveIn.style = "display:none";
    ket.style = "display:none";
    Content.style = "opacity:1;margin-top:30px";
    bodyblur.style = "opacity:.7";
    wallpaper.style = "transform: scale(1.5);";
}

async function mulainama() {
    bodyblur.style = "opacity:.7";
    wallpaper.style = "transform: scale(1);";
    fotostiker.style = "display:inline-flex;";
    setTimeout(ftmuncul, 200);
    setTimeout(ketutama, 500);
}

function ftmuncul(){
    if(ftganti == 0){ fotostiker.src = deffotostiker; } 
    if(ftganti == 1){ fotostiker.src = fotostiker1.src; } 
    if(ftganti == 2){ fotostiker.src = fotostiker2.src; } 
    if(ftganti == 3){ fotostiker.src = fotostiker3.src; } 
    if(ftganti == 4){ fotostiker.src = fotostiker4.src; } 
    if(ftganti == 5){ fotostiker.src = fotostiker5.src; } 
    if(ftganti == 6){ fotostiker.src = fotostiker6.src; } 
    if(ftganti == 7){ fotostiker.src = fotostiker7.src; } 
    fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

function fthilang(){
    fotostiker.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

function jjfoto(){
    fotostiker.style.animation = "rto .8s infinite alternate";
}

function bqmuncul(){
    bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
    mulaiketik1();
    fungsi = 1;
}

function bqhilang(){
    wallpaper.style = "transform: scale(2);";
    bodyblur.style = "opacity:.3";
    bq.style = "position:relative;transition:all .7s ease;";
}

function ketutama(){
    new TypeIt("#utama", {
        strings: ["" + vketikutama], 
        startDelay: 50, 
        speed: 30, 
        waitUntilVisible: true, 
        afterComplete: function(){
            utama.innerHTML = vketikutama;
            setTimeout(bqmuncul, 200);
        },
    }).go();
}

// Mensagens mais intensas e apaixonadas
vketik1 = "Meu amor, cada batida do meu coração carrega seu nome... 💘";
kalimat.innerHTML = "";
kalimatb.innerHTML = "";

function mulaiketik1(){
    new TypeIt("#kalimat", {
        strings: ["" + vketik1], 
        startDelay: 400, 
        speed: 20, 
        cursor: false, 
        deleteSpeed: 20, 
        breakLines: false, 
        waitUntilVisible: true, 
        lifelike: true,
        afterComplete: function(){
            aktiopsL();
        },
    }).go();
}

opsLclick = 0;
opsLcheck = 0;
defopsL = "Toque para sentir cada palavra do meu coração...";

document.getElementById("bq").onclick = function() {
    if(opsLclick == 1){
        if(opsLcheck == 1){ setTimeout(aktipesan1, 400); }
        if(opsLcheck == 2){ mulaiketik3(); }
        if(opsLcheck == 3){ mulaiketik4(); }
        if(opsLcheck == 4){ mulaiketik5(); }
        if(opsLcheck == 5){ ketutama2(); }
        otomatis();
        opsL.style.opacity = "0";
        opsLclick = 0;
    }
}

function aktiopsL(){
    opsL.innerHTML = defopsL;
    opsL.style.opacity = ".8";
    opsLclick = 1;
    opsLcheck += 1;
}

function gantiopsL(){
    opsL.innerHTML = "Toque em cada coração e descubra meu amor...";
    opsL.style.opacity = ".8";
}

function otomatis(){
    kalimat.style = "opacity:0";
    setTimeout(otolanj, 400);
}

function otolanj(){
    kalimat.style = "opacity:1";
}

function aktipesan1(){
    kalimat.innerHTML = "Toque em cada ❤️ e libere uma parte da minha alma...";
    kolombaru.style = "position:relative;opacity:1;transform:scale(1);";
}

// Mensagens mais apaixonadas
vketik4 = "Você é o sonho que nunca ousei sonhar... e agora não quero acordar. 💫";
pesan4.innerHTML = "";

function aktipesan4(){
    kalimat.style = "display:none";
    wallpaper.style = "transform: scale(1.5);";
    kolombaru.style = "";
    kalimat.innerHTML = "";
    wallpaper.style = "transform: scale(1);";
    
    new TypeIt("#pesan4", {
        strings: ["" + vketik4], 
        startDelay: 1, 
        speed: 35, 
        cursor: true, 
        waitUntilVisible: true, 
        lifelike: true,
        afterComplete: function(){
            pesan4.innerHTML = vketik4;
            setTimeout(aktipesan5, 800);
        },
    }).go();
}

vketik5 = "Seu sorriso é minha religião, seu abraço meu santuário... 🙏✨";
pesan5.innerHTML = "";

function aktipesan5(){
    pesan4.style = "display:none";
    wallpaper.style = "transform: scale(1.5);";
    fthilang(); 
    ftganti = 2; 
    setTimeout(ftmuncul, 300);
    
    new TypeIt("#pesan5", {
        strings: ["" + vketik5], 
        startDelay: 1, 
        speed: 35, 
        cursor: true, 
        waitUntilVisible: true, 
        lifelike: true,
        afterComplete: function(){
            pesan5.innerHTML = vketik5;
            setTimeout(aktipesan6, 800);
        },
    }).go();
}

vketik6 = "Com você, aprendi que o amor não tem fim... só recomeços infinitos. 🌅";
pesan6.innerHTML = "";

function aktipesan6(){
    pesan5.style = "display:none";
    wallpaper.style = "transform: scale(1);";
    fthilang(); 
    ftganti = 3; 
    setTimeout(ftmuncul, 300);
    
    new TypeIt("#pesan6", {
        strings: ["" + vketik6], 
        startDelay: 1, 
        speed: 35, 
        cursor: true, 
        waitUntilVisible: true, 
        lifelike: true,
        afterComplete: function(){
            pesan6.innerHTML = vketik6;
            setTimeout(aktipesan7, 800);
        },
    }).go();
}

vketik7 = "Prometo amar você em todos os universos, em todas as vidas...<br><br>Minha alma encontrou a sua e não quer mais se separar. 💞";
pesan7.innerHTML = "";

function aktipesan7(){
    pesan6.style = "display:none";
    wallpaper.style = "transform: scale(1.5);";
    fthilang(); 
    ftganti = 4; 
    setTimeout(ftmuncul, 300);
    
    new TypeIt("#pesan7", {
        strings: ["" + vketik7], 
        startDelay: 1, 
        speed: 35, 
        cursor: true, 
        waitUntilVisible: true, 
        lifelike: true,
        afterComplete: function(){
            pesan7.innerHTML = vketik7;
            setTimeout(aktipesan8, 300);
        },
    }).go();
}

vketik8 = "Você não é apenas meu amor...<br>É meu tudo, minha razão, meu sempre. 😍💖";
pesan8.innerHTML = "";

function aktipesan8(){
    wallpaper.style = "transform: scale(1);";
    fthilang(); 
    ftganti = 5; 
    setTimeout(ftmuncul, 300);
    
    new TypeIt("#pesan8", {
        strings: ["" + vketik8], 
        startDelay: 1, 
        speed: 35, 
        cursor: true, 
        waitUntilVisible: true, 
        lifelike: true,
        afterComplete: function(){
            pesan8.innerHTML = vketik8;
            setInterval(berjatuhan, 200);
            // Pergunta final mais romântica
            setTimeout(() => {
                tanya = 'Você aceita ser minha eternidade? 🌹';
                tompositif = 'SIM, COM TODO MEU CORAÇÃO!';
                tomnegatif = 'Preciso pensar...';
                pertanyaan();
            }, 2000);
        },
    }).go();
}

var slov = 0;
document.getElementById("lv1").onclick = function() { 
    lv1.style = "opacity:0"; 
    slov += 1; 
    this.onclick = null; 
    checkslov(); 
}

document.getElementById("lv2").onclick = function() { 
    lv2.style = "opacity:0"; 
    slov += 1; 
    this.onclick = null; 
    checkslov(); 
}

document.getElementById("lv3").onclick = function() { 
    lv3.style = "opacity:0"; 
    slov += 1; 
    this.onclick = null; 
    checkslov(); 
}

document.getElementById("lv4").onclick = function() { 
    lv4.style = "opacity:0"; 
    slov += 1; 
    this.onclick = null; 
    checkslov(); 
}

function checkslov() {
    if(slov == 4){
        kolombaru.style = "position:relative;transform:scale(1)";
        fthilang(); 
        ftganti = 1; 
        setTimeout(ftmuncul, 300);
        otomatis();
        setTimeout(aktipesan4, 400);
    }
}

// Variáveis para pergunta final mais romântica
var tanya = 'Você aceita ser minha eternidade? 🌹';
var opstanya = 'Minha alma espera sua resposta...';
var tompositif = 'SIM, COM TODO MEU CORAÇÃO!';
var tomnegatif = 'Preciso pensar...';

async function pertanyaan(){
    var { isConfirmed: prtanya } = await swals.fire({
        title: tanya, 
        text: '' + opstanya, 
        imageUrl: '' + fotostiker5.src, 
        showCancelButton: true, 
        confirmButtonText: '' + tompositif, 
        cancelButtonText: '' + tomnegatif,
        confirmButtonColor: '#FF1493',
    });
    
    if(prtanya){
        pesanwhatsapp = "ACEITO SER SUA ETERNIDADE! TE AMO PARA SEMPRE! ❤️💍";
        await swalst.fire({
            title: 'NOSSA ETERNIDADE COMEÇA AGORA! 💘', 
            timer: 3000, 
            imageUrl: '' + fotostiker5.src,
        });
        menuju();
    } else {
        pesanwhatsapp = "Preciso de mais tempo para pensar nessa eternidade...";
        await swalst.fire({
            title: 'Meu coração vai esperar... mas não desisto de você! 💔', 
            timer: 3000, 
            imageUrl: '' + fotostiker4.src,
        });
        menuju();
    }
}

function berjatuhan() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
}

setInterval(function () {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
        heartArr[0].remove();
    }
}, 100);

// Adicionar função menuju se não existir
function menuju() {
    // Redirecionar ou mostrar mensagem final
    setTimeout(() => {
        Swal.fire({
            title: 'Nosso amor é infinito! 🌟',
            text: 'Obrigado por compartilhar esse momento comigo...',
            imageUrl: fotostiker5.src,
            confirmButtonText: 'TE AMO! ❤️'
        });
    }, 1000);
}
