function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/teen-boy.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                // Idoso
                setAttribute('src', 'imagens/velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                //jovem
                setAttribute('src', 'imagens/ten-girl.png')
            } else if (idade < 50) {
                //Adulto
                setAttribute('src', 'imagens/adulta.png')
            } else {
                // Idoso
                setAttribute('src', 'imagens/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}