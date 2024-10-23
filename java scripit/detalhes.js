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
    divProduto.className = "produtos2"
    const img = document.createElement("img");
    img.src = produto.imagem 
    img.id = "foto-produto"
    const divTextos = document.createElement("div");
    divTextos.className = "textos"
    const h2 = document.createElement("h2");
    h2.id = "h2-maior"
    h2.innerText = produto.produto;
    const pDescricao = document.createElement("p");
    pDescricao.innerText = produto.descricao
    const divBotao = document.createElement("div");
    divBotao.className = "botao"
    const botaoComprar = document.createElement("button");
    botaoComprar.id = "comprar"
    botaoComprar.innerText = "Comprar"
    const form = document.createElement("form");
    const pForm = document.createElement("p");
    pForm.innerText = "Para receber promoções desse produto:"
    const inputEmail = document.createElement("input");
    inputEmail.id = "email"
    inputEmail.placeholder = "E-mail"
    const divTermos = document.createElement("div");
    divTermos.className = "termos"
    const inputCheckbox = document.createElement("input");
    inputCheckbox.id = "Tbox"
    inputCheckbox.type = "checkbox"
    const label = document.createElement("label");
    label.innerText = "Li e aceito os termos de uso"
    const buttonEnviar = document.createElement("button");
    buttonEnviar.id = "Enviar"
    buttonEnviar.innerText = "Enviar"
    buttonEnviar.type = "submit"

    form.appendChild(pForm);
    form.appendChild(inputEmail);
    divTermos.appendChild(inputCheckbox);
    divTermos.appendChild(label);
    form.appendChild(divTermos);
    form.appendChild(buttonEnviar);
    divTextos.appendChild(h2);
    divTextos.appendChild(pDescricao);
    divBotao.appendChild(botaoComprar);
    divTextos.appendChild(divBotao);
    divTextos.appendChild(form);
    divProduto.appendChild(img);
    divProduto.appendChild(divTextos);
    main.appendChild(divProduto);
















//     <div class="produtos2" id="sashimi">
//     <img id="foto-produto" src="img/hot crispy.avif" alt="">
//     <div class="textos">
//         <h2 id="h2-maior"></h2>
//         <p> 8 Rolls De Salmão, Cream Cheese E Arroz Na Farinha Panko E Crispy De Alho Poró</p>
//         <div class="botao">
//             <button id="comprar">Comprar</button>
//         </div>
//         <form action="">
//             <p>Para receber promoções deste produto:</p>
//             <input type="e-mail" placeholder="e-mail" id="email">
//             <div class="termos">
//                 <input id="cbox" type="checkbox">
//                 <label for="cbox">Li e aceito os termos de uso </label>
//             </div>
//             <button onclick="alert('E-mail cadastrado com sucesso!')" id="Enviar">Enviar</button>
//         </form>
//     </div>
// </div>
}