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

export const articles: Article[] = [
  {
    slug: 'meu-primeiro-artigo',
    title: 'Meu Primeiro Artigo',
    description: 'Este é um artigo de exemplo que será editado para o conteúdo real do blog.',
    date: '06 Out 2025',
    readTime: '5 min',
    tags: ['Exemplo', 'Blog'],
    content: `
# Meu Primeiro Artigo

Este é um artigo de exemplo que pode ser editado para adicionar seu conteúdo real.

## Seção de Exemplo

Você pode editar este conteúdo no arquivo \`src/data/articles.ts\`.

## Como Personalizar

1. Edite o título
2. Altere a descrição
3. Modifique as tags
4. Escreva seu conteúdo em Markdown

## Conclusão

Este artigo serve como base para seus futuros posts.
    `
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}