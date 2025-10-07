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
      // Aqui vão os futuros artigos de AWS
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