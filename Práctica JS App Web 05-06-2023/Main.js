var n1=0, n2=0, n3=0, res="", P = 0, Tipo = "";

function capturan1(){
    n1 = Number.parseFloat(document.getElementById("v1").value);
}

function capturan2(){
    n2 = Number.parseFloat(document.getElementById("v2").value);
} 

function capturan3(){
    n3 = Number.parseFloat(document.getElementById("v3").value);
} 

function Perimetro(){
    P = n1 + n2 + n3;
    res = "El perímetro de " + n1 + "+" + n2 + "+" + n3 + " es: " + P;
    document.getElementById("texto").innerHTML = res
}

function Area(){
    if (n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1){
        var s = (n1 + n2 + n3) / 2;
        var A = Math.sqrt(s * (s - n1) * (s - n2) * (s - n3));
        res = "El área es: " + A;
        document.getElementById("texto").innerHTML = res
    }
    else{
        res = "No se puede calcular";
        document.getElementById("texto").innerHTML = res
    }
}

function TipoT(){
    if (n1 == n2 && n2 == n3 && n1 == n3) {
        Tipo = "El triangulo es equilatero";
    }
    else if (n1 == n2 && n2 != n3 && n1 != n3){
        Tipo = "El triangulo es isóceles";
    }
    else if (n1 != n2 && n2 != n3 && n1 != n3){
        Tipo = "El triangulo es escaleno";
    }
    document.getElementById("texto").innerHTML = Tipo
}