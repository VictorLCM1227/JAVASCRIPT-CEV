
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'circulos/manha-circulo.png'
        document.body.style.background = '#E1C5BA'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'circulos/tarde-circulo.png'
        document.body.style.background = '#466D62'
    } else {
        //BOA NOITE
        img.src = 'circulos/noite-circulo.png'
        document.body.style.background = '#010101'
    }
}
