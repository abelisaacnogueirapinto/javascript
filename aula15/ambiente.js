/*let num = [5,8,2,9,3] // cria vetor com 5 posições com elementos especificados
num.sort() // colocar em ordem crescente o vetor
num.push(90) // adiciona um posiçao no final do vetor com elemento especificado


console.log(`o vetor tem ${num.length} posições`) // num.length mostra quantas posiçoes existe no vetor num

console.log(num)


/*for (let pos=0;pos<num.length;pos++) {

    console.log(`a posição ${pos} tem um valor ${num[pos]}`)

}

for (let pos in num) {  // maneira mais simples de listar o vetor
    console.log(`a posição ${pos} tem um valor ${num[pos]}`)

}*/
/*let resultado= 0
let pos =num.indexOf(90)
if (pos== -1) {
    console.log(`o valor não foi encontrado`)
}else {
    let resultado = num[pos]* 3
    console.log (` o calculo do resultado é  ${resultado}`)
}*/
var estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"];
//var buscar = "SP";
//var indice = estados.indexOf(buscar);// busca a existencia de um elemento dentro do vetor

/*estados.splice(0,4);
    

console.log(estados);*/
//var estados_novo = new Set([...estados]);

//console.log(estados_novo);

/*var produtos = [ // cria 
    {id: 1, nome: "Camiseta", categoria: "Vestuário"},
    {id: 2, nome: "Sapato", categoria: "Calçados"},
    {id: 3, nome: "Blusa", categoria: "Vestuário"},
    {id: 4, nome: "Saia", categoria: "Vestuário"},
    {id: 5, nome: "Chinelo", categoria: "Calçados"},
 {id: 6, nome: "Tênis", categoria: "Calçados"} 
]
console.log(produtos.filter(produto=> produto.nome == "Sapato"))
console.log(produtos.filter(produto=> produto.categoria == "Calçados"))*/
//estados.shift() //apaga o primeira posiçao do vetor
//estados.pop() // apaga o ultima posiçao do vetor
estados.splice(2,5) // apaga 5 posições apartir da posição 2 ( ou 3 elemento)
console.log(estados)



