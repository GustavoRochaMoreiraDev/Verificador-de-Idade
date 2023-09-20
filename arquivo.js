function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('Verifique os dados e tente novamente')
    }
    else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            gender = 'Homem'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebê-m.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-m.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }

        }

        else if (fSex[1].checked) {
            gender = 'Mulher'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebê-f.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-f.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-f.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${idade} anos`
        res.appendChild(img)

    }

}