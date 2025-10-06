# DevPage - Minha Jornada no Código

Uma landing page/blog pessoal futurista desenvolvida em Next.js para compartilhar conhecimento e experiências no universo do desenvolvimento de software.

## 🚀 Características

- **Design Futurista**: Tema escuro com cores neon (azul elétrico, verde neon, roxo profundo)
- **Fundo Interativo**: Partículas animadas criadas com Canvas API
- **Responsivo**: Layout totalmente adaptável para desktop, tablet e mobile
- **Performance**: Otimizado para carregamento rápido
- **SEO**: Meta tags otimizadas para mecanismos de busca

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15 com TypeScript
- **Estilização**: Tailwind CSS v4 com tema personalizado
- **Animações**: Framer Motion
- **Markdown**: next-mdx-remote para renderização de artigos
- **Ícones**: Lucide React
- **Deploy**: Vercel

## 🎨 Funcionalidades

### ✅ Implementado

- [x] **Navbar Fixa**: Navegação com links para Home, Artigos, Sobre Mim
- [x] **Hero Section**: Título gradiente, animações futuristas, terminal animado
- [x] **Grid de Artigos**: Cards com efeitos hover neon e tags coloridas
- [x] **Páginas Dinâmicas**: Roteamento para artigos individuais (`/artigos/[slug]`)
- [x] **Sistema de Markdown**: Renderização de conteúdo com next-mdx-remote
- [x] **Seção Sobre Mim**: Biografia, skills e links sociais
- [x] **Fundo de Partículas**: Animação canvas personalizada
- [x] **Design Responsivo**: Compatível com todos os dispositivos
- [x] **Otimização Vercel**: Configuração para deploy

## 📁 Estrutura do Projeto

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

## 🎯 Próximos Passos para Personalização

1. **Adicionar sua foto**: Coloque sua foto como `profile.jpg` na pasta `public/`
2. **Editar biografia**: Personalize o texto na seção "Sobre Mim" em `src/components/AboutSection.tsx`
3. **Criar artigos**: Edite `src/data/articles.ts` para adicionar seus próprios artigos
4. **Atualizar links sociais**: Configure seus links do GitHub, LinkedIn e email nos componentes

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

---

Desenvolvido com 💜 e muito ☕ por **Michel Henrique**