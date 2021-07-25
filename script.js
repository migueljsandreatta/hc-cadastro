    let entrada = document.querySelector('#floatingInput');

    let paragrafo = document.querySelector('.mostrar');

    let mostrar = '';

    document.querySelector('.btn').addEventListener('click', function() {
    
      localStorage.chave = entrada.value;

      paragrafo.innerText = `Obrigado ${localStorage.chave} e-mail guardado no localStorage com sucesso`;
    });