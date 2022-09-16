function tabuada() {

    let num = document.getElementById('itab');
    let res = document.getElementById('res');
    let n =num.value;
    let vcalc= document.getElementById('icalc')
    let v2 = vcalc.value;

    /*
    let opA = document.getElementById("isoma").value;
    let opS = document.getElementById("isubt").value;
    let opM = document.getElementById("imult").value;
    let opD = document.getElementById("idivi").value;
    */

    let operador =document.querySelector('input[name=opera]:checked').value
   
    if (!num.value) {
        window.alert('favor colocar um número entre 0 e 10');
    } else {
        
        res.innerHTML = "";
    }
    if (!calc.value) {
        res.innerHTML = " Tabuada Multiplicação";  
        for (let c=0; c<=10;c++ ) {
            let t = n * c
            res.innerHTML += `<p> ${n} X ${c} = ${t} </p> `
        }    

    } else if (operador==="A") {
            res.innerHTML = " Adição ";
            let t = n + v2                     
            res.innerHTML = `<p> O resultado(Soma) é ${t}</p>`
    } else if (operador==="S")  {
            res.innerHTML = "Subtração" ; 
            let t = n - v2;
            res.innerHTML = `<p> O resultado(subtração) é ${t}</p>`
    } if (operador==="M")  {
            res.innerHTML = "Multiplicação";  
            let t = n * v2;
            res.innerHTML = `<p> O resultado(Multiplicação)é ${t}</p>`
                
    } else if (operador==="D") {        
            res.innerHTML = "Divisão";
            let t = n / v2;
            res.innerHTML = `<p> O resultado(divisão) é ${t}</p>`
    } 
}



        //alert(document.querySelector('input[name=opera]:checked').value)*/    }

