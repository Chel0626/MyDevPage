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
    id: 'design-patterns',
    name: 'Design Patterns',
    description: 'Padrões de projeto fundamentais para desenvolvimento de software',
    icon: '🏗️',
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
        image: '/aws1.jpg',
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