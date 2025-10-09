export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  content: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  articles: Article[];
}

export const themes: Theme[] = [
  {
    id: 'arquitetura-software',
    name: 'Arquitetura de Software',
    description: 'Conceitos fundamentais sobre arquitetura, padrões de design e boas práticas de engenharia de software',
    icon: '🏗️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    articles: [
      {
        slug: 'levantamento-analise-requisitos',
        title: 'Levantamento e Análise de Requisitos',
        description: 'Do Sonho ao Código: O Guia Definitivo Sobre Requisitos de Software. Aprenda o ciclo completo desde a ideia inicial até uma lista de tarefas pronta para ser codificada.',
        date: '09 Out 2025',
        readTime: '12 min',
        tags: ['Engenharia de Software', 'Requisitos', 'Gestão de Projetos'],
        image: '/requisitos.png',
        content: `
# Do Sonho ao Código: O Guia Definitivo Sobre Requisitos de Software

Todo desenvolvedor, seja iniciante ou experiente, já sentiu o medo de passar meses construindo um software para, no final, descobrir que não era bem aquilo que o cliente queria. Esse problema quase sempre tem a mesma origem: uma falha na compreensão dos requisitos.

Entender os requisitos é como ter a planta de uma casa antes de começar a construir. Sem ela, você está apenas empilhando tijolos e torcendo pelo melhor.

Neste guia, vamos desmistificar o ciclo de vida dos requisitos de uma forma simples, clara e com analogias, mostrando o caminho desde a ideia inicial até uma lista de tarefas pronta para ser codificada.

![Diagrama do Processo de Requisitos](/requisitos.png)

## A Grande Etapa: Levantamento e Análise de Requisitos

Antes de pensar em código, banco de dados ou design, precisamos passar por uma fase de investigação. O objetivo é responder a uma única pergunta em diferentes níveis de detalhe: **&ldquo;O que vamos construir?&rdquo;**. Essa fase se divide em três passos fundamentais.

### Passo 1: Requisitos de Negócio (O &ldquo;Porquê&rdquo;)

Tudo começa com o &ldquo;porquê&rdquo;. Antes de qualquer funcionalidade, precisamos entender o objetivo maior, o valor que o software trará para o mundo.

**Analogia:** Pense nos futuros donos da casa. Eles não dizem ao arquiteto &ldquo;eu quero uma viga de aço de 12 polegadas&rdquo;. Eles dizem: &ldquo;Por que queremos a casa?&rdquo;.

- &ldquo;Precisamos de mais espaço para a nossa família que está crescendo.&rdquo;
- &ldquo;Queremos um lugar para receber amigos e socializar.&rdquo;
- &ldquo;Nosso objetivo é ter um lar seguro e economizar energia.&rdquo;

No software, as perguntas-chave para descobrir os **Requisitos de Negócio** são:

- Qual problema este software resolve?
- Quem é o público-alvo?
- Como saberemos que este projeto foi um sucesso? (Ex: aumentar as vendas, reduzir custos, etc.)

O resultado deste passo é a **visão clara do projeto**.

### Passo 2: Requisitos de Usuário (O &ldquo;O Quê&rdquo; do Usuário)

Com o &ldquo;porquê&rdquo; definido, descemos um nível e focamos em quem vai usar o sistema e o que essa pessoa precisa fazer. A ferramenta mais poderosa para isso são as **Histórias de Usuário** (User Stories).

**Analogia:** Os donos da casa agora descrevem as ações que realizarão.

*&ldquo;Como um anfitrião, eu quero uma cozinha aberta integrada à sala, para que eu possa cozinhar e conversar com meus convidados ao mesmo tempo.&rdquo;*

O formato é sempre: **Como um(a) &lt;tipo de usuário&gt;, eu quero &lt;fazer uma ação&gt;, para que &lt;eu possa alcançar um objetivo&gt;**.

Este formato nos força a pensar na funcionalidade (cozinha aberta) sob a perspectiva de quem a usa (anfitrião) e a justificar sua existência (para conversar com os convidados).

### Passo 3: Requisitos de Sistema (A Especificação Técnica do &ldquo;O Quê&rdquo;)

Agora, traduzimos os desejos do usuário em instruções claras para os construtores (desenvolvedores). É aqui que detalhamos o comportamento do sistema. Eles se dividem em dois tipos:

- **Funcionais:** O que o sistema efetivamente faz.
- **Não Funcionais:** Como o sistema se comporta (suas qualidades).

**Analogia:** O arquiteto pega a história da &ldquo;cozinha aberta&rdquo; e a transforma em especificações na planta.

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

Desejável, mas com baixo impacto se não for feito. É o &ldquo;perfume&rdquo;. (Ex: Aquela marca importada de azeite).

### ❌ W - Won't Have (Não Terá... por agora)

Funcionalidades que ficam explicitamente para o futuro, para garantir o foco no que é mais importante. (Ex: O champanhe pode ficar para uma ocasião especial).

## O Ciclo em Ação

Na prática, o fluxo é contínuo:

1. Você identifica uma **História de Usuário** (Ex: &ldquo;Exportar plano alimentar para PDF&rdquo;).
2. Imediatamente, você a classifica usando **MoSCoW** (Ex: O cliente diz que é importante, mas não vital para o primeiro dia, então é um **Should Have**).
3. A história entra na sua lista de tarefas (**backlog**) já priorizada.

Ao final da fase de requisitos, você não tem apenas uma lista de desejos, mas um **plano de ação priorizado**, pronto para ser desenhado (fase de Design) e, finalmente, codificado.

---

## Conclusão

Entender este ciclo é o que diferencia a construção de um software bem-sucedido de um projeto destinado ao fracasso. Foque no &ldquo;porquê&rdquo;, escute o usuário, detalhe o comportamento e, acima de tudo, **priorize o que gera mais valor**.

Lembre-se: requisitos não são apenas documentos burocráticos. Eles são a ponte entre o sonho do cliente e o código que você vai escrever. Construa essa ponte com cuidado, e o sucesso do projeto será uma consequência natural.
        `
      }
    ]
  },
  {
    id: 'design-patterns',
    name: 'Design Patterns',
    description: 'Padrões de projeto fundamentais para desenvolvimento de software',
    icon: '⚙️',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    articles: [
      {
        slug: 'abstract-factory-pattern',
        title: 'Abstract Factory - O Padrão da Fábrica de Fábricas',
        description: 'Entenda o padrão Abstract Factory através de uma analogia simples com uma montadora de brinquedos LEGO. Aprenda como criar famílias de objetos relacionados sem misturar temas.',
        date: '06 Out 2025',
        readTime: '8 min',
        tags: ['Design Patterns', 'Programação', 'Arquitetura'],
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
      }
    ]
  },
  {
    id: 'aws',
    name: 'AWS',
    description: 'Guias e tutoriais sobre Amazon Web Services e cloud computing',
    icon: '☁️',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    articles: [
      {
        slug: 'fundamentos-aws-computacao-nuvem',
        title: 'Fundamentos Essenciais da Nuvem AWS - Módulo 1',
        description: 'Entenda o que é computação em nuvem através de analogias práticas e comparações reais. Aprenda por que a AWS é como a energia elétrica da sua casa e como isso pode revolucionar seu negócio.',
        date: '07 Out 2025',
        readTime: '12 min',
        tags: ['AWS', 'Cloud Computing', 'Fundamentos'],
        image: '/aws1.jpeg',
        content: `
## Módulo 1: Fundamentos Essenciais da Nuvem AWS

### Microbloco 1.1: O que é Computação em Nuvem?

**1. O Contexto (O "Porquê")**

Imagine que você e sua equipe acabaram de finalizar a primeira versão do seu **software**. O próximo passo é disponibilizá-lo para os primeiros clientes. No passado (e ainda hoje em algumas empresas), você precisaria:

1.  Comprar um servidor físico (uma máquina potente).
2.  Alugar um espaço em um data center para hospedar esse servidor (com ar condicionado, energia redundante, segurança física).
3.  Instalar o sistema operacional, o banco de dados e todas as dependências.
4.  Configurar a rede e a segurança.

Isso custa muito dinheiro (investimento inicial) e tempo. E se o **software** fizer um sucesso estrondoso e você precisar de 10 vezes mais capacidade da noite para o dia? Você teria que repetir todo o processo, correndo o risco de perder clientes enquanto isso. A computação em nuvem nasceu para resolver exatamente esse problema.

**2. A Matéria (O "O quê")**

**Computação em Nuvem** (Cloud Computing) é a entrega de recursos de tecnologia (como servidores, armazenamento, bancos de dados, redes e software) sob demanda, pela internet, com um modelo de preço de "pagamento conforme o uso" (pay-as-you-go).

Em vez de comprar e manter sua própria infraestrutura, você pode alugar esses recursos de um provedor de nuvem, como a Amazon Web Services (AWS).

**3. A Analogia**

Pense na computação em nuvem como a **energia elétrica** 🔌 da sua casa.

Você não constrói uma usina hidrelétrica no seu quintal para ter luz. Você simplesmente se conecta à rede elétrica da cidade e paga apenas pela energia que consome no final do mês. Se um dia você compra um ar-condicionado novo e consome mais energia, sua conta aumenta. Se você viaja e desliga tudo, sua conta diminui.

A AWS é a "companhia de energia" para a sua empresa de software. Você "pluga" sua aplicação (o **software**) na infraestrutura deles e paga apenas pelos recursos que seu software utiliza.

**4. Mãos na Massa (Aplicação Real)**

Vamos criar um quadro de planejamento para o lançamento do software, comparando o modelo tradicional com o modelo em nuvem. Isso é uma ferramenta útil para justificar a escolha da nuvem para um cliente ou gerente.

**Cenário:** Lançamento de um novo software para os primeiros 100 usuários.

| Recurso Necessário | **Abordagem Tradicional (Servidor Próprio)** | **Abordagem em Nuvem (AWS)** |
| :--- | :--- | :--- |
| **Servidor Web** | Compra de um servidor físico: **R$ 8.000** | Aluguel de um servidor virtual (EC2): **~R$ 80/mês** |
| **Banco de Dados** | Instalação e licenciamento de software: **R$ 2.000** | Uso de um serviço de banco de dados (RDS): **~R$ 100/mês** |
| **Armazenamento** | Compra de discos (HDs/SSDs): **R$ 1.500** | Armazenamento de objetos (S3): **Paga por GB, centavos** |
| **Manutenção/Tempo**| Contratação de um especialista ou tempo da sua equipe | Gerenciado pela AWS, foco total no seu código |
| **Investimento Inicial** | **~ R$ 11.500** | **~ R$ 180** (para o primeiro mês) |

### Conclusão do Módulo 1

A computação em nuvem não é apenas uma tendência tecnológica, é uma mudança fundamental na forma como consumimos recursos de TI. Assim como não pensamos duas vezes antes de ligar uma lâmpada (confiando que a energia elétrica estará disponível), a AWS permite que você se concentre no que realmente importa: desenvolver seu software e atender seus clientes.

No próximo módulo, vamos explorar os principais serviços da AWS e como eles se conectam para formar uma solução completa.
        `
      }
    ]
  },
  {
    id: 'algoritmos-logica',
    name: 'Algoritmos e Lógica de Programação',
    description: 'Fundamentos essenciais de algoritmos, estruturas de dados e raciocínio lógico para programadores.',
    icon: '🧮',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    articles: [
      {
        slug: 'conceitos-basicos-algoritmos',
        title: 'Conceitos Básicos',
        description: 'Entenda os fundamentos de algoritmos através de analogias práticas. Aprenda o que são variáveis, expressões e como construir seus primeiros algoritmos.',
        date: '09 Out 2025',
        readTime: '10 min',
        tags: ['Algoritmos', 'Lógica', 'Fundamentos'],
        content: `
# Conceitos Básicos de Algoritmos e Lógica de Programação

Imagine que você precisa montar um móvel que acabou de comprar. Você recebe um manual com uma série de passos claros e em uma ordem específica para que, ao final, o móvel esteja montado corretamente. Esse manual é, em essência, um algoritmo.

## 1. O Que é um Algoritmo? A Receita do Bolo da Programação

Um algoritmo é simplesmente uma sequência de passos lógicos e finitos para resolver um problema. Assim como uma receita de bolo, ele tem um início, um meio e um fim, e cada passo deve ser claro e sem ambiguidades. No nosso dia a dia, usamos algoritmos o tempo todo sem perceber, como ao seguir os passos para:

- Ir para o trabalho (desligar despertador, escovar os dentes, etc.).
- Trocar uma lâmpada.
- Fazer uma ligação.

## 2. Como Construir um Algoritmo: O Planejamento da Viagem

Para criar um algoritmo eficiente, é útil dividir o problema em três partes, como se estivesse planejando uma viagem:

**Entrada (O que levar?):** Quais informações você precisa receber do usuário? (Ex: para somar dois números, você precisa que o usuário informe quais são esses números).

**Processamento (O que fazer no caminho?):** Que cálculos ou transformações precisam ser feitos com os dados de entrada? (Ex: realizar a operação de soma).

**Saída (Qual o destino final?):** Que resultado você deve mostrar ao usuário? (Ex: exibir o resultado da soma).

## 3. Variáveis: As "Caixas" para Guardar Informações

Ao criar um algoritmo, precisamos de um lugar para guardar temporariamente os dados. Para isso, usamos as variáveis. Pense em uma variável como uma caixa etiquetada.

- **Nome único:** Cada caixa tem um nome (ex: "Idade").
- **Tipo específico:** A caixa só pode guardar um tipo de "objeto". Uma caixa para "Idade" só guarda números inteiros; você não pode guardar a palavra "casa" nela.
- **Um item por vez:** A caixa armazena apenas um valor de cada vez. Se você colocar o número 36 na caixa "Idade", o valor anterior que estava lá (ex: 25) é descartado.

Existem diferentes "tipos de caixas" (tipos de variáveis):

- **Inteiro:** Para números sem casas decimais (ex: 30, -5).
- **Real:** Para números com casas decimais (ex: 1.58, 60.3).
- **Caractere:** Para textos e símbolos (ex: "Maria da Silva", "3011-1212").
- **Lógico:** Para guardar apenas dois valores: verdadeiro ou falso.

## 4. Expressões e Operadores: As Ferramentas de Trabalho

As expressões são como as fórmulas matemáticas, combinando variáveis e constantes com operadores para realizar cálculos. Os operadores são as ferramentas que usamos:

- **Aritméticos:** Para fazer contas (+, -, *, /).
- **Relacionais:** Para fazer comparações (&gt;, &lt;, =).
- **Lógicos:** Para combinar condições ("E", "OU", "NÃO").

## 5. Entrada e Saída de Dados: A Comunicação com o Usuário

Por fim, um algoritmo precisa se comunicar com o mundo exterior.

**Comando Leia (Entrada):** É como perguntar algo ao usuário e esperar que ele digite uma resposta, que será guardada em uma variável (nossa "caixa").

**Comando Escreva (Saída):** É como mostrar uma mensagem ou o resultado de um cálculo na tela para o usuário ver.

---

## Conclusão

Dominar esses conceitos básicos é o primeiro passo para se tornar um programador. Algoritmos são a base de tudo na programação, e entender como estruturar o pensamento lógico fará toda a diferença na sua jornada de desenvolvimento de software.
        `
      },
      {
        slug: 'estrutura-condicional',
        title: 'Estrutura Condicional',
        description: 'Aprenda como criar decisões em seus algoritmos usando estruturas condicionais. Entenda o funcionamento de if/else, estruturas aninhadas e switch case.',
        date: '09 Out 2025',
        readTime: '12 min',
        tags: ['Algoritmos', 'Lógica', 'Condicionais'],
        content: `
# Estrutura Condicional - As Encruzilhadas do Código

Imagine que você está dirigindo e chega a uma encruzilhada. Você precisa tomar uma decisão: seguir reto ou virar à direita? A sua escolha depende de uma condição, como "o semáforo está verde?". Na programação, os algoritmos também chegam a encruzilhadas, e a estrutura condicional é a ferramenta que usamos para que eles possam tomar decisões e escolher qual caminho seguir.

Até agora, nossos algoritmos eram como uma estrada reta: todas as instruções eram executadas em sequência, sem desvios. As estruturas condicionais nos permitem criar esses desvios.

## 1. O Coração da Decisão: A Condição

Toda decisão se baseia em uma condição, que é uma pergunta cuja resposta só pode ser verdadeira ou falsa. Para formular essas perguntas, usamos:

**Operadores Relacionais:** Para comparar valores (&gt;, &lt;, =).

**Operadores Lógicos:** Para combinar múltiplas perguntas ("E", "OU").

## 2. Estrutura Condicional Simples (Se): A Rua de Mão Única

Pense nesta estrutura como um caminho com um desvio opcional. Se uma condição for verdadeira, você entra nesse desvio e executa uma ação. Se for falsa, você simplesmente ignora o desvio e continua reto.

**Analogia:** "Se (estiver chovendo), então leve o guarda-chuva."

**Funcionamento:** O algoritmo testa uma condição. Se o resultado for verdadeiro, ele executa um bloco de código específico. Se for falso, ele pula esse bloco e segue em frente.

## 3. Estrutura Condicional Composta (Se / Senão): A Bifurcação na Estrada

Aqui, temos uma bifurcação clara com dois caminhos possíveis. Não há como seguir reto; você obrigatoriamente escolherá um dos dois lados.

**Analogia:** "Se (a senha do caixa eletrônico estiver correta), então você pode sacar o dinheiro. Senão, (a senha está incorreta) uma mensagem de erro aparece."

**Funcionamento:** O algoritmo testa uma condição. Se for verdadeira, ele executa o primeiro bloco de código. Se for falsa, ele executa o segundo bloco de código. Só um dos dois caminhos será seguido.

## 4. Estrutura Condicional Aninhada: O Labirinto de Decisões

E se, após escolher um caminho na bifurcação, você encontrasse outra bifurcação? Isso é uma estrutura aninhada: uma decisão dentro de outra.

**Analogia:** Para encontrar o maior de três números (A, B e C), primeiro você pergunta: "A é maior que B?". Se a resposta for sim, você entra nesse caminho e faz uma nova pergunta: "A é maior que C?". A resposta a essa segunda pergunta definirá o maior número.

**Funcionamento:** É um Se dentro de outro Se (ou Senão), permitindo criar uma lógica mais complexa e filtrar possibilidades em múltiplos níveis. Usar essa estrutura pode tornar o algoritmo mais rápido, pois ele realiza menos testes.

## 5. Estrutura de Decisão Múltipla (Caso): O Menu de um Restaurante

Imagine um menu com várias opções numeradas (1-Pizza, 2-Massa, 3-Salada). Você escolhe um número, e o sistema executa a ação correspondente àquela opção.

**Analogia:** Um menu onde você digita um número de 1 a 12 e o algoritmo escreve o mês correspondente.

**Funcionamento:** Em vez de usar vários Se aninhados, a estrutura Caso avalia uma variável e, dependendo do seu valor, "salta" diretamente para o bloco de código correspondente, tornando o algoritmo mais claro e eficiente.

---

## Conclusão

As estruturas condicionais são fundamentais para criar algoritmos inteligentes que tomam decisões. Dominá-las é essencial para qualquer programador, pois elas aparecem em praticamente todos os programas que você desenvolverá.
        `
      }
    ]
  },
  {
    id: 'linguagem-tecnicas-programacao',
    name: 'Linguagem e Técnicas de Programação',
    description: 'Aprenda os fundamentos da programação em C e técnicas essenciais para desenvolvimento de software.',
    icon: '💻',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
    articles: [
      {
        slug: 'conceitos-iniciais-c',
        title: 'Conceitos Iniciais',
        description: 'Descubra os fundamentos da programação em C através de analogias práticas. Aprenda sobre compilação, estrutura de programas, variáveis e entrada/saída.',
        date: '09 Out 2025',
        readTime: '15 min',
        tags: ['C', 'Programação', 'Fundamentos'],
        content: `
# Conceitos Iniciais - Montando sua Oficina de Programação em C

Vamos imaginar que você decidiu aprender marcenaria. Antes de construir seu primeiro móvel, você precisa conhecer suas ferramentas, entender como elas funcionam e aprender a ler uma planta de construção. A Unidade 1 é exatamente isso, mas para a programação em C: ela te apresenta a "oficina", as "ferramentas" e as "plantas" para construir seus primeiros programas.

## 1. A Linguagem C: A Caixa de Ferramentas Universal

A linguagem C é como uma caixa de ferramentas clássica e poderosa, criada nos anos 70. Ela é popular porque não está presa a uma única marca de equipamento; um programa feito em C pode funcionar em diversas máquinas diferentes com pouca ou nenhuma alteração. Ela combina a clareza de uma linguagem moderna com a eficiência de uma linguagem mais próxima da máquina.

## 2. O Processo de Criação: Da Planta ao Móvel Pronto

Criar um programa não é um passo único. É um processo de montagem, assim como na marcenaria:

**Código-Fonte (A Planta):** É o texto que você escreve, seguindo as regras da linguagem C, para descrever o que o programa deve fazer.

**Compilador (O Marceneiro Chefe):** Essa ferramenta pega sua "planta" (código-fonte) e a traduz para uma linguagem que a máquina entende, criando um "programa-objeto". Ele também verifica se sua planta tem erros de escrita.

**Ligador (O Montador Final):** Se seu programa usa "peças pré-fabricadas" (funções de bibliotecas, como printf), o ligador junta tudo: seu programa-objeto e as peças das bibliotecas.

**Programa Executável (O Móvel Pronto):** O resultado final é um programa que o computador pode executar.

## 3. A Estrutura de um Programa: A Planta Baixa Padrão

Todo programa em C segue uma estrutura básica, como uma planta baixa:

**#include &lt;stdio.h&gt; (A Lista de Ferramentas):** Essa linha é como dizer: "Para este projeto, vou precisar das ferramentas padrão de entrada e saída". Ela inclui uma "caixa de ferramentas" (biblioteca) essencial.

**int main() (A Porta de Entrada):** Todo programa C precisa ter uma função principal chamada main. É por aqui que a execução sempre começa.

**{ } (As Paredes da Oficina):** As chaves delimitam o início e o fim do seu bloco de trabalho (o corpo da função main). Tudo que estiver aqui dentro será executado em sequência.

**return (0); (A Inspeção Final):** Esta linha diz: "Terminei o trabalho e deu tudo certo".

## 4. Variáveis e Tipos de Dados: As Gavetas de Peças

Para trabalhar, você precisa de gavetas para organizar suas peças. As variáveis são essas gavetas na memória do computador. Cada gaveta tem:

**Um nome (identificador):** A etiqueta da gaveta (ex: idade).

**Um tipo específico:** O que ela pode guardar. As gavetas mais comuns são:

- **int:** Para números inteiros (ex: 15).
- **float:** Para números com casas decimais (ex: 1.60).
- **char:** Para um único caractere (letra, número ou símbolo). Para guardar textos (strings), usamos um "gaveteiro" de char (um vetor).

## 5. Comandos de Entrada e Saída: A Comunicação com o Cliente

Seu programa precisa conversar com o usuário. Para isso, ele usa duas ferramentas principais da biblioteca stdio.h:

**printf() (O megafone):** Use-o para mostrar mensagens na tela. Você pode exibir textos puros ou o conteúdo das suas "gavetas" (variáveis).

**scanf() (O bloco de anotações):** Use-o para receber dados que o usuário digita e guardá-los em uma variável específica. Você precisa indicar o "endereço" (&amp;) da gaveta onde quer guardar a informação.

---

## Conclusão

Com esses conceitos iniciais, você está pronto para começar sua jornada na programação em C. Entender a estrutura básica, variáveis e entrada/saída é fundamental para construir programas cada vez mais complexos.
        `
      },
      {
        slug: 'estrutura-condicional-c',
        title: 'Estrutura Condicional',
        description: 'Aprenda a dar poder de decisão aos seus programas em C usando if, else e switch-case. Descubra como criar programas inteligentes que reagem a diferentes situações.',
        date: '09 Out 2025',
        readTime: '12 min',
        tags: ['C', 'Programação', 'Condicionais'],
        content: `
# Estrutura Condicional - Dando o Poder de Decisão ao seu Programa

Imagine que os programas que criamos na Unidade 1 eram como um trem em um trilho único: eles seguiam uma rota reta, executando cada comando em sequência, sem desvios. Nesta unidade, vamos instalar os "trilhos de desvio" e os "sinais de controle". As estruturas condicionais são as ferramentas que permitem ao nosso programa analisar uma situação e decidir qual caminho seguir.

## 1. Estrutura Condicional Simples (if): A Porta com Sensor de Presença

Pense na estrutura if como uma porta automática. Ela só executa uma ação (abrir) se uma condição específica for atendida (alguém se aproxima). Se a condição não for atendida, nada acontece, e o fluxo continua normalmente.

**Analogia:** "Se (o semáforo estiver verde), então atravesse a rua." Se não estiver verde, você simplesmente espera, sem executar a ação de atravessar.

**Como funciona em C:** O comando if testa uma condição. Se o resultado for verdadeiro, o bloco de código dentro das chaves { } é executado. Se for falso, esse bloco é totalmente ignorado, e o programa pula para a próxima instrução.

## 2. Estrutura Condicional Composta (if-else): A Bifurcação na Estrada

Esta estrutura é como chegar a uma bifurcação onde você é obrigado a escolher um de dois caminhos. Não há como seguir reto. Você vai para a esquerda OU para a direita.

**Analogia:** "Se (a idade for maior ou igual a 18), então você é maior de idade. Senão (caso contrário), você é menor de idade." Uma das duas opções sempre será verdade.

**Como funciona em C:** O programa avalia a condição no if. Se for verdadeira, ele executa o primeiro bloco de código. Se for falsa, ele executa o bloco de código que está dentro do else. Um, e apenas um, dos dois blocos será executado.

## 3. Estrutura case (switch-case): O Painel de Botões do Elevador

A estrutura case (ou switch) é perfeita para situações com várias opções claras e mutuamente exclusivas, como um menu. É como o painel de um elevador.

**Analogia:** Você quer ir para um andar. Você aperta o botão do andar desejado (case). O elevador vai para aquele andar e executa a ação (abre a porta). O comando break é crucial aqui: ele funciona como o freio que para o elevador no andar correto, impedindo que ele continue subindo para os andares seguintes. Se você apertar um botão que não existe, o default é a ação padrão (como "andar inválido").

**Como funciona em C:** O switch avalia o valor de uma variável. O programa então "salta" para o case que corresponde àquele valor e executa o código até encontrar um break.

---

## Conclusão

Em resumo, a Unidade 2 nos dá as ferramentas para criar programas que não são apenas uma sequência de tarefas, mas que podem pensar, avaliar condições e reagir de maneiras diferentes a cada situação, tornando-os muito mais inteligentes e úteis.
        `
      }
    ]
  }
];

// Manter compatibilidade com a estrutura antiga
export const articles: Article[] = themes.flatMap(theme => theme.articles);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getAllThemes(): Theme[] {
  return themes;
}

export function getThemeById(id: string): Theme | undefined {
  return themes.find(theme => theme.id === id);
}

export function getArticlesByTheme(themeId: string): Article[] {
  const theme = getThemeById(themeId);
  return theme ? theme.articles : [];
}