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
        localStorage.setItem(id,JSON.stringify(g))
        localStorage.setItem("id", id)
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
