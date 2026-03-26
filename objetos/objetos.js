const aluno = {
nome: "Yara",
idade: 16,
curso: "desenvolvimento de sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.maricula = "2025A"; //adicionar
aluno.idade = 18; //alterar

delete aluno.curso; //remover

console.log(aluno);
