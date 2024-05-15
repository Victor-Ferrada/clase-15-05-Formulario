function sumar(){
    //todo lo que tiene un input es un texto
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let resultado=num1+num2
    document.getElementById("resultado").innerText=resultado
}