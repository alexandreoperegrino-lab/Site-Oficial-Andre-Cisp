const fs = require('fs');

const filesToUpdate = [
    'curso-manutencao.html',
    'curso-notebook.html',
    'curso-eletronica.html',
    'curso-placa-mae.html'
];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Add float animation to more elements
    content = content.replace(/class="([^"]*?shadow-lg[^"]*?)"/gi, (match, p1) => {
        if (!p1.includes('hover:scale-105') && !p1.includes('hover:-translate-y-2')) {
            return `class="${p1} hover:-translate-y-2 hover:shadow-tech-purpleGlow/30 transition-all duration-500"`;
        }
        return match;
    });

    content = content.replace(/class="([^"]*?card-tech[^"]*?)"/gi, (match, p1) => {
         if (!p1.includes('hover:-translate-y-2')) {
            return `class="${p1} hover:-translate-y-2 hover:shadow-2xl hover:shadow-tech-purple/20 transition-all duration-500"`;
         }
         return match;
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated images and cards in ${file}`);
});
