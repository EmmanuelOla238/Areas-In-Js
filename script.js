function triangle() {
    var base = Number(prompt("Enter base value"))
    var height = Number(prompt("Enter height value"))
    var ft = 1/2
    var answer = ft * base * height
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("getResult").innerHTML = converted
}

function square() {
    var a = Number(prompt("Enter length value"))
    var answer = a**2
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("getResult2").innerHTML = converted
}

function quadri() {
    var base = Number(prompt("Enter base value"))
    var height = Number(prompt("Enter height value"))
    var answer = base * height
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("getResult3").innerHTML = converted
}

function Rhombus() {
    var p = Number(prompt("Enter diagonal value"))
    var q = Number(prompt("Enter diagonal value"))
    var answer = p * q / 2
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("getResult4").innerHTML = converted
}

function Trapezium() {
    var a = Number(prompt("Enter base value"))
    var b = Number(prompt("Enter base value"))
    var height = Number(prompt("enter height"))
    var answer = 1/2*(a+b)*height
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("getResult5").innerHTML = converted
}

function Parallelogram() {
    var base = Number(prompt("Enter base"))
    var height = Number(prompt("Enter height"))
    var answer = base * height
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("getResult6").innerHTML = converted
}

function bodyMass() {
    var base = Number(prompt("Enter base"))
    var height = Number(prompt("Enter height"))
    var answer = base * height
    var converted = answer.toFixed(2) + "kg/m²"
    document.getElementById("getResult7").innerHTML = converted
}