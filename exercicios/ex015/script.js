function tabuada() {
  console.log("chegou a1");
  let num = document.getElementById("itab");
  let res = document.getElementById("res");
  let n = num.value;

  /*
    let opA = document.getElementById("isoma").value;
    let opS = document.getElementById("isubt").value;
    let opM = document.getElementById("imult").value;
    let opD = document.getElementById("idivi").value;
    */

  if (!num.value) {
    window.alert("favor colocar um número");
    res.innerHTML = "";
  } else {
    res.innerHTML = " Tabuada Multiplicação";
    for (let c = 0; c <= 10; c++) {
      let t = n * c;
      res.innerHTML += `<p> ${n} X ${c} = ${t} </p> `;
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
