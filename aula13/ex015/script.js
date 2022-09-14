function verificar() {
    let data = new Date()
    let ano= data.getFullYear()
    let fano=document.getElementById('txtano')
    let res=document.querySelector('div#res')
 
    if ( fano.value.length ==0 || fano.value>ano) {
        alert('[ERRO] dados incorretos digite novamente')
    } else{
        //alert('tudo ok')
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            
            if (idade>=0 && idade < 4 ) {
                img.setAttribute('src','imagens/neneH.png')
                genero='bêbe'
            } else if ( idade< 12){
                genero='Menino'
                img.setAttribute('src','imagens/menino.png')
            } else if ( idade< 29) {
                genero='Rapaz'
                img.setAttribute('src','imagens/rapaz.png')
            }else if ( idade< 60){
                genero='Senhor'
                img.setAttribute('src','imagens/senhor.png')
            }else {
                genero='Idoso'
                img.setAttribute('src','imagens/velho.png')
            }
               

        } else if(fsex[1].checked) {
            if (idade>=0 && idade < 4 ) {
                img.setAttribute('src','imagens/neneM.png')
                genero='bêbe'
            } else if ( idade< 12){
                genero='Menina'
                img.setAttribute('src','imagens/menina.png')
            } else if ( idade< 29) {
                genero='Moça'
                img.setAttribute('src','imagens/moca.png')
            }else if ( idade< 60){
                genero='Senhora'
                img.setAttribute('src','imagens/senhora.png')
            }else {
                genero='Idosa'
                img.setAttribute('src','imagens/velha.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}