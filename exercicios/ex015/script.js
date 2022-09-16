function tabuada() {

    let num = document.getElementById('itab');
    let res = document.getElementById('res');
    let n =num.value;
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


    if (operador==="A") {
        res.innerHTML = " Adição ";
        for (let c=0; c<=10;c++ ) {
            let t = n + c
            res.innerHTML += `<p> ${n} + ${c} = ${t} </p> `
        } 
        
    }
    if (operador==="S")  {
        res.innerHTML = "Subtração" ; 
        for (let c=0; c<=10;c++ ) {
            let t = n - c
            res.innerHTML += `<p> ${n} - ${c} = ${t} </p> `
        }      
    }
    if (operador==="M")  {
        res.innerHTML = "Multiplicação";  
        for (let c=0; c<=10;c++ ) {
            let t = n * c
            res.innerHTML += `<p> ${n} X ${c} = ${t} </p> `
        }    
          
    }
    if (operador==="D") {        
           res.innerHTML = "Divisão";
           for (let c=0; c<=10;c++ ) {
            let t = n / c
            res.innerHTML += `<p> ${n} / ${c} = ${t} </p> `
        }         
    }
        //alert(document.querySelector('input[name=opera]:checked').value)*/    }
}
