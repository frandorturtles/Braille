document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const inputText = document.getElementById('inputText');
    const translateBtn = document.getElementById('translateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const brailleResult = document.getElementById('brailleResult');

    // Mapeo de caracteres a Braille Unicode (extendido)
    const brailleMap = {
        // Letras minúsculas
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
        'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
        'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
        'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
        'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
        'z': '⠵',
        
        // Letras mayúsculas (añadiendo el indicador de mayúscula)
        'A': '⠠⠁', 'B': '⠠⠃', 'C': '⠠⠉', 'D': '⠠⠙', 'E': '⠠⠑',
        'F': '⠠⠋', 'G': '⠠⠛', 'H': '⠠⠓', 'I': '⠠⠊', 'J': '⠠⠚',
        'K': '⠠⠅', 'L': '⠠⠇', 'M': '⠠⠍', 'N': '⠠⠝', 'O': '⠠⠕',
        'P': '⠠⠏', 'Q': '⠠⠟', 'R': '⠠⠗', 'S': '⠠⠎', 'T': '⠠⠞',
        'U': '⠠⠥', 'V': '⠠⠧', 'W': '⠠⠺', 'X': '⠠⠭', 'Y': '⠠⠽',
        'Z': '⠠⠵',
        
        // Números (añadiendo el indicador numérico)
        '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉', '4': '⠼⠙', '5': '⠼⠑',
        '6': '⠼⠋', '7': '⠼⠛', '8': '⠼⠓', '9': '⠼⠊', '0': '⠼⠚',
        
        // Signos de puntuación y símbolos
        ' ': ' ', '\n': '\n',
        '.': '⠲', ',': '⠂', ';': '⠆', ':': '⠒',
        '?': '⠦', '!': '⠖', "'": '⠄', '"': '⠐⠄',
        '-': '⠤', '_': '⠨⠤', '(': '⠐⠣', ')': '⠐⠜',
        '[': '⠦', ']': '⠴', '{': '⠐⠣⠣', '}': '⠐⠜⠜',
        '/': '⠸⠌', '\\': '⠸⠡', '|': '⠸⠳',
        '+': '⠐⠖', '-': '⠐⠤', '*': '⠐⠔', '=': '⠐⠶',
        '<': '⠐⠣', '>': '⠐⠜', '@': '⠈⠁',
        '#': '⠼', '$': '⠈⠎', '%': '⠨⠴', '^': '⠘', '&': '⠈⠯',
        'á': '⠷', 'é': '⠮', 'í': '⠌', 'ó': '⠬', 'ú': '⠾',
        'ñ': '⠻', 'ü': '⠳', '¿': '⠢', '¡': '⠐⠖'
    };

    // Función para traducir texto a Braille
    function translateToBraille() {
        const text = inputText.value;
        let brailleText = '';
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            brailleText += brailleMap[char] || char;
        }
        
        brailleResult.innerHTML = `<p class="braille-char">${brailleText}</p>`;
    }

    // Función para limpiar el texto
    function clearText() {
        inputText.value = '';
        brailleResult.innerHTML = '<p>El resultado en Braille aparecerá aquí...</p>';
    }

    // Event listeners
    translateBtn.addEventListener('click', translateToBraille);
    clearBtn.addEventListener('click', clearText);

    // Permitir traducción con Enter (Shift+Enter para nueva línea)
    inputText.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            translateToBraille();
        }
    });
});
