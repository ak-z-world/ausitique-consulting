/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://auditiqueconsulting.com", // change to your real domain
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  changefreq: "weekly",
  priority: 0.7,

  sitemapSize: 5000,
};