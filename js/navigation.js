 //Seleciona todos os corpos do menu
const listarItens = document.querySelectorAll(".corpo__listagem");

// Nessa parte o cria uma lista com os corpos selecionados e adiciona o evento "CLICK" em todos eles, assim não precisa ficar criando unitariamente os elementos kkkk
listarItens.forEach((rastreio) => {
    rastreio.addEventListener("click", () => {

        removerAtivoCorpo();

        const pegarIdMenu = buscarID(rastreio);
        const idConcatenado = concatenarID(pegarIdMenu);

        adicionarAtivoCorpo(idConcatenado);

        removerAbertoNav();

        adicionarAbertoNav(pegarIdMenu);
    })
});


function adicionarAbertoNav(pegarIdMenu) {
    const abrirNav = document.getElementById(pegarIdMenu);
    abrirNav.classList.add('aberta');
}

function removerAbertoNav() {
    const selecionarNavParaRemover = document.querySelector(".aberta");
    selecionarNavParaRemover.classList.remove("aberta");
}

//Nessa parte o vai ser selecionado o elemento clicado e inserir a classe "ATIVO"
function adicionarAtivoCorpo(idConcatenado) {
    const abrirCorpo = document.getElementById(idConcatenado);
    abrirCorpo.classList.add("ativo");
}

//Nessa parte concatena o ID(porque tem o mesmo nome) com o "-corpo" porque escolhi esse nome
function concatenarID(pegarIdMenu) {
    return pegarIdMenu + '-corpo';
}

//Nessa parte ele vai buscar o ID do botão selecionado
function buscarID(rastreio) {
    return rastreio.attributes.id.value;
}

//Seleciona todos os corpos com a classe "ATIVO" e depois remove essa classe
function removerAtivoCorpo() {
    const selecionarMenuParaRemover = document.querySelector(".ativo");
    selecionarMenuParaRemover.classList.remove("ativo");
}

//chatgpt para correção (EM ANALISE)

// const listarItens = document.querySelectorAll(".corpo__listagem");

// listarItens.forEach((rastreio) => {
//     rastreio.addEventListener("click", () => {
//         const selecionarMenuParaRemover = document.querySelector(".corpo__html.ativo");
//         if (selecionarMenuParaRemover) {
//             selecionarMenuParaRemover.classList.remove("ativo");
//         }

//         const pegarIdMenu = rastreio.id;
//         const idConcatenado = pegarIdMenu + '-corpo';
//         const abrirCorpo = document.getElementById(idConcatenado);

//         if (abrirCorpo) {
//             abrirCorpo.classList.add("ativo");
//         }

//         const selecionarNavParaRemover = document.querySelector(".corpo__listagem.aberta");
//         if (selecionarNavParaRemover) {
//             selecionarNavParaRemover.classList.remove("aberta");
//         }
//         rastreio.classList.add('aberta');
//     });
// });
