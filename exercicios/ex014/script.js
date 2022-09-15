function contar(numero) {
  console.log("aa");
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  
  if (!ini.value || !fim.value || !passo.value) {
    window.alert("Início fim e passo  não podem estar vazios ");
  } else {
    res.innerHTML = "Contando: ";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("passo invalido, considero 1");
      p = 1;
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{25AB}`;
      }
    }
    if (i > f) {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F601}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
