let primernumero = prompt("Escriba un número")
let segundonumero = prompt("Escriba otro número")

if(primernumero<segundonumero){
    document.write("El primer número es menor")
}
if(segundonumero<primernumero){
    document.write("El primer número es mayor")
}
if(primernumero===segundonumero){
    document.write("Ambos números son iguales")
}