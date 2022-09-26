function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value) // Para que a condiçaõ a baixo funcione, é necessário converter o valor de String para Número.
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert("Passo invalido! Considerando passo 1!")
            p = 1
        }

        if (i < f) { // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
            
        } else { // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
    }   res.innerHTML += `\u{1F30D}`

    
}
