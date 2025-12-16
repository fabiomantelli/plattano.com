/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://plattano.com',
  generateRobotsTxt: false, // robots.txt is manually managed
  generateIndexSitemap: true,
  sitemapSize: 5000,
  exclude: ['/404', '/500', '/server-error'],
  // Priority and change frequency for main pages
  additionalPaths: async (config) => {
    const result = []

    // High priority pages
    const highPriorityPages = [
      { loc: '/', priority: 1.0, changefreq: 'daily' },
      { loc: '/solutions/data-protection', priority: 0.9, changefreq: 'weekly' },
      { loc: '/solutions/cybersecurity', priority: 0.9, changefreq: 'weekly' },
      { loc: '/solutions/storage', priority: 0.9, changefreq: 'weekly' },
      { loc: '/about', priority: 0.8, changefreq: 'monthly' },
      { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
      { loc: '/privacy', priority: 0.3, changefreq: 'yearly' },
    ]

    highPriorityPages.forEach((page) => {
      result.push({
        loc: page.loc,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      })
    })

    return result
  },
};