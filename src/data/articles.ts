export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  content: string;
  category: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    slug: 'arquitetura-software',
    title: 'Arquitetura de Software',
    description: 'Conceitos fundamentais sobre arquitetura, padrões de design e boas práticas de engenharia de software.',
    icon: '🏗️'
  }
];

export const articles: Article[] = [
  {
    slug: 'abstract-factory-pattern',
    title: 'Abstract Factory - O Padrão da Fábrica de Fábricas',
    description: 'Entenda o padrão Abstract Factory através de uma analogia simples com uma montadora de brinquedos LEGO. Aprenda como criar famílias de objetos relacionados sem misturar temas.',
    date: '06 Out 2025',
    readTime: '8 min',
    tags: ['Design Patterns', 'Programação', 'Arquitetura'],
    category: 'arquitetura-software',
    content: `
# Abstract Factory

Imagine que você é o dono de uma montadora de brinquedos, como a LEGO.

## O Problema que Você Enfrenta

Você tem diferentes "temas" de LEGO: **LEGO Star Wars**, **LEGO City (Cidade)** e **LEGO Harry Potter**.

Dentro de cada tema, você tem peças que se relacionam:

- **Tema Star Wars:** tem o boneco do Luke Skywalker, a nave X-Wing e o sabre de luz.
- **Tema Cidade:** tem o boneco do policial, o carro de polícia e as algemas.
- **Tema Harry Potter:** tem o boneco do Harry, o castelo de Hogwarts e a varinha mágica.

O grande problema é: você **NUNCA** pode misturar as coisas! Um cliente que compra um kit de Star Wars ficaria furioso se, no meio das peças da X-Wing, ele encontrasse a varinha mágica do Harry Potter. As peças de um tema só fazem sentido juntas.

Além disso, no ano que vem, você quer lançar o **LEGO Senhor dos Anéis**. Você precisa de uma forma de adicionar esse novo tema sem ter que redesenhar toda a sua linha de produção.

![Diagrama do Padrão Abstract Factory](/abstract.png)

## A Solução: O "Abstract Factory" (A Fábrica de Fábricas)

Para resolver isso, você cria um sistema genial.

### 1. O Chefe de Design (A Interface "Fábrica Abstrata")

Você contrata um "Chefe de Design". Ele não constrói nenhum brinquedo. A única função dele é criar as **regras** para todas as fábricas de temas. Ele diz:

*"Toda fábrica de temas de LEGO que existir **PRECISA** ser capaz de fazer três coisas:*

1. *Criar um Personagem*
2. *Criar um Veículo/Construção*
3. *Criar um Acessório"*

Essa lista de regras é a nossa **Fábrica Abstrata**. É um contrato, um manual de instruções para criar outras fábricas.

### 2. Os Gerentes de Tema (As Fábricas Concretas)

Agora, para cada tema, você contrata um "Gerente" que segue as regras do Chefe de Design:

- **Gerente do Tema Star Wars:** Quando você pede a ele "Crie um Personagem", ele te entrega um **Luke Skywalker**. Quando pede "Crie um Veículo", ele te entrega uma **X-Wing**.
- **Gerente do Tema Cidade:** Quando você pede a ele "Crie um Personagem", ele te entrega um **Policial**. Quando pede "Crie um Acessório", ele te entrega as **Algemas**.
- **Gerente do Tema Harry Potter:** Quando você pede a ele "Crie um Personagem", ele te entrega um **Harry Potter**.

Cada um desses gerentes é uma **Fábrica Concreta**. Eles sabem exatamente como construir as peças do seu tema específico, garantindo que tudo combine perfeitamente.

### 3. Você, o Cliente

Agora, imagine que você quer montar um kit de Star Wars. Você não vai até a prateleira e pega "um boneco Luke Skywalker" e "uma nave X-Wing". Isso seria muito trabalhoso e você poderia se confundir.

Em vez disso, você simplesmente vai até o **"Gerente do Tema Star Wars"** (a nossa fábrica) e diz:

- "Me dê um personagem."
- "Me dê um veículo."
- "Me dê um acessório."

Você não precisa saber os detalhes de como ele faz isso. Você só precisa confiar que, como está falando com o gerente de Star Wars, **tudo o que ele te entregar será do universo Star Wars e irá combinar**.

---

## Resumo da Analogia

- **Fábrica Abstrata (O Chefe):** É o manual de regras que diz o que **toda família de produtos** deve ter (ex: todo tema LEGO precisa ter personagem, veículo e acessório).
- **Fábricas Concretas (Os Gerentes de Tema):** São as fábricas especialistas que sabem criar os produtos de **um tema específico** (a fábrica de Star Wars, a de Cidade, etc.).
- **Produtos (As Peças de LEGO):** São os objetos finais que você recebe (Luke Skywalker, carro de polícia, etc.).
- **Cliente (Você):** Você escolhe qual **Gerente de Tema** quer usar e pede os produtos a ele, sem se preocupar com os detalhes. O resultado é sempre um conjunto de peças que combinam.

**Principal Vantagem:** Se amanhã você quiser criar o tema **LEGO Senhor dos Anéis**, você não precisa mudar nada no seu sistema. Você só precisa contratar um novo "Gerente do Tema Senhor dos Anéis" que siga as mesmas regras do "Chefe de Design" e saiba criar o Frodo, a Sociedade do Anel e o Um Anel.
    `
  },
  {
    slug: 'levantamento-analise-requisitos',
    title: 'Levantamento e Análise de Requisitos',
    description: 'Do Sonho ao Código: O Guia Definitivo Sobre Requisitos de Software. Aprenda o ciclo completo desde a ideia inicial até uma lista de tarefas pronta para ser codificada.',
    date: '09 Out 2025',
    readTime: '12 min',
    tags: ['Engenharia de Software', 'Requisitos', 'Gestão de Projetos'],
    category: 'arquitetura-software',
    content: `
# Do Sonho ao Código: O Guia Definitivo Sobre Requisitos de Software

Todo desenvolvedor, seja iniciante ou experiente, já sentiu o medo de passar meses construindo um software para, no final, descobrir que não era bem aquilo que o cliente queria. Esse problema quase sempre tem a mesma origem: uma falha na compreensão dos requisitos.

Entender os requisitos é como ter a planta de uma casa antes de começar a construir. Sem ela, você está apenas empilhando tijolos e torcendo pelo melhor.

Neste guia, vamos desmistificar o ciclo de vida dos requisitos de uma forma simples, clara e com analogias, mostrando o caminho desde a ideia inicial até uma lista de tarefas pronta para ser codificada.

## A Grande Etapa: Levantamento e Análise de Requisitos

Antes de pensar em código, banco de dados ou design, precisamos passar por uma fase de investigação. O objetivo é responder a uma única pergunta em diferentes níveis de detalhe: **"O que vamos construir?"**. Essa fase se divide em três passos fundamentais.

### Passo 1: Requisitos de Negócio (O "Porquê")

Tudo começa com o "porquê". Antes de qualquer funcionalidade, precisamos entender o objetivo maior, o valor que o software trará para o mundo.

**Analogia:** Pense nos futuros donos da casa. Eles não dizem ao arquiteto "eu quero uma viga de aço de 12 polegadas". Eles dizem: "Por que queremos a casa?".

- "Precisamos de mais espaço para a nossa família que está crescendo."
- "Queremos um lugar para receber amigos e socializar."
- "Nosso objetivo é ter um lar seguro e economizar energia."

No software, as perguntas-chave para descobrir os **Requisitos de Negócio** são:

- Qual problema este software resolve?
- Quem é o público-alvo?
- Como saberemos que este projeto foi um sucesso? (Ex: aumentar as vendas, reduzir custos, etc.)

O resultado deste passo é a **visão clara do projeto**.

### Passo 2: Requisitos de Usuário (O "O Quê" do Usuário)

Com o "porquê" definido, descemos um nível e focamos em quem vai usar o sistema e o que essa pessoa precisa fazer. A ferramenta mais poderosa para isso são as **Histórias de Usuário** (User Stories).

**Analogia:** Os donos da casa agora descrevem as ações que realizarão.

*"Como um anfitrião, eu quero uma cozinha aberta integrada à sala, para que eu possa cozinhar e conversar com meus convidados ao mesmo tempo."*

O formato é sempre: **Como um(a) <tipo de usuário>, eu quero <fazer uma ação>, para que <eu possa alcançar um objetivo>**.

Este formato nos força a pensar na funcionalidade (cozinha aberta) sob a perspectiva de quem a usa (anfitrião) e a justificar sua existência (para conversar com os convidados).

### Passo 3: Requisitos de Sistema (A Especificação Técnica do "O Quê")

Agora, traduzimos os desejos do usuário em instruções claras para os construtores (desenvolvedores). É aqui que detalhamos o comportamento do sistema. Eles se dividem em dois tipos:

- **Funcionais:** O que o sistema efetivamente faz.
- **Não Funcionais:** Como o sistema se comporta (suas qualidades).

**Analogia:** O arquiteto pega a história da "cozinha aberta" e a transforma em especificações na planta.

- **Requisito Funcional:** O sistema de exaustão da cozinha deve ser capaz de renovar o ar a cada 5 minutos.
- **Requisito Não Funcional:** O nível de ruído do exaustor não deve ultrapassar 50 decibéis para não atrapalhar a conversa (performance/usabilidade).

## Atividade Essencial: Priorização (O Que Vem Primeiro?)

Você terminou os três passos e agora tem uma lista gigante de requisitos. E agora? Construímos tudo de uma vez? Não. Precisamos de uma ferramenta para organizar essa lista: a **priorização**.

Essa não é uma nova fase, mas sim uma atividade crucial que acontece durante todo o levantamento de requisitos. A técnica mais famosa para isso é a **MoSCoW**.

**Analogia:** É como fazer uma lista de compras. Você lista tudo que quer (leite, ovos, sorvete, champanhe), mas depois olha a carteira e a necessidade, e decide o que é essencial para aquela semana.

A **MoSCoW** classifica cada requisito em quatro categorias:

### 🏆 M - Must Have (Essencial)
Sem isso, o produto não tem valor. É o coração do sistema. Se não tiver, o lançamento não faz sentido. (Ex: Leite e ovos na lista de compras).

### 👍 S - Should Have (Deveria Ter)
Importante, mas não vital. O produto funciona sem, mas a experiência fica pobre ou incompleta. (Ex: O sorvete para a sobremesa).

### 🤔 C - Could Have (Poderia Ter)
Desejável, mas com baixo impacto se não for feito. É o "perfume". (Ex: Aquela marca importada de azeite).

### ❌ W - Won't Have (Não Terá... por agora)
Funcionalidades que ficam explicitamente para o futuro, para garantir o foco no que é mais importante. (Ex: O champanhe pode ficar para uma ocasião especial).

## O Ciclo em Ação

Na prática, o fluxo é contínuo:

1. Você identifica uma **História de Usuário** (Ex: "Exportar plano alimentar para PDF").
2. Imediatamente, você a classifica usando **MoSCoW** (Ex: O cliente diz que é importante, mas não vital para o primeiro dia, então é um **Should Have**).
3. A história entra na sua lista de tarefas (**backlog**) já priorizada.

Ao final da fase de requisitos, você не tem apenas uma lista de desejos, mas um **plano de ação priorizado**, pronto para ser desenhado (fase de Design) e, finalmente, codificado.

---

## Conclusão

Entender este ciclo é o que diferencia a construção de um software bem-sucedido de um projeto destinado ao fracasso. Foque no "porquê", escute o usuário, detalhe o comportamento e, acima de tudo, **priorize o que gera mais valor**.

Lembre-se: requisitos não são apenas documentos burocráticos. Eles são a ponte entre o sonho do cliente e o código que você vai escrever. Construa essa ponte com cuidado, e o sucesso do projeto será uma consequência natural.
    `
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(article => article.category === categorySlug);
}