<div align="center">

# K-Commit

</div>

O **K-Commit** é um padrão personalizado para mensagens de commit, combinando as boas práticas de:

- [**Conventional Commits**](https://www.conventionalcommits.org/pt-br/v1.0.0/): Padrão para organizar o histórico e facilitar a comunicação entre desenvolvedores.
- [**GitMoji**](https://gitmoji.dev/): Uso de emojis para transmitir visualmente o tipo de mudança.
- **Toque pessoal**: Adaptações que tornam o processo mais claro e agradável.

## 📐 Estrutura do K-Commit

```text
<emote> <tipo>[escopo opcional][!]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### 🔍 Componentes

1. **Emote**: Emoji que indica o tipo de alteração (ex.: ✨, 🐛, 🔥).
2. **Tipo**: Categoria do commit (ex.: feat, fix, remove).
3. **Escopo (opcional)**: Área ou módulo afetado (ex.: auth, login).
4. **Exclamação (opcional)**: Indica uma **BREAKING CHANGE** quando adicionada após o tipo ou escopo.
5. **Descrição**: Resumo breve e claro da mudança.
6. **Corpo (opcional)**: Explicação mais detalhada sobre a mudança.
7. **Rodapé(s) (opcional)**: Informações adicionais como referências a issues.

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

```text
🔥 remove(auth): remove suporte à autenticação por cookie

BREAKING CHANGE: A autenticação baseada em cookie foi removida.
```

```text
✨ feat!: adiciona autenticação JWT

BREAKING CHANGE: A autenticação antiga baseada em cookies foi removida.
```

## 🔄 **Tipos de Commit e Emojis**

A tabela abaixo combina os tipos de commit e seus emojis correspondentes, tornando o histórico mais visual e fácil de entender.

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

## 🧾 **Boas Práticas**

- **Commits pequenos e frequentes**: Facilitam o acompanhamento das mudanças.
- **Descrição clara**: Indica o que foi alterado e o motivo.
- **Escopo opcional, mas recomendado**: Em projetos maiores, especifica a área afetada.
- **Rodapés para informações extras**: Como referências a issues.
- **Uso do imperativo**: As mensagens de commit devem começar com verbos no modo imperativo (ex.: "Adiciona", "Corrige").
- **Consistência**: Mantenha o uso consistente de emojis e formatos de mensagem.

## 🤝 **Contribuição**

Contribuições são bem-vindas! Ao enviar um Pull Request, siga o padrão **K-Commit** nas mensagens de commit.

---

<div align="center">

Feito com ❤️ por <a href="https://github.com/KaduKessler" target="_blank">Kadu</a>.

</div>
