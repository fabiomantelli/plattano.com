/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // ✅ Domínio principal SEM barra final
  siteUrl: 'https://plattano.com',

  // ✅ Gera o robots.txt automaticamente
  generateRobotsTxt: true,

  // ✅ Gera o sitemap index com vários arquivos, se necessário
  generateIndexSitemap: true,

  // ✅ Máximo de URLs por arquivo de sitemap
  sitemapSize: 5000,

  // ✅ Páginas que você não quer indexar
  exclude: ['/404', '/500', '/server-error'],

  // ✅ Configurações do robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // Opcional: define qual sitemap usar (você já faz isso indiretamente)
    additionalSitemaps: [
      'https://plattano.com/sitemap.xml',
    ],
  },
}
