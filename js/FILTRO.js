////busca
const input_busca = document.getElementById("input-busca")
const tabela_cadastros = document.getElementById("listCadastro")

input_busca.addEventListener("keyup", () => {
    let expressao = input_busca.value.toLowerCase()
    let linhas = tabela_cadastros.getElementById("tr")

    for(let posicao in linhas){
        if(true === isNaN(posicao)){
            continue;
        }
        let conteudoDaLinha = linhas[posicao].innerHTML.tolowerCase()

        if(true === conteudoDaLinha.includes(expressao)){
            linhas[posicao].style.display = ""
        }else{
            linhas[posicao].style.display = "none"
        }
    }

})