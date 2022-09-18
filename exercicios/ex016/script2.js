let num = document.querySelector("input#txtn");
let valores = [];
let lista = document.querySelector("select#lista");
let res = document.querySelector("div#mostra");

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `valor ${num.value} foi adicionado `;
    //item.tab = "tab${c}"; // para saber qual seleção foi feita no  tab (1,2,3....)
    lista.appendChild(item);
  } else {
    alert("valor invalido ou ja existe na lista");
  }
  num.value = "";
  num.focus();

  /*else {
    n.push(vad);
    let item = document.createElement("option");
    item.text = `valor ${vad} foi adicionado `;
    //item.tab = "tab${c}"; // para saber qual seleção foi feita no  tab (1,2,3....)
    tab.appendChild(item);
    mostra.innerHTML = `<p>Números digitados: ${n.lenght}</p>`;*/
}

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function soma(n) {
  let soma = 0;
  for (let s = 0; s < Number(n.length); s++) {
    soma += Number(n[s]);
  }
  return soma;
}

function finalizar() {
  res.innerHTML = "";

  if (valores.length == 0) {
    alert("Por favor adicione numeros antes de finalizar");
  } else {
    console.log(valores[valores.length - 1]);
    res.innerHTML += `<p> Quantidade de elementos: ${valores.length} </p>`;
    valores.sort((a, b) => a - b); //ordem ascendente

    res.innerHTML += `<p> ${
      valores[Number(valores.length) - 1]
    } é o maior valor </p>`;
    valores.sort((a, b) => b - a); //ordem decrescente

    res.innerHTML += `<p> e o menor valor é ${
      valores[Number(valores.length) - 1]
    }</p>`;
    let sum = soma(valores);
    res.innerHTML += `<p> a soma dos valores é <strong>${sum}</strong></p> `;
    res.innerHTML += `<p> a media é ${sum / Number(valores.length)}<p>`;
  }
}
