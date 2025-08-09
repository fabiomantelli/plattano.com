/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://plattano.com',
  generateRobotsTxt: false,   // <— desliga a geração do robots.txt
  generateIndexSitemap: true,
  sitemapSize: 5000,
  exclude: ['/404', '/500', '/server-error'],
};