# O Rifas no front

## Sumário
- [O que é?](#o-que-é)
- [Como usar?](#como-usar)
- [Tecnologias](#tecnologias)
- [Autores](#autores)

## O que é?
O Rifas no front é um cliente web para o [Rifas no back](https://github.com/MateusSantosMeuBem/o_rifas_back_end) que é uma API REST para números de uma rifa.
No cliente web é possível ver os números disponíveis, selecionar os números desejados e entrar em contato diretamente com o vendendor com os números e pix em mãos.

## Como usar?
Para usar o cliente web é necessário ter o [Rifas no back](https://github.com/MateusSantosMeuBem/o_rifas_back_end) rodando localmente ou em um servidor externo.
Após isso, basta clonar o repositório e rodar o comando `npm install` para instalar as dependências e `npm run dev` para iniciar o servidor localmente ou fazer deploy em um serviço externo, como o [Vercel](https://vercel.com/).

## Api do back
Para configurar a api do back, basta alterar a variável `backUrl` na função `fetchSeller` no arquivo `src/services/RaffleBodyServices.ts` para apontar para o endereço da sua api do back. (Em breve será possível alterar essa variável por um arquivo de configuração)

## Tecnologias
- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)

## Autores
- [Elian Batista](https://github.com/Elian-beep)
- [Mateus Santos](https://github.com/MateusSantosMeuBem)