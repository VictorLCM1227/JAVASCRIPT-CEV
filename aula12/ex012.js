
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 4) {
    console.log('Vai dormir!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora <= 23) {
    console.log('Boa Noite!')
}