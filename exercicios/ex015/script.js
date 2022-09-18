function tabuada() {
  let tab = document.getElementById("seltab");

  let num = document.getElementById("itab");
  let n = num.value;

  if (!num.value) {
    window.alert("favor colocar um número");
    tab.innerHTML = "";
  } else {
    tab.innerHTML = "";
    for (let c = 0; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = ` ${n} x ${c} = ${n * c}  `;
      item.tab = "tab${c}"; // para saber qual seleção foi feita no  tab (1,2,3....)
      tab.appendChild(item);
    }
  }
}

function calcular() {
  let n = Number(document.getElementById("itab").value);
  let res = document.getElementById("res");

  let v2 = Number(document.getElementById("icalc").value);

  let operador = document.querySelector("input[name=opera]:checked").value;

  res.innerHTML = "";
  if (!v2) {
    window.alert(" Favor inserir um numero");
    res.innerHTML = "";
  }

  if (operador === "A") {
    res.innerHTML = " Adição ";
    let t = Number(n) + Number(v2);
    res.innerHTML = `<p> O resultado(Soma) é ${t}</p>`;
  } else if (operador === "S") {
    res.innerHTML = "Subtração";
    let t = n - v2;
    res.innerHTML = `<p> O resultado(subtração) é ${t}</p>`;
  }
  if (operador === "M") {
    res.innerHTML = "Multiplicação";
    let t = n * v2;
    res.innerHTML = `<p> O resultado(Multiplicação) é ${t}</p>`;
  } else if (operador === "D") {
    res.innerHTML = "Divisão";
    let t = n / v2;
    res.innerHTML = `<p> O resultado(divisão) é ${t}</p>`;
  }
}

function limpar() {
  let res = document.getElementById("res");
  res.innerHTML = " ";
}
//alert(document.querySelector('input[name=opera]:checked').value)*/    }
