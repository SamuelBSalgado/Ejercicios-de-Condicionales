var primernumero = parseInt(prompt("Introduce un número"));
var segundonumero = parseInt(prompt("Introduce otro número"));
var resultado = primernumero + segundonumero

document.write(resultado)

if(resultado<10){
    alert("El número es menor a 10")
}
if(resultado>10){
    alert("El número es mayor a 10")
}
if(resultado===10){
    alert("El número es igual a 10")
}