function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const botaoFiltrar = document.querySelector('.filtrar');
    const livros = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const livro = form.querySelector('.livro');
        const autor = form.querySelector('.autor');
        const publicacao = form.querySelector('.publicacao');

        if (!livro.value || !autor.value || !publicacao.value) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        livros.push({
            livro: livro.value,
            autor: autor.value,
            publicacao: Number(publicacao.value),
        });

        console.log(livros);
        mostrarLivros(livros);

        livro.value = '';
        autor.value = '';
        publicacao.value = '';
    }

    function mostrarLivros(lista) {
        resultado.innerHTML = '';
        lista.forEach(livro => {
            resultado.innerHTML += `<p>${livro.livro} - ${livro.autor} - ${livro.publicacao}</p>`;
        });
    }

    function filtrarLivrosDepoisDe2010() {
        const filtrados = livros.filter(livro => livro.publicacao > 2010);
        mostrarLivros(filtrados);
    }

    form.addEventListener('submit', recebeEventoForm);
    botaoFiltrar.addEventListener('click', filtrarLivrosDepoisDe2010);
}

meuEscopo();