
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

let faturamentoDistribuidoras = [
    {"SP" : 67836.43},
    {"RJ" : 36678.66},
    {"MG" : 29229.88},
    {"ES" : 27165.48},
    {"Outros" : 19849.53}
]

function percentualRepresentacao( faturamentoDistribuidoras ) {

    let totalFaturamento = 0;
    let percentual;

    for (let index = 0; index < faturamentoDistribuidoras.length; index++) {
        totalFaturamento += Object.values(faturamentoDistribuidoras[index])[0];
    }

    for (let index = 0; index < faturamentoDistribuidoras.length; index++) {
        percentual = (Object.values(faturamentoDistribuidoras[index])[0] / totalFaturamento) * 100;
        console.log(`${Object.keys(faturamentoDistribuidoras[index])[0]} - R$${Object.values(faturamentoDistribuidoras[index])[0].toFixed(2)} - ${percentual.toFixed(2)}%`);
    }

    return percentual;
}

console.log('Percentual de representação do faturamento por estado: ');
percentualRepresentacao(faturamentoDistribuidoras);