function Contar() {
    var num = document.getElementById('ntab')
    var tab = document.getElementById('seltab')

    if (num.value <= 0 || num.value > 10) {
        window.alert("[ERRO] Número invalido! Tente novamente!")

    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
    } 

    }
}