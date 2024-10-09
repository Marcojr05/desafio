let listaAlunos = []

function cadastrarAluno() {

    // Captura dados da página
    let nome = document.getElementById("nome").value
    let dataNasc = document.getElementById("dataNasc").value
    let curso = document.getElementById("curso").value
    // Cria um novo aluno a partir dos dados capturados
    let aluno = { nome: nome, dataNasc: dataNasc, curso: curso }
    // Adiciona aluno na lista
    listaAlunos.push(aluno)
    // Notifica usuário
    console.log(listaAlunos)
    document.getElementById("msg").innerHTML = "<p>Aluno cadastrado com sucesso!</p>"
}

//limpa os inputs
document.getElementById("nome").value = '';
document.getElementById("dataNasc").value = '';
document.getElementById("curso").value = 'Programador Web'; //Resetando para o primeiro curso

function mostrarAlunos() {
    //Limpa a tabela antes de mostrar os alunos
    document.getElementById("card").innerHTML = ""

    // Percorrer a lista de alunos
    listaAlunos.forEach((aluno, index) => {
        // Cria uma linha na tabela pra cada aluno
        document.getElementById("card").innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${aluno.nome}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${aluno.dataNasc}</h6>
            <p class="card-text">${aluno.curso}</p>
            <button class="btn btn-danger" onclick="excluirAluno(${index})"><i class="fa-regular fa-trash-alt"></i>Excluir</button>
            <button class="btn btn-warning" onclick="editarAluno(${index})"><i class="fa-regular fa-edit"></i>Editar</button>
        </div>
    </div>
        `
    })
}

function excluirAluno(index) {
    listaAlunos.splice(index,1)
    mostrarAlunos()
}

function editarAluno(index){
    alunoEditIndex = index
    const aluno = listaAlunos[index]

    document.getElementById("nome").value = aluno.nome;
    document.getElementById("dataNasc").value = aluno.dataNasc;
    document.getElementById("curso").value = aluno.curso;
    
    document.getElementById("msg").innerHTML = "<p>Edite as informações e clique e, 'Cadastrar' para salvar.</p>"
    
}

function limparCampos(){
    document.getElementById("nome").value= "";
    document.getElementById("dataNasc").value("dataNasc").value= "";
    document.getElementById("curso").selectedIndex = 0;
}