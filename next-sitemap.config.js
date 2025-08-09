/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://plattano.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  exclude: ['/404', '/500', '/server-error'],
  // REMOVER additionalSitemaps se não houver outros mapas externos
};
