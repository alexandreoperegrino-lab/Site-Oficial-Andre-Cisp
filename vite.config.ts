import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import fs from 'fs';

function getBlogEntries() {
  const entries: Record<string, string> = {
    main: path.resolve(__dirname, 'index.html'),
    cursos_gratis: path.resolve(__dirname, 'cursos-gratis.html'),
    curso_manutencao: path.resolve(__dirname, 'curso-manutencao.html'),
    curso_notebook: path.resolve(__dirname, 'curso-notebook.html'),
    curso_eletronica: path.resolve(__dirname, 'curso-eletronica.html'),
    curso_placa_mae: path.resolve(__dirname, 'curso-placa-mae.html'),
  };
  const dirs = ['blog', 'aulas'];
  dirs.forEach(dir => {
    const dirPath = path.resolve(__dirname, dir);
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).filter(f => f.endsWith('.html')).forEach(f => {
        entries[dir + "_" + f.replace('.html', '')] = path.resolve(dirPath, f);
      });
    }
  });
  return entries;
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: getBlogEntries(),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
