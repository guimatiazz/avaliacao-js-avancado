const listaProdutos = document.getElementById("produtos");
const telaCarregamento = document.getElementById("tela-carregamento");
const produtos = [];

const pegarProdutos = async () => {
    telaCarregamento.style.display = "flex";
    const promise = await fetch("https://tech4japa.fly.dev/produtos");
    const todosProdutos = await promise.json()
    const meusProdutos = todosProdutos.filter(produto => produto.restaurante == "JutsuJapa")

    meusProdutos.forEach(produto => {
        produtos.push(produto)
    });

    definirProdutos();
}

pegarProdutos()
const definirProdutos = async () => {
    telaCarregamento.style.display = "none";
    const novaLista = await Promise.all(produtos.map(async (produtos) => {
        const promise = await fetch(`https://tech4japa.fly.dev/produtos/${produtos.id}`);
        const todosProdutos = await promise.json()
        return todosProdutos;
    } ))
    novaLista.forEach(produto => {
        mostrarProdutos(produto)
    })

}

const mostrarProdutos = (produto) => {
    /* <div class="card">
<a href="detalhes.html">
    <img src="img/hot crispy.avif" alt="peça 1">
    <h2>HOT CRISPY (8 UNIDADES)</h2>
    <p>8 HOT CRISPY</p>
</a> 
</div> */

const div = document.createElement('div');
div.className = "card";
 const a = document.createElement("a");
a.href = `./detalhes.html?produtoId=${produto.id}`;
const img = document.createElement("img");
img.src = `${produto.imagem}`;
const h2 = document.createElement("h2");
h2.innerText = `${produto.produto}`;

a.appendChild(img);
a.appendChild(h2);
div.appendChild(a);
listaProdutos.appendChild(div)
}






/* <div class="card">
    <a href="detalhes.html">
        <img src="img/hot crispy.avif" alt="peça 1">
        <h2>HOT CRISPY (8 UNIDADES)</h2>
        <p>8 HOT CRISPY</p>
    </a> 
</div> */