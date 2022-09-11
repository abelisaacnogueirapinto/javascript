var mes = 11

var mesext = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
if (mes>=12) {
    console.log('mes não atende requisitos')
    mesext[12]='não existe este mes'
    
}


console.log(`o mes ${mesext[mes]} 2022`)

if(mes>=0 && mes<=2 || mes == 11 ) {
    console.log('Você está no Verão')
}else if (mes > 2 && mes < 5) {
    console.log('Você está no outono')
}else if (mes >4 && mes < 9){
    console.log('Você está no Inverno')
}else if(mes <11) {
    console.log('Você está no primavera')
}


