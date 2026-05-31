import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import fs from 'fs';

function getBlogEntries() {
  const entries: Record<string, string> = {
    main: path.resolve(__dirname, 'index.html'),
    cursos_gratis: path.resolve(__dirname, 'cursos-gratis.html'),
  };
  const blogDir = path.resolve(__dirname, 'blog');
  if (fs.existsSync(blogDir)) {
    fs.readdirSync(blogDir).filter(f => f.endsWith('.html')).forEach(f => {
      entries["blog/" + f.replace('.html', '')] = path.resolve(blogDir, f);
    });
  }
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
