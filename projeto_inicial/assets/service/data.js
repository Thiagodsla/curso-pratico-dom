export const removeDataRepetidas = (datas) => {
    const datasUnicas = []
    datas.forEach((data => {
        if (datasUnicas.indexOf(data.dataFormatada) == -1) {
            datasUnicas.push(data.dataFormatada)
        }
    }))
    return datasUnicas
}