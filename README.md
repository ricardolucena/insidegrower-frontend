# 🌱 InsideGrower – Frontend (Fase 1)

Interface administrativa do sistema InsideGrower, uma plataforma de gestão de cultivos indoor com foco em lotes, bandejas, equipamentos, estoque e custos operacionais.

Este repositório contém a **Fase 1 (Frontend)**, composta exclusivamente por HTML, CSS e JavaScript, sem integração com backend por enquanto.

---

## 🚀 Status do Projeto

**Fase atual:** Layout completo da área administrativa utilizando o template *CoolAdmin* como base.  
Toda navegação é feita via **SPA (Single Page Application)** utilizando *AJAX parcial*, permitindo troca de telas sem recarregar a página.

---

## 🧩 Estrutura do Projeto

/
├── index.html # Página inicial (base da SPA)
├── partials/ # Telas carregadas dinamicamente via JS
│ ├── dashboard.html
│ ├── custos-config.html
│ ├── equipamentos.html
│ ├── equipamento-form.html
│ ├── estoque.html
│ ├── estoque-form.html
│ ├── bandejas.html
│ ├── bandeja-form.html
│ ├── lotes.html
│ └── lote-form.html
├── js/
│ ├── inside-growers-spa.js # Mecanismo de carregamento dinâmico
│ └── (arquivos do template)
├── css/
├── images/
└── vendor/


---

## 🖥️ Tecnologias Utilizadas

- **HTML5 / CSS3 / JavaScript Puro**
- **CoolAdmin Template** (UI/UX base)
- **Chart.js** (gráficos)
- **AOS + Swiper** (animações e sliders do template)
- **Font Awesome 7**
- **Bootstrap 5.3**

Nenhum framework adicional foi utilizado nesta fase (React, Vue, Angular, etc.).

---

## 🔧 Funcionamento da SPA

A aplicação utiliza um mecanismo simples de SPA:

1. O usuário clica em um item do menu (`data-page-link`)
2. O JavaScript carrega via AJAX o HTML correspondente dentro de `#ig-main-content`
3. A navegação acontece sem recarregar a página

Arquivo principal responsável:  
`js/inside-growers-spa.js`

---

## 🌐 Deploy

O projeto está configurado para funcionar perfeitamente em ambientes estáticos.

### Deploy recomendado:
- **Netlify** (CI/CD automático via GitHub)
- **Vercel**
- **GitHub Pages**

Basta apontar o deploy para a **raiz (/) do projeto**, sem comando de build.

---

## 📦 Como rodar localmente

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/insidegrower-frontend.git
