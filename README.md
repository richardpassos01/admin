# Projeto v1.0.0

### Objetivo

Com nodejs, realizar consulta em api externa e tratar os dados do retorno com as seguintes especificações:

* Mostrar todos os usuários que no endereço contem a palavra ```suite```
* Os websites de todos os usuários
* O Nome, email e a empresa em que trabalha (em ordem alfabética).

### Iniciando o projeto

Pode rodar o projeto digitando `$ node server.js` no terminal ou criando o debug em sua IDE (exemplo do Debug do vscode na pasta .vscode)

## Próximos passos

Foi criado o código para iniciar o servidor, configurar a aplicação, consultar a api e tratar o retorno.

Em sua segunda versão, o projeto será hospedado em uma maquina virtual, será utilizado o docker para garantir a disponibilidade da aplicação, elasticsearch para persistir os logs (esta no console.log na v1) ou redis, para fazer o uso de cache/log.

Tambem não foi implementado na V1 ambiente de teste.

Odata e outros recursos serão pensados para uma continuação possivel do projeto. 

