const campoA = document.getElementById("campo-a")
const campoB = document.getElementById("campo-b")
const form = document.getElementById("form-documento")

form.addEventListener("submit",function(){
    if (campoB.value > campoA.value) {
        alert("O numero no campo B é MAIOR que o numero no campo A!")
    } else if(campoB.value == campoA.value) {
        alert("Os dois numeros são iguais!")
    } else {
        alert("O numero do campo B é MENOR que o numero do campo A!")
    }
})