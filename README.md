# DevPage - Minha Jornada no CódigoThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



Uma landing page/blog pessoal futurista desenvolvida em Next.js para compartilhar conhecimento e experiências no universo do desenvolvimento de software.## Getting Started



## 🚀 CaracterísticasFirst, run the development server:



- **Design Futurista**: Tema escuro com cores neon (azul elétrico, verde neon, roxo profundo)```bash

- **Fundo Interativo**: Partículas animadas criadas com Canvas APInpm run dev

- **Responsivo**: Layout totalmente adaptável para desktop, tablet e mobile# or

- **Performance**: Otimizado para carregamento rápidoyarn dev

- **SEO**: Meta tags otimizadas para mecanismos de busca# or

pnpm dev

## 🛠️ Tecnologias Utilizadas# or

bun dev

- **Framework**: Next.js 15 com TypeScript```

- **Estilização**: Tailwind CSS v4 com tema personalizado

- **Animações**: Framer MotionOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- **Markdown**: next-mdx-remote para renderização de artigos

- **Ícones**: Lucide ReactYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Deploy**: Vercel

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🎨 Funcionalidades

## Learn More

### ✅ Implementado

To learn more about Next.js, take a look at the following resources:

- [x] **Navbar Fixa**: Navegação com links para Home, Artigos, Sobre Mim

- [x] **Hero Section**: Título gradiente, animações futuristas, terminal animado- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [x] **Grid de Artigos**: Cards com efeitos hover neon e tags coloridas- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- [x] **Páginas Dinâmicas**: Roteamento para artigos individuais (`/artigos/[slug]`)

- [x] **Sistema de Markdown**: Renderização de conteúdo com next-mdx-remoteYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

- [x] **Seção Sobre Mim**: Biografia, skills e links sociais

- [x] **Fundo de Partículas**: Animação canvas personalizada## Deploy on Vercel

- [x] **Design Responsivo**: Compatível com todos os dispositivos

- [x] **Otimização Vercel**: Configuração para deployThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.



## 📁 Estrutura do ProjetoCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


```
src/
├── app/                    # App Router (Next.js 15)
│   ├── artigos/           # Página e rotas de artigos
│   ├── sobre/             # Página sobre
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── ParticlesBackground.tsx
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ArticlesGrid.tsx
│   ├── AboutSection.tsx
│   ├── Footer.tsx
│   └── MarkdownRenderer.tsx
└── data/                  # Dados dos artigos
    └── articles.ts
```

## 🎯 Paleta de Cores

- **Fundo Principal**: `#0A0A0A`
- **Azul Neon**: `#00BFFF`
- **Verde Neon**: `#00FF7F`
- **Roxo Neon**: `#8A2BE2`
- **Cards**: `#1A1A1A`
- **Texto**: `#EDEDED`

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositório>
   cd MyDevPage
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse**: `http://localhost:3000`

## 📝 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 🚀 Deploy

O projeto está otimizado para deploy no Vercel:

1. **Via CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Via GitHub**: Conecte o repositório ao Vercel

## 📖 Adicionando Novos Artigos

Para adicionar um novo artigo, edite o arquivo `src/data/articles.ts`:

```typescript
{
  slug: 'meu-novo-artigo',
  title: 'Título do Artigo',
  description: 'Descrição breve...',
  date: '01 Jan 2024',
  readTime: '5 min',
  tags: ['React', 'Next.js'],
  content: `
    # Meu Novo Artigo
    Conteúdo em Markdown...
  `
}
```

## 🎨 Customização

### Cores
Edite as variáveis CSS em `src/app/globals.css`:

```css
:root {
  --neon-blue: #00bfff;
  --neon-green: #00ff7f;
  --neon-purple: #8a2be2;
  /* ... */
}
```

### Componentes
Todos os componentes estão em `src/components/` e são facilmente customizáveis.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

## 🎯 Próximos Passos para Personalização

1. **Adicionar sua foto**: Coloque sua foto como `profile.jpg` na pasta `public/`
2. **Editar biografia**: Personalize o texto na seção "Sobre Mim" em `src/components/AboutSection.tsx`
3. **Criar artigos**: Edite `src/data/articles.ts` para adicionar seus próprios artigos
4. **Atualizar links sociais**: Configure seus links do GitHub, LinkedIn e email nos componentes

---

Desenvolvido com 💜 e muito ☕ por **Michel Henrique**