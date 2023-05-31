var n1 = Number.parseInt(n1), random, clicks = 0

function Nrandom(max) {
    return random = Math.floor(Math.random() * 100)
}

console.log(Nrandom(100))

function Crandom(params) {
    n1 = prompt("Ingresa el número")
    clicks++
    if (n1 == random) {
        alert("Has acertado! El número es: " + random )
        alert(document.getElementById("Number").innerHTML = "Lo lograste a los " + clicks + " intentos")
    } else {
        if (n1 > random) {
            alert("Ingresa un número más pequeño")
        } else {
            alert("Ingresa un número más grande")
        }
    }
}
