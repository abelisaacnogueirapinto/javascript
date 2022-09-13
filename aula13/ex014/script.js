function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML= `Agora são ${hora} horas e ${minutos} minutos`
    
    if (hora>=0 && hora <12) {
        img.src='imagens/fotomanha.png'
        document.body.style.background = '#BBB800'

    } 
    if (hora>=12 && hora < 18) {
        img.scr='imagens/fototarde.png'
        document.body.style.background = '#CE9E16'

    }
    if (hora>=18) {
        img.src='imagens/fotonoite.png'
        document.body.style.background = '#17170d'
    }
    
}