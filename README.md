# K-Commit

O **K-Commit** é um padrão personalizado para mensagens de commit, combinando as boas práticas de:

- [**Conventional Commits**](https://www.conventionalcommits.org/pt-br/v1.0.0/): Padrão para organizar o histórico e facilitar a comunicação entre desenvolvedores.
- [**GitMoji**](https://gitmoji.dev/): Uso de emojis para transmitir visualmente o tipo de mudança.
- **Toque pessoal**: Adaptações que tornam o processo mais claro e agradável.

## 📐 Estrutura do K-Commit

```text
<emote> <tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### 🔍 Componentes

1. **Emote**: Emoji que indica o tipo de alteração (ex.: ✨, 🐛).
2. **Tipo**: Categoria do commit (ex.: feat, fix).
3. **Escopo (opcional)**: Área ou módulo afetado (ex.: auth, login).
4. **Descrição**: Resumo breve e claro da mudança.
5. **Corpo (opcional)**: Explicação mais detalhada sobre a mudança.
6. **Rodapé(s) (opcional)**: Informações adicionais como **BREAKING CHANGE** ou referências a issues.

## 💡 Exemplo de Uso

```text
✨ feat(auth): adicionar autenticação JWT

Implementação de autenticação JWT para proteger as rotas da API.

BREAKING CHANGE: A autenticação antiga baseada em cookies foi removida.
```

```text
🐛 fix(login): corrigir erro ao logar sem senha

Tratado o envio de formulário vazio para evitar erros.

Resolves: #42
```

## 🔄 **Tipos de Commit e Emojis**

A tabela abaixo combina os tipos de commit e seus emojis correspondentes, tornando o histórico mais visual e fácil de entender.

| **Emoji** | **Tipo**        | **Descrição**                                           |
| --------- | --------------- | ------------------------------------------------------- |
| ✨        | feat            | Adição de nova funcionalidade ao código.                |
| 🐛        | fix             | Correção de bug ou comportamento inesperado.            |
| 🛠️        | chore           | Tarefas de manutenção ou ajustes sem impacto funcional. |
| 📄        | docs            | Atualização ou criação de documentação.                 |
| ♻️        | refactor        | Refatoração sem alteração na funcionalidade.            |
| 🎨        | style           | Alterações estéticas (formatação, indentação, estilo).  |
| 🧪        | test            | Adição ou alteração de testes automatizados.            |
| ⚡        | perf            | Melhorias de desempenho sem alterar funcionalidades.    |
| 🚀        | ci              | Alterações em pipelines de CI/CD.                       |
| 🏗️        | build           | Modificações no processo de build ou dependências.      |
| 🔥        | BREAKING CHANGE | Mudança incompatível que afeta APIs ou funcionalidades. |

### 🚨 **Sobre o Uso de 🔥 (BREAKING CHANGE)**

O **🔥** é utilizado para indicar mudanças que causam **incompatibilidade** com versões anteriores. Isso pode incluir a remoção de uma API ou alterações significativas em comportamentos existentes.  
Esse emoji pode ser usado em commits `feat` ou em qualquer tipo de commit que introduza uma **breaking change**.

**Exemplo:**

```text
🔥 feat(auth): remover suporte à autenticação por cookie

BREAKING CHANGE: A autenticação baseada em cookie foi removida.
```

Se preferir não usar o emoji 🔥, é possível indicar a breaking change apenas no rodapé:

```text
✨ feat(auth): remover suporte à autenticação por cookie

BREAKING CHANGE: A autenticação baseada em cookie foi removida.
```

## 🧾 **Boas Práticas**

- **Commits pequenos e frequentes**: Facilitam o acompanhamento das mudanças.
- **Descrição clara**: Indica o que foi alterado e o motivo.
- **Escopo opcional, mas recomendado**: Em projetos maiores, especifica a área afetada.
- **Rodapés para informações extras**: Como referências a issues ou breaking changes.

## 🤝 **Contribuição**

Contribuições são bem-vindas! Ao enviar um Pull Request, siga o padrão **K-Commit** nas mensagens de commit.

---

Feito com ❤️ por [Kadu](https://github.com/KaduKessler).
