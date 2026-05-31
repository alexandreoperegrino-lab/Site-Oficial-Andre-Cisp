const fs = require('fs');

const articles = [
  'como-consertar-celular-que-nao-liga',
  'vale-a-pena-abrir-assistencia-tecnica-de-celular',
  'ferramentas-para-conserto-de-celular',
  'identificar-curto-placa-mae-notebook',
  'solda-bga-o-que-e-e-como-fazer',
  'defeito-conector-de-carga-celular-resolvido',
  'como-trocar-tela-quebrada-celular',
  'manutencao-preventiva-em-notebooks',
  'multimetro-digital-como-usar-na-eletronica',
  'curso-de-eletronica-online-vale-a-pena',
  'como-lucrar-consertando-celulares-e-iphones',
  'lucro-rapido-com-eletronica-geral',
  'lucro-reparo-placas-mae-notebooks',
  'lucrando-com-solda-bga-e-microeletronica',
  'dicas-fidelizar-clientes-assistencia-tecnica'
];

const baseUrl = 'https://andrecisp.com.br';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/cursos-gratis.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/index.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

articles.forEach(slug => {
  sitemap += `  <url>
    <loc>${baseUrl}/blog/${slug}.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log('Fixed sitemap.xml created');
