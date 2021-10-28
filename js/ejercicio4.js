let sabor = prompt("¿Qué sabor de helado desea?", "Escriba V para vainilla (15$), C para coco (10$) o CH para chocolate (19$)")
let dinero = prompt("Ingrese aquí el dinero (Se le devolverá el cambio si excede la cantidad).");
let costo;

if (sabor === "V") {
    costo = 15.00;
    if (dinero >= costo) {
        document.write("Aquí tiene su helado de vainilla.<br/>");
    }
    
} else if (sabor === "C") {
    costo = 10.00;
    if (dinero >= costo) {
        document.write("Aquí tiene su helado de coco.<br/>");
    }
} else if (sabor === "CH") {
    costo = 19.00;
    if (dinero >= costo) {
        document.write("Aquí tiene su helado de chocolate.<br/>");
    }
}

    if (dinero < costo) {
        let insuficiente = alert("Usted no tiene dinero suficiente para el helado que ha seleccionado. Recargue la página.")
    }
    let cambio = dinero - costo;
    let cambioConv = cambio.toFixed(2);

    if (dinero >= costo) {
        document.write("Su cambio es de: $", cambioConv,"<br/>");
        document.write("Que disfrute su helado. Vuelva pronto ;)");
    }