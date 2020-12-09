function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`Erro. Insira uma data válida`)
    } else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','menino.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src','jovemh.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homem.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src','menina.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src','jovemm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','mulher.png')
            } else {
                img.setAttribute('src','idosa.png')
                //idoso
            }
            
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 

}