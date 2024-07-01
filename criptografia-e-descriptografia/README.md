# criptografia-e-descriptografia
Projeto do curso da Oracle ONE em parceria com a Alura

## Sobre o projeto
O projeto solicitava criar um criptografador e descriptografador, utilizando JS.
Para desenvolvê-lo, criei uma página HTML, estilizada com CSS, baseando-me no modelo que a Alura disponibilizou no Figma.
Todas as imagens e ícones do projeto foram tiradas de lá.
##Sobre as funcionalidades: 
- Criei um validador de entrada simples, utilizando regras de REGEX, para aceitar somente textos em letras minúsculas e sem acentos;
- Criei uma função para criptografar o texto, com base nas regras sugeridas no projeto. Para isso, utilizei um map, para vincular cada letra à criptografia descrita e no retorno da função, cada instância da letra será substituída pela regra;
- Criei uma função para descriptografar o texto, que faz o processo inverso da função de criptografar, utilizando as mesmas regras
- Extra: Criei um botão para copiar o texto gerado no resultado, assim, o usuário pode copiar o texto criptografado e descriptografá-lo logo em seguida.
- Criei uma função no JS para exibir o texto de resultado no painel do lado direito.

  ## Como utilizar
  O funcionamento do site é bem simples. Basta digitar um texto, criptografado ou não, no campo de texto destacado na página, e logo em seguida, clicar no botão "criptografar" ou "descriptografar"
  Caso o usuário deseje, também poderá copiar o texto gerado, clicando no botão "copiar"
