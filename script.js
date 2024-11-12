function calcularIMC() {
    let name = document.querySelector("#name").value;
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value); // Convertendo altura para metros

    let imc = peso / (altura * altura);

    document.querySelector("#nome").innerHTML = name;
    document.querySelector("#re").innerHTML = imc.toFixed(2); // Ajustando para duas casas decimais
    
}