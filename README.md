<h1 align="center">K-Commit</h1>

O **K-Commit** é um padrão personalizado para mensagens de commit, combinando as boas práticas de:

- [**Conventional Commits**](https://www.conventionalcommits.org/pt-br/v1.0.0/): Padrão para organizar o histórico e facilitar a comunicação entre desenvolvedores.
- [**GitMoji**](https://gitmoji.dev/): Uso de emojis para transmitir visualmente o tipo de mudança.
- **Toque pessoal**: Adaptações que tornam o processo mais claro e agradável.

---

## 🌐 K-Commit Generator

Para facilitar a criação de mensagens de commit seguindo o padrão **K-Commit**, desenvolvi um site interativo:

- **[Acesse o K-Commit Generator](https://kadukessler.github.io/K-Commit/)**

### **Funcionalidades do Gerador**

- **Auto-complete**: Sugestões para tipos de commit.
- **Pré-visualização em tempo real**: Acompanhe a mensagem conforme digita.
- **Opção de BREAKING CHANGE**: Marque quando houver mudanças incompatíveis.
- **Personalização de Tema**: Alterne entre tema claro e escuro.
- **Sons de Teclas**: Interatividade ao digitar, com controle de ativação.
- **Copiar e Limpar**: Botões para copiar ou resetar a mensagem facilmente.

---

## 📐 Estrutura do K-Commit

```text
<emote> <tipo>(<escopo opcional>)[!]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

---

### 🔍 Componentes

1. **Emote**: Emoji que indica o tipo de alteração (ex.: ✨, 🐛, 🔥).
2. **Tipo**: Categoria do commit (ex.: feat, fix, remove).
3. **Escopo (opcional)**: Área ou módulo afetado (ex.: auth, login).
4. **Exclamação (opcional)**: Indica uma **BREAKING CHANGE** quando adicionada após o tipo ou escopo.
5. **Descrição**: Resumo breve e claro da mudança.
6. **Corpo (opcional)**: Explicação mais detalhada sobre a mudança.
7. **Rodapé(s) (opcional)**: Informações adicionais, como referências a issues.

---

## 🧾 **Boas Práticas**

- **Commits pequenos e frequentes**: Facilitam o acompanhamento das mudanças.
- **Descrição clara e concisa**: Indica o que foi alterado e o motivo.
- **Escopo opcional, mas recomendado**: Em projetos maiores, especifica a área afetada.
- **Rodapés para informações extras**: Como referências a issues.
- **Consistência**: Mantenha o uso consistente de emojis e formatos de mensagem.

---

## 💡 Exemplo de Uso

```text
✨ feat(auth): adiciona autenticação JWT

Implementação de autenticação JWT para proteger as rotas da API.
```

```text
🐛 fix(login): corrige erro ao logar sem senha

Tratado o envio de formulário vazio para evitar erros.

Resolves: #42
```

---

## 🔄 **Tipos de Commit e Emojis**

| **Emoji** | **Tipo** | **Descrição**                                           |
| --------- | -------- | ------------------------------------------------------- |
| ✨        | feat     | Adição de nova funcionalidade ao código.                |
| 🐛        | fix      | Correção de bug ou comportamento inesperado.            |
| 🔥        | remove   | Remoção de código ou arquivos.                          |
| 🛠️        | chore    | Tarefas de manutenção ou ajustes sem impacto funcional. |
| 📝        | docs     | Atualização ou criação de documentação.                 |
| ♻️        | refactor | Refatoração sem alteração na funcionalidade.            |
| 🎨        | style    | Alterações estéticas (formatação, indentação, estilo).  |
| 🧪        | test     | Adição ou alteração de testes automatizados.            |
| ⚡        | perf     | Melhorias de desempenho sem alterar funcionalidades.    |
| 🚀        | ci       | Alterações em pipelines de CI/CD.                       |
| 🏗️        | build    | Modificações no processo de build ou dependências.      |

---

## 🛠️ **Instalação Local**

Se preferir executar o gerador localmente:

### **Passos**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/KaduKessler/K-Commit.git
   ```

2. **Navegue até o diretório:**

   ```bash
   cd K-Commit
   ```

3. **Abra o `index.html` no navegador:**

   ```bash
   xdg-open index.html  # Linux
   open index.html      # macOS
   start index.html     # Windows
   ```

---

## 🤝 **Contribuição**

Contribuições são bem-vindas! Siga estas etapas para enviar sua contribuição:

1. **Fork o repositório**.
2. **Crie uma branch** para sua feature:

   ```bash
   git checkout -b minha-feature
   ```

3. **Faça commit das suas mudanças**:

   ```bash
   git commit -m "feat: minha nova feature"
   ```

4. **Envie para o repositório remoto**:

   ```bash
   git push origin minha-feature
   ```

5. **Abra um Pull Request**.

---

<p align="center">
Feito com ☕ por <a href="https://github.com/KaduKessler" target="_blank">Kadu</a>.
</p>
