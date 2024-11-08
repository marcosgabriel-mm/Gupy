import fs from 'fs';

async function lerDados() {
    try {
        const data = fs.readFileSync('faturamento/dados.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }
}

function lowValue(values) {

    let lowValue = values[0].valor;
    let objeto;

    for (let index = 1; index < values.length; index++) {
        if (values[index].valor < lowValue) {
            if (values[index].valor === 0) { continue; }
            lowValue = values[index].valor;
            objeto = values[index];
        }
    }

    return objeto;
}

function bestValue(values) {

    let bestValue = values[0].valor;
    let objeto;

    for (let index = 1; index < values.length; index++) {
        if (values[index].valor > bestValue) {
            bestValue = values[index].valor;
            objeto = values[index];
        }
    }

    return objeto;
}

function meanValue(values) {

    let sum = 0;
    let meanItens = 0;

    for (let index = 0; index < values.length; index++) {
        if (values[index].valor === 0) { continue; }
        meanItens++;
        sum += values[index].valor;
    }

    return sum / meanItens;
}

const dados = await lerDados();
console.log('Menor valor de faturamento:', lowValue(dados));
console.log('Maior valor de faturamento:', bestValue(dados));
console.log('Média de faturamento:', meanValue(dados));