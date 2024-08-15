function calcularJuros(){
    var inicial = Number(document.getElementById("inicial").value);
    var taxaJuros = Number(document.getElementById("taxaJuros").value);
    var tempo = Number(document.getElementById("tempo").value);
    var result = document.getElementById("resultado");

    var calcular = inicial * (1 + taxaJuros / 100) ** tempo

    var resultadoFormatado = calcular.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    result.innerHTML = `O resultado é R$ ${resultadoFormatado}`;
}