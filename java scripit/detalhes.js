const url = new URLSearchParams(window.location.search);
const id = url.get("produtoId")
const telaCarregamento = document.getElementById("tela-carregamento")

const main = document.getElementById("main");
const buscarProduto = async () => {
    telaCarregamento.style.display = "flex";
    const promisse = await fetch (`https://tech4japa.fly.dev/produtos/${id}`);
    const produto = await promisse.json();
    telaCarregamento.style.display = "none"
    mostrarProduto(produto)
}

buscarProduto();
const mostrarProduto = (produto) => {
    const divProduto = document.createElement("div");
    divProduto.className = "card"
    const img = document.createElement("img");
    img.src = produto.imagem 
    const divTextos = document.createElement("div");
    divTextos.className = "textos"
    const h2 = document.createElement("h2");
    h2.innerText = produto.produto;
    const pDescricao = document.createElement("p");
    pDescricao.innerText = produto.descricao;
    const divTitulo = document.createElement('div');
    divTitulo.className = 'titulo';
    divTitulo.appendChild(h2);
    divTitulo.appendChild(pDescricao);
    const divBotao = document.createElement("div");
    divBotao.className = "botao"
    const botaoComprar = document.createElement("button");
    botaoComprar.innerText = "Comprar"
    botaoComprar.className = 'comprar'
    const form = document.createElement("form");
    form.id = "form"
    const pForm = document.createElement("p");
    pForm.innerText = "Para receber promoções desse produto:"
    const inputEmail = document.createElement("input");
    inputEmail.id = "email"
    inputEmail.placeholder = "E-mail"
    const divTermos = document.createElement("div");
    divTermos.className = "termos"
    const inputCheckbox = document.createElement("input");
    inputCheckbox.id = "checkbox"
    inputCheckbox.type = "checkbox"
    const label = document.createElement("label");
    label.innerText = "Li e aceito os termos de uso"
    const buttonEnviar = document.createElement("button");
    buttonEnviar.innerText = "Enviar"
    buttonEnviar.type = "submit"

    form.appendChild(pForm);
    form.appendChild(inputEmail);
    divTermos.appendChild(inputCheckbox);
    divTermos.appendChild(label);
    form.appendChild(divTermos);
    form.appendChild(buttonEnviar);
    divTextos.appendChild(divTitulo);
    divBotao.appendChild(botaoComprar);
    divTextos.appendChild(form);
    divTextos.appendChild(divBotao);
    divProduto.appendChild(img);
    divProduto.appendChild(divTextos);
    main.appendChild(divProduto);


    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        verificarForm(inputEmail.id, inputCheckbox.id);
    });

}

