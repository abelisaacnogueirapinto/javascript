function contar() {
    let vinic = document.getElementById('inic')
    let vfim= document.getElementById('fim')
    let vpasso=document.getElementById('pas')
    let res=document.querySelector('div#res')

    if (vinic == "" || vfim =="" || vpasso =="" ){
        alert('Início, fim e passo  não podem estar vazios ')
    }else if (vinic >= vfim){
        alert('O início deve ser menor do que o Fim')
        res.innerHTML = `valor do inicio ${vinic} valor fim ${vfim}`
    } else  if (vpasso=0) {
          res.innerHTML = `Passo não pode ser zero`
    }else{
        res.innerHTML= `Contando:`
    }
    
   
}
