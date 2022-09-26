let num = [5,5,5,6,6,8,9,4]

let m = 25
num.push(m)

num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(15)

if(pos == -1){
    console.log("Valor não encontrado!")
} else {
    console.log(`O valor está na posição ${pos}`)
}
