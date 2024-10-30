// Seleção de elementos
const tipoInput = document.getElementById('tipo');
const escopoInput = document.getElementById('escopo');
const descricaoInput = document.getElementById('descricao');
const mensagemInput = document.getElementById('mensagem');
const rodapeInput = document.getElementById('rodape');
const breakingChangeCheckbox = document.getElementById('breaking-change');
const previewText = document.getElementById('preview-text');
const emoteSpan = document.getElementById('emote');
const dropdown = document.getElementById('dropdown');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const toggleSoundBtn = document.getElementById('toggle-sound');
const toggleThemeBtn = document.getElementById('toggle-theme');
const soundIcon = document.getElementById('sound-icon');
const themeIcon = document.getElementById('theme-icon');

// Lista dos tipos e emojis
const tipos = [
    { tipo: 'feat', emote: '✨', descricao: 'Adição de nova funcionalidade' },
    { tipo: 'fix', emote: '🐛', descricao: 'Correção de bug' },
    { tipo: 'docs', emote: '📝', descricao: 'Documentação' },
    { tipo: 'style', emote: '🎨', descricao: 'Estilo e formatação' },
    { tipo: 'refactor', emote: '♻️', descricao: 'Refatoração de código' },
    { tipo: 'test', emote: '🧪', descricao: 'Adição de testes' },
    { tipo: 'perf', emote: '⚡', descricao: 'Melhorias de desempenho' },
    { tipo: 'chore', emote: '🛠️', descricao: 'Tarefas de manutenção' },
    { tipo: 'ci', emote: '🚀', descricao: 'CI/CD' },
    { tipo: 'build', emote: '🏗️', descricao: 'Build ou dependências' },
    { tipo: 'remove', emote: '🔥', descricao: 'Remoção de código' },
];

// Função para atualizar a pré-visualização
function atualizarPreview() {
    const tipo = tipoInput.value || 'feat';
    const emote = emoteCorrespondente(tipo);
    const escopo = escopoInput.value ? `(${escopoInput.value})` : '';
    const isBreakingChange = breakingChangeCheckbox.checked;
    const breakingChange = isBreakingChange ? '!' : '';
    const descricao = descricaoInput.value || 'Descrição breve';
    const mensagemAdicional = mensagemInput.value ? `\n\n${mensagemInput.value}` : '';
    const rodape = rodapeInput.value ? `\n\n${rodapeInput.value}` : '';

    const commitMessage = `${emote} ${tipo}${escopo}${breakingChange}: ${descricao}${mensagemAdicional}${rodape}`;

    previewText.textContent = commitMessage;
}

// Função para obter o emote correspondente
function emoteCorrespondente(tipo) {
    const match = tipos.find(t => t.tipo === tipo.toLowerCase());
    return match ? match.emote : '❔';
}

// Event Listener para o tipoInput (auto-complete)
tipoInput.addEventListener('input', () => {
    const valor = tipoInput.value.toLowerCase();
    dropdown.innerHTML = '';

    const filtrados = tipos.filter(t =>
        t.tipo.includes(valor) || t.descricao.toLowerCase().includes(valor)
    );

    filtrados.forEach((t) => {
        const li = document.createElement('li');
        li.textContent = `${t.emote} ${t.tipo} - ${t.descricao}`;
        li.addEventListener('click', () => {
            tipoInput.value = t.tipo;
            emoteSpan.textContent = t.emote;
            dropdown.classList.add('hidden');
            atualizarPreview();
        });
        dropdown.appendChild(li);
    });

    dropdown.classList.toggle('hidden', filtrados.length === 0 || !valor);
});

// Fechar o dropdown quando clicar fora
document.addEventListener('click', (e) => {
    if (!tipoInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

// Atualizar o emote quando o tipo é selecionado manualmente
tipoInput.addEventListener('blur', () => {
    const emote = emoteCorrespondente(tipoInput.value);
    emoteSpan.textContent = emote;
});

// Event listeners para atualizar a pré-visualização
[tipoInput, escopoInput, descricaoInput, mensagemInput, rodapeInput, breakingChangeCheckbox].forEach(input => {
    input.addEventListener('input', atualizarPreview);
});

// Botão de copiar
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(previewText.textContent)
        .then(() => {
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => copyBtn.textContent = 'Copiar', 2000);
        })
        .catch(err => console.error('Erro ao copiar: ', err));
});

// Botão de limpar
clearBtn.addEventListener('click', () => {
    [tipoInput, escopoInput, descricaoInput, mensagemInput, rodapeInput].forEach(input => input.value = '');
    breakingChangeCheckbox.checked = false;
    emoteSpan.textContent = '✨';
    atualizarPreview();
});

// Controle de som
let soundEnabled = true; // Som habilitado por padrão

toggleSoundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    // Alternar ícone
    if (soundEnabled) {
        soundIcon.classList.remove('fa-volume-mute');
        soundIcon.classList.add('fa-volume-up');
    } else {
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-mute');
    }

    // Salvar a preferência no localStorage
    localStorage.setItem('soundEnabled', soundEnabled);
});

// Controle de tema
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');

    // Alternar ícone
    if (isLightMode) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Salvar a preferência no localStorage
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});

// Ao carregar a página, verificar as preferências no localStorage
window.addEventListener('load', () => {
    // Preferência de som
    const savedSoundPreference = localStorage.getItem('soundEnabled');
    if (savedSoundPreference !== null) {
        soundEnabled = savedSoundPreference === 'true';
        if (soundEnabled) {
            soundIcon.classList.remove('fa-volume-mute');
            soundIcon.classList.add('fa-volume-up');
        } else {
            soundIcon.classList.remove('fa-volume-up');
            soundIcon.classList.add('fa-volume-mute');
        }
    }

    // Preferência de tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Objeto para armazenar os sons pré-carregados
const keySounds = {};
const availableKeySounds = []; // Lista de sons disponíveis para tocar aleatoriamente

// Função para pré-carregar os sons
function preloadKeySounds() {
    const keys = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z',
        'BACKSPACE', 'CAPS LOCK', 'ENTER', 'SPACE'
    ];

    keys.forEach(key => {
        const audio = new Audio(`sounds/keys/${key}.wav`);
        keySounds[key] = audio;
        availableKeySounds.push(audio);
    });
}

// Chamar a função de pré-carregamento ao iniciar
preloadKeySounds();

// Selecionar todos os campos de entrada e textarea
const inputFields = [tipoInput, escopoInput, descricaoInput, mensagemInput, rodapeInput];

// Função para reproduzir o som da tecla
function playKeySound(event) {
    if (!soundEnabled) return;

    let key = event.key.toUpperCase(); // Converter para maiúsculas para padronizar

    // Tratar teclas especiais
    if (!keySounds[key]) {
        // Se não houver som específico, tocar um som aleatório
        const randomSound = availableKeySounds[Math.floor(Math.random() * availableKeySounds.length)];
        randomSound.currentTime = 0;
        randomSound.play().catch(error => {
            console.error(`Erro ao reproduzir o som aleatório:`, error);
        });
        return;
    }

    const keySound = keySounds[key];
    if (keySound) {
        keySound.currentTime = 0; // Reinicia o som
        keySound.play().catch(error => {
            console.error(`Erro ao reproduzir o som para a tecla ${key}:`, error);
        });
    }
}

// Adicionar event listener a cada campo de entrada
inputFields.forEach(field => {
    field.addEventListener('keydown', playKeySound);
});

// Inicializar a pré-visualização
atualizarPreview();
