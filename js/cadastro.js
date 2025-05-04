class Cadastro{
    constructor(nome,email,cell,produto_servico,endereco,numero,bairro){
        this.nome = nome
        this.email = email
        this.cell = cell
        this.produto_servico = produto_servico
        this.endereco = endereco
        this.numero = numero
        this.bairro = bairro
    }
    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == "" || this[i] == null){
                return false
            }
            return true
        }
    }

}
class Bd {
    constructor(){
        let id = localStorage.getItem("id")
        if(id === null){
            localStorage.setItem("id", 0)
        }
    }
    getProximoId(){
        let  proximoId = localStorage.getItem("id")
        return parseInt(proximoId) + 1 
    }
    gravar(g){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(g))
        localStorage.setItem("id", id)
    }
    carregaListaCadastros(){
        //array de cadastros
        let cadastros = Array()

        let id = localStorage.getItem("id")
        //recuperar todas os cadastros em localStorage
        for(let i = 1; i <= id; i++){
            //recuperar cadastro
            let cadastro = JSON.parse(localStorage.getItem(i))
            //existe a possibilidade de haver indices que foram pulados/removidos
            //nesse caso nós vamos pular esses indeces
            if(cadastro === null){
                continue
            }
            cadastro.id = i
            cadastros.push(cadastro)
        }
        return cadastros
    }
    pesquisar(cadastro){
        let cadastroFiltradas = Array
        cadastroFiltradas = this.carregaListaCadastros()
        console.log(cadastroFiltradas)
        console.log(cadastro)
        cadastroFiltradas.filter(c => c.nome == cadastro.nome)

    }
    remover(id){
        localStorage.removeItem(id)
    }
}
let bd = new Bd()


function cadastroEmpreendedor(){
    let nome = document.getElementById("nome")
    let email = document.getElementById("e-mal")
    let cell = document.getElementById("cell")
    let produto_servico = document.getElementById("produto_serviço")
    let endereco = document.getElementById("endereco")
    let numero = document.getElementById("numero")
    let bairro = document.getElementById("bairro")

    let cadastro = new Cadastro(
        nome.value,
        email.value,
        cell.value,
        produto_servico.value,
        endereco.value,
        numero.value,
        bairro.value
    )
    if(cadastro.validarDados()){
        bd.gravar(cadastro)
        alert("Registro inserido com Sucesso")
    }else{
        alert("ERRO Na Gravação: Verifique os campos de Dados")
    }
   
    
}
function carregaListaCadastros(){
    let cadastros = Array()
    cadastros = bd.carregaListaCadastros()
    //selecionando o elemento tbody da tabela
    let listaCadastros = document.getElementById("listCadastro")

   //pecorrer o array cadastros, listando cada dados de forma dinamica/
   cadastros.forEach(function(g){

    //criando a linha (tr)
    let linha = listaCadastros.insertRow()
    //criar as colunas (td)
    linha.insertCell(0).innerHTML = g.nome
    linha.insertCell(1).innerHTML = g.email
    linha.insertCell(2).innerHTML = g.cell 
    linha.insertCell(3).innerHTML = g.produto_servico
    linha.insertCell(4).innerHTML = g.endereco
    linha.insertCell(5).innerHTML = g.numero
    linha.insertCell(6).innerHTML = g.bairro
    //criar um botao de delete
    let btn = document.createElement("button")
    btn.className = "btn-delete"
    btn.innerHTML = "<i class='fas fa-times'>"
    btn.id = `id_cadastro_${g.id}`
    btn.onclick = function(){
        let id = this.id.replace("id_cadastro_" , "")
        bd.remover(id)
        window.location.reload()
    }
    linha.insertCell(7).append(btn)
   })
}
function pesquisarCadastro(){
    let nome = document.getElementById("nome")
    let email = document.getElementById("e-mal")
    let cell = document.getElementById("cell")
    let produtu_servico = document.getElementById("produto_serviço")
    let endereco = document.getElementById("endereco")
    let numero = document.getElementById("numero")
    let bairro = document.getElementById("bairro")

    let cadastro = new Cadastro(nome, email,cell,produtu_servico,endereco,numero,bairro)
    bd.pesquisar(cadastro)
}

//@media Query
let btn_menu = document.getElementById('btn-menu')
let menu_mobile = document.getElementById('menu')

btn_menu.addEventListener('click', exibirMenu)

function exibirMenu(){
   menu_mobile.classList.toggle('show')

   if(menu_mobile.classList.contains('show')){
       btn_menu.setAttribute('class','fa-solid fa-xmark')
   }else{
        btn_menu.setAttribute('class','fa-solid fa-bars') 
}
}

