let policy = {
  userAgent: '*',
};

if (process.env.ENVIRONMENT !== 'production') {
  policy.disallow = '/';
}

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [policy],
  },
  outDir: './public',
};
