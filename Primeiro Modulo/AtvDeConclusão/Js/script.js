function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector(`.resultado`);

    const livros = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const livro = form.querySelector('.livro');
        const autor = form.querySelector('.autor');
        const publicacao = form.querySelector('.publicacao');

        livros.push({
            livro: livro.value,
            autor: autor.value,
            publicacao: publicacao.value
        });
        console.log(livros);

        resultado.innerHTML += `<p> ${livro.value} ${autor.value} ${publicacao.value}</p>`
    }
    form.addEventListener(`submit`, recebeEventoForm);
};
meuEscopo();