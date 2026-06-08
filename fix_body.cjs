const fs = require('fs');
const filesToUpdate = ['curso-manutencao.html', 'curso-notebook.html', 'curso-eletronica.html', 'curso-placa-mae.html'];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('<body class= animate-pulse-glow btn-shimmer"antialiased', '<body class="antialiased');
    fs.writeFileSync(file, content, 'utf8');
});
