# Vena Trading - Website

Este projeto foi desenvolvido com React, Vite e Tailwind CSS.

## Como colocar no Netlify

1.  **Conecte seu repositório**: No painel do Netlify, clique em "Add new site" e selecione seu repositório do GitHub/GitLab/Bitbucket.
2.  **Configurações de Build**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
3.  **Variáveis de Ambiente**:
    *   Se você estiver usando o Chatbot com Gemini, adicione a variável `GEMINI_API_KEY` nas configurações de "Environment variables" do Netlify.
4.  **Deploy**: Clique em "Deploy site".

## Estrutura do Projeto

O projeto está organizado de forma modular para facilitar a manutenção:

- `src/components/layout`: Navbar e Footer.
- `src/components/sections`: Seções da página principal.
- `src/components/ui`: Componentes de interface reutilizáveis.
- `src/pages`: Páginas da aplicação.
- `src/services`: Integração com APIs (Gemini).
- `src/constants.ts`: Dados estáticos e textos do site.

## Funcionalidades

- **Design Responsivo**: Otimizado para todos os tamanhos de tela.
- **Chatbot IA**: Assistente virtual integrado com Gemini.
- **Conversor de Moedas**: Taxas de câmbio em tempo real.
- **Formulário de Contato**: Integrado com Formspree.
- **Animações Fluidas**: Utiliza Framer Motion para uma experiência premium.
