# 3️⃣ Escrevendo as classes de um Jogo

**O Que foi utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:
Uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

Método chamado atacar que atende os seguientes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final exibe uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

## ➕Feature
- adição de um gerador de numero aleatório para determinar quantas vezes o herói acertou o golpe.

- ## Saída

Ao final exibe uma mensagem:

- "o {tipo} atacou usando {ataque} {numero randomico} vezes"
  ex: mago atacou usando magia 5 vezes.
  guerreiro atacou usando espada 9 vezes.
