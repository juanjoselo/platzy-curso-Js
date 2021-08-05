

function calculaprecio ()
{
    
    const precioentrada = document.getElementById("InputPrice");
    const precio = precioentrada.value;

    const descuentoentrada = document.getElementById("InputDiscount");
    const descuento = descuentoentrada.value;

    var pfinal = (precio * (100-descuento))/100;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + pfinal;

}






