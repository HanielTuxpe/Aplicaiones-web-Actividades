var dolar = 0, Cantidad = 0, Total = 0, Txt = "";

function ValorD() {
    dolar = document.getElementById("Val").value;    
}

function CantidadC() {
    Cantidad = document.getElementById("Cant").value;
}

function ConPeso() {
    Total = dolar * Cantidad;
    Txt = "El total en pesos mexicanos es: " + Total + " MXN";
    document.getElementById("TOTAL").innerHTML = Txt;
        document.getElementById("Val").value = "";
    document.getElementById("Cant").value = "";
}

function ConDolar() {
    Total = Cantidad / dolar;
    Txt = "El total en dolares es: " + Total + " USD";
    document.getElementById("TOTAL").innerHTML = Txt;
    document.getElementById("Val").value = "";
    document.getElementById("Cant").value = "";
}