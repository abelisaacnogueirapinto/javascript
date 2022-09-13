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
        
        
    }

}