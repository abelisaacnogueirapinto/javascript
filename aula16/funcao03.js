/*/let v = function(x,y) { // variavel recebe funçao
    return x*y
}
console.log (v(7,7))*/
/*var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

console.log(fatorial(5));*/
function foo(i) {
    if (i < 0)
       return;
    window.document.writeln('begin:' + i);
    foo(i - 1);
    window.document.writeln('end:' + i);
 }
 foo(3);