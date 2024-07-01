document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("texto-entrada");
    const btnCriptografar = document.getElementById("btn-criptografar");
    const btnDescriptografar = document.getElementById("btn-descriptografar");
    const areaResultado = document.getElementById("result-area");

    btnCriptografar.addEventListener("click", function () {
        const texto = textarea.value;
        if (validadorDaEntrada(texto)) {
            const textoCriptografado = criptografarTexto(texto);
            exibirResultado(textoCriptografado);
        } else {
            alert("O texto deve conter apenas letras minúsculas e sem acento.");
        }
    });

    btnDescriptografar.addEventListener("click", function () {
        const texto = textarea.value;
        if (validadorDaEntrada(texto)) {
            const textoDescriptografado = descriptografarTexto(texto);
            exibirResultado(textoDescriptografado);
        } else {
            alert("O texto deve conter apenas letras minúsculas e sem acento.");
        }
    });

    function validadorDaEntrada(texto) {
        const regex = /^[a-z\s.,!?]*$/;
        return regex.test(texto);
    }

    function exibirResultado(texto) {
        areaResultado.innerHTML = `
            <h3 class="titulo-resultado">Resultado</h3>
            <p class="resultado-texto">${texto}</p>
            <button id="btn-copiar">Copiar</button>
        `;

        const btnCopiar = document.getElementById("btn-copiar");
        btnCopiar.addEventListener("click", function () {
            navigator.clipboard.writeText(texto);
            alert("Texto copiado para a área de transferência.");
        });
    }

    function criptografarTexto(texto) {
        const mapaCriptografia = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };

        return texto.split('').map(char => mapaCriptografia[char] || char).join('');
    }

    function descriptografarTexto(texto) {
        const mapaDescriptografia = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        const substitutos = Object.keys(mapaDescriptografia).sort((a, b) => b.length - a.length);

        substitutos.forEach(substituto => {
            texto = texto.split(substituto).join(mapaDescriptografia[substituto]);
        });

        return texto;
    }
});
