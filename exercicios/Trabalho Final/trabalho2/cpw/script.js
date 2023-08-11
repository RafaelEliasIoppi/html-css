

function slide1(){
    document.getElementById("banner").src="imagens/logo/inter.png"
    setTimeout("slide2()",1000)
}

function slide2(){
    document.getElementById("banner").src="imagens/logo/juventude400.png"
    setTimeout("slide3()",1000)
}

function slide3(){
    document.getElementById("banner").src="imagens/logo/Ypiranga400.png"
    setTimeout("slide4()",1000)
}

function slide4(){
    document.getElementById("banner").src="imagens/logo/Avenida400.png"
    setTimeout("slide5()",1000)
    
}
function slide5(){
    document.getElementById("banner").src="imagens/logo/Aimore400.png"
    setTimeout("slide6()",1000)
    
}
function slide6(){
    document.getElementById("banner").src="imagens/logo/Caxias400.png"
    setTimeout("slide7()",1000)
    
}
function slide7(){
    document.getElementById("banner").src="imagens/logo/SaoJose400.png"
    setTimeout("slide1()",1000)
    
}

const imgs = document.getElementById('imagem')
const img = document.querySelectorAll('#imagem img')

let idx = 0

function carrossel(){
    idx++;
    if (idx > 11){
        idx = 0
    }
     imgs.style.transform = `translateX(${-idx * 200}px)`

}
setInterval(carrossel, 1500)


  