const fs = require('fs');

const filesToUpdate = [
    'curso-manutencao.html',
    'curso-notebook.html',
    'curso-eletronica.html',
    'curso-placa-mae.html'
];

const cssToAdd = `
        /* Animations Config */
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .btn-shimmer::after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
            transform: translateX(-100%);
            animation: shimmer 1.5s infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 15px rgba(249, 115, 22, 0.4); }
            50% { box-shadow: 0 0 35px rgba(249, 115, 22, 0.8); }
        }
        .animate-pulse-glow {
            animation: pulse-glow 2s infinite;
        }
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 100ms; }
        .reveal-delay-2 { transition-delay: 200ms; }
        .reveal-delay-3 { transition-delay: 300ms; }
`;

const jsToAdd = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 50;
                reveals.forEach(reveal => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Initial check
        });
    </script>
`;

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Add CSS
    if (!content.includes('.animate-float')) {
        content = content.replace('</style>', cssToAdd + '\n    </style>');
    }

    // Add JS
    if (!content.includes('revealOnScroll()')) {
        content = content.replace('</body>', jsToAdd + '\n</body>');
    }

    // Add .reveal to all <section> elements, taking care not to add it twice
    content = content.replace(/<section([^>]*)>/g, (match, p1) => {
        if (p1.includes('class="')) {
            if (!p1.includes('reveal')) {
                return `<section${p1.replace('class="', 'class="reveal ')}>`;
            }
            return match;
        } else {
            return `<section${p1} class="reveal">`;
        }
    });

    // Make hero section delay 0 to avoid being hidden initially, or remove from hero section
    content = content.replace(/<section([^>]*)class="reveal ([^"]*?)hero-bg([^"]*?)"([^>]*)>/g, '<section$1class="$2hero-bg$3"$4>');
    
    // Add pulsing to "Comprar Agora" or "GARANTIR MINHA VAGA" buttons
    content = content.replace(/glow-orange([^"]*?)"/g, (match, p1) => {
        if (!p1.includes('animate-pulse-glow btn-shimmer')) {
            return `glow-orange${p1} animate-pulse-glow btn-shimmer"`;
        }
        return match;
    });

    // Add floating animation to floating elements like Garantia or hero imgs
    content = content.replace(/alt="(Garantia|Selo de.+|.*Placa.*|.*Notebook.*|Apresentação.*|.*Bancada.*)"([^>]*?)class="([^"]*?)"/gi, (match, p1, p2, p3) => {
        if (!p3.includes('animate-float') && !p3.includes('group-hover')) {
            return `alt="${p1}"${p2}class="${p3} animate-float"`;
        }
        return match;
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Animated: ${file}`);
});
