function tabuada() {

    let num = document.getElementById('itab');
    let res = document.getElementById('res');
    let n = Number(num.value);
    let op = document.querySelector('input[name="opera"]:checked').value;
    if (!num.value) {
        window.alert('favor colocar um número entre 0 e 10');
    } else {
        
        res.innerHTML = "";

        /*for (let c=0; c<=10;c++ ) {
            let t = n * c;
            res.innerHTML += `<p> ${n} X ${c} = ${t} </p> `

        }*/
        alert(document.querySelector('input[name=opera]:checked').value)
    }

}